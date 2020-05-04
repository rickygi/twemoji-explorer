import React, { memo, useMemo } from 'react';
import useScroll from './use-scroll';

const ScrollWindow = ({
  height,
  itemCount,
  itemHeight,
  itemWidth,
  Item,
  itemsPerRow
}) => {
  const [scrollTop, ref] = useScroll();

  const scrollWindowHeight = Math.ceil(itemCount / itemsPerRow) * itemHeight;

  let startNode = Math.floor(scrollTop / itemHeight) - 1;
  startNode = Math.max(0, startNode);

  const offsetY = startNode * itemHeight;

  let nodeCount = Math.ceil(height / itemHeight) + 2;
  nodeCount = Math.min(itemCount - startNode, nodeCount);

  const nodes = useMemo(
    () =>
      new Array(nodeCount).fill(null).map((_, index) => {
        const items = createItems(index, itemsPerRow, itemCount);
        return items.map((item) => (
          <Item key={item + startNode} index={item + startNode * itemsPerRow} />
        ));
      }),
    [startNode, nodeCount, itemCount, itemsPerRow]
  );

  return (
    <div
      className="scroll-window-grid"
      style={{ height, overflow: 'auto' }}
      ref={ref}
    >
      <div
        className="scroll-window"
        style={{
          height: scrollWindowHeight,
          width: itemWidth * itemsPerRow,
          overflow: 'hidden'
        }}
      >
        <div
          className="grid"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
            transform: `translateY(${offsetY}px)`
          }}
        >
          {nodes}
        </div>
      </div>
    </div>
  );
};

function createItems(index, itemsPerRow, itemCount) {
  const items = [];
  const rowIndex = index * itemsPerRow;
  const limit = Math.min(rowIndex + itemsPerRow, itemCount);

  for (let i = rowIndex; i < limit; i++) {
    items.push(i);
  }

  return items;
}

export default memo(ScrollWindow);
