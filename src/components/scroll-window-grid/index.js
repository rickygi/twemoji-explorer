import React, { memo } from 'react';
import PropTypes from 'prop-types';
import useWindowSize from './use-window-size';
import ScrollWindow from './scroll-window';

function ScrollWindowGrid({
  baseUrl,
  items,
  itemsPerRow,
  itemBackgroundGradient,
  itemMaxHeight,
  itemMaxWidth,
  fileFormat,
  useBreakpoints
}) {
  const windowSize = useWindowSize();

  const itemCount = items.length;
  const aspectRatio = itemMaxHeight / itemMaxWidth;

  if (useBreakpoints) {
    const lg = windowSize.width <= 1024;
    const md = windowSize.width <= 768;
    const sm = windowSize.width <= 640;

    itemsPerRow = lg && itemsPerRow > 3 ? 3 : itemsPerRow;
    itemsPerRow = md && itemsPerRow > 2 ? 2 : itemsPerRow;
    itemsPerRow = sm ? 1 : itemsPerRow;
  }

  const itemHeight = Math.min(
    (windowSize.width * aspectRatio) / itemsPerRow,
    itemMaxHeight
  );
  const itemWidth = Math.min(windowSize.width / itemsPerRow, itemMaxWidth);

  const rgb = itemBackgroundGradient === 'dark' ? '0,0,0' : '255,255,255';
  const linearGradient =
    itemBackgroundGradient === 'none'
      ? ''
      : `, linear-gradient(135deg, transparent 0%, rgba(${rgb},0.2) 100%)`;

  const Item = memo(({ index }) => {
    const showImage = index < itemCount;
    return (
      <div
        key={index}
        className="item"
        style={{
          height: itemHeight,
          backgroundImage: showImage
            ? `url(${baseUrl}${
                items[index] && items[index].code
              }.${fileFormat})${linearGradient}`
            : '',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      ></div>
    );
  });

  return (
    <ScrollWindow
      height={windowSize.height}
      width={windowSize.width}
      itemCount={itemCount}
      itemHeight={itemHeight}
      itemWidth={itemWidth}
      Item={Item}
      itemsPerRow={itemsPerRow}
    />
  );
}

ScrollWindowGrid.defaultProps = {
  itemsPerRow: 4,
  itemBackgroundGradient: 'none',
  itemMaxHeight: 512,
  itemMaxWidth: 512,
  fileFormat: 'svg',
  useBreakpoints: false
};

ScrollWindowGrid.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string
    })
  ),
  itemBackgroundGradient: PropTypes.oneOf(['dark', 'light', 'none'])
};

export default ScrollWindowGrid;
