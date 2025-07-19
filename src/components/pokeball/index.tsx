import { pokeball, pokeballButton, pokeballLine } from '@/components/pokeball/index.css';

export default function Pokeball({ size = 50 }: { size?: number }) {
  return (
    <div
      className={pokeball}
      style={{
        width: size,
        height: size,
        borderWidth: size * 0.06
      }}
    >
      <div
        className={pokeballLine}
        style={{ height: size * 0.06 }}
      />
      <div
        className={pokeballButton}
        style={{ borderWidth: size * 0.06 }}
      />
    </div>
  );
}
