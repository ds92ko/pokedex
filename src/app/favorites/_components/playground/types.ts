export interface Position {
  x: number;
  y: number;
}

export type GetRandomPosition = (maxX: number, maxY: number) => Position;
