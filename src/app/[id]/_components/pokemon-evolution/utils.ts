import { PositionedEvolution } from '@/app/[id]/_components/pokemon-evolution/types';
import { EvolutionChain } from '@/type/pokemons';

export function assignGridRows(nodes: EvolutionChain[]): PositionedEvolution[] {
  const nodeMap = new Map<number, EvolutionChain>();
  nodes.forEach(n => nodeMap.set(n.id, n));

  const childrenMap = new Map<number | null, EvolutionChain[]>();
  nodes.forEach(n => {
    const parentId = n.from?.id || null;
    if (!childrenMap.has(parentId)) childrenMap.set(parentId, []);
    childrenMap.get(parentId)!.push(n);
  });

  const positionedNodes: PositionedEvolution[] = [];
  let rowCounter = 1;

  function dfs(currentId: number | null): number {
    const children = childrenMap.get(currentId) || [];

    if (children.length === 0) {
      const leafNode = nodeMap.get(currentId!);
      if (!leafNode) return rowCounter++;

      positionedNodes.push({
        ...leafNode,
        gridColumn: leafNode.stage + 1,
        gridRow: rowCounter
      });
      return rowCounter++;
    }

    const childRows: number[] = [];
    for (const child of children) {
      const childRow = dfs(child.id);
      childRows.push(childRow);
    }

    const minChildRow = Math.min(...childRows);

    if (currentId !== null) {
      const currentNode = nodeMap.get(currentId)!;
      positionedNodes.push({
        ...currentNode,
        gridColumn: currentNode.stage + 1,
        gridRow: minChildRow
      });
    }

    return minChildRow;
  }

  dfs(null);

  return positionedNodes;
}
