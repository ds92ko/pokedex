'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

import {
  EASE_FUNCTION,
  POKEMON_MIN_SIZE,
  POKEMON_SIZE_RATIO,
  TRANSITION_DURATION,
  UPDATE_INTERVAL
} from '@/app/favorites/_components/playground/constants';
import {
  emptyPlayground,
  playground,
  pokemon,
  pokemonName
} from '@/app/favorites/_components/playground/index.css';
import { Position } from '@/app/favorites/_components/playground/types';
import { getRandomPosition } from '@/app/favorites/_components/playground/utils';
import { useFavoritesContext } from '@/stores/favorites';

export default function Playground() {
  const { favorites } = useFavoritesContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);
  const lastUpdateTime = useRef(0);
  const [imgSrcs, setImgSrcs] = useState<string[]>([]);
  const [pokemonSize, setPokemonSize] = useState(0);
  const [positions, setPositions] = useState<Position[]>([]);
  const [flipStates, setFlipStates] = useState<boolean[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setImgSrcs(favorites.map(({ animatedImage }) => animatedImage));
  }, [favorites]);

  const updateCanvas = useCallback(
    (time?: number) => {
      const container = containerRef.current;
      if (!container) return;

      if (!time) time = performance.now();

      if (time - lastUpdateTime.current >= UPDATE_INTERVAL) {
        const { offsetWidth: width, offsetHeight: height } = container;

        const size = Math.max(POKEMON_MIN_SIZE, width * POKEMON_SIZE_RATIO);
        setPokemonSize(size);

        const maxX = width - size;
        const maxY = height - size;
        const newPositions = favorites.map(() => getRandomPosition(maxX, maxY));
        setPositions(newPositions);

        const newFlipStates = favorites.map(() => Math.random() < 0.5);
        setFlipStates(newFlipStates);

        lastUpdateTime.current = time;
      }

      animationFrameId.current = requestAnimationFrame(updateCanvas);
    },
    [favorites]
  );

  useEffect(() => {
    updateCanvas();
    const timeout = setTimeout(() => setIsReady(true), TRANSITION_DURATION * 1000);

    const container = containerRef.current;
    const resizeObserver = new ResizeObserver(() => {
      lastUpdateTime.current = 0;
      updateCanvas(performance.now());
    });

    if (container) resizeObserver.observe(container);

    return () => {
      clearTimeout(timeout);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      resizeObserver.disconnect();
    };
  }, [updateCanvas]);

  return (
    <div
      ref={containerRef}
      className={playground}
    >
      {!isReady ? (
        <div className={emptyPlayground}>
          <p>놀이터에 포켓몬을 데려오는 중이에요!</p>
        </div>
      ) : !favorites.length ? (
        <div className={emptyPlayground}>
          <p>아직 놀이터에 포켓몬이 없어요!</p>
          <p>좋아하는 포켓몬을 잡아보세요!</p>
        </div>
      ) : (
        favorites.map(
          ({ id, name, pixelImage }, idx) =>
            positions[idx]?.x &&
            positions[idx]?.y && (
              <motion.div
                key={id}
                className={pokemon}
                style={{
                  width: pokemonSize,
                  height: pokemonSize,
                  zIndex: Math.floor(positions[idx].y)
                }}
                initial={{
                  x: positions[idx].x,
                  y: positions[idx].y
                }}
                animate={{
                  x: positions[idx].x,
                  y: positions[idx].y
                }}
                transition={
                  isReady
                    ? {
                        duration: TRANSITION_DURATION,
                        ease: EASE_FUNCTION,
                        delay: idx % Math.ceil(TRANSITION_DURATION + 1)
                      }
                    : { duration: 0, type: 'tween' }
                }
              >
                <span
                  className={pokemonName}
                  style={{
                    fontSize: pokemonSize / 3
                  }}
                >
                  {name}
                </span>
                <motion.div
                  style={{
                    width: pokemonSize,
                    height: pokemonSize,
                    display: 'inline-block',
                    transformOrigin: 'center'
                  }}
                  animate={{
                    y: imgSrcs[idx] === pixelImage ? [0, pokemonSize * -0.1, 0] : 0
                  }}
                  transition={
                    imgSrcs[idx] === pixelImage
                      ? {
                          duration: TRANSITION_DURATION / 2,
                          ease: EASE_FUNCTION,
                          repeat: Infinity,
                          delay: idx % 2
                        }
                      : { duration: 0, type: 'tween' }
                  }
                >
                  <Image
                    src={imgSrcs[idx]}
                    alt={name}
                    width={pokemonSize}
                    height={pokemonSize}
                    draggable={false}
                    onError={() => {
                      setImgSrcs(prev => {
                        const copy = [...prev];
                        copy[idx] = pixelImage;
                        return copy;
                      });
                    }}
                    style={{ transform: flipStates[idx] ? 'scaleX(-1)' : 'scaleX(1)' }}
                  />
                </motion.div>
              </motion.div>
            )
        )
      )}
    </div>
  );
}
