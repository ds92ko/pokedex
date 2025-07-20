import { pokeball, pokeballButton, pokeballLine } from '@/components/pokeball/index.css';

export default function Pokeball({ size }: { size?: number }) {
  return (
    <div
      className={pokeball}
      style={{
        width: size || '100%',
        height: size || '100%',
        borderWidth: (size || 50) * 0.06
      }}
    >
      <div
        className={pokeballLine}
        style={{ height: (size || 50) * 0.06 }}
      />
      <div
        className={pokeballButton}
        style={{ borderWidth: (size || 50) * 0.06 }}
      />
    </div>
  );
}
