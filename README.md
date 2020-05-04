# Twemoji Explorer

```
npm install
npm start
npm test
npm build
```

## Mentions

- https://twemoji.twitter.com/
- https://emojipedia.org/
- https://unicode.org/emoji/charts/full-emoji-list.html

### `ScrollWindowGrid` Example

```jsx
import ScrollWindowGrid from '../components/scroll-window-grid';

const baseUrl = 'https://twemoji.maxcdn.com/v/latest/svg/';
const items = [{...}];

function Example() {
  return (
    <ScrollWindowGrid
      baseUrl={baseUrl}
      items={items}
    />
  );
}
```

### `ScrollWindowGrid` Props

| Prop                   | Type                       | Required | Default |
| ---------------------- | -------------------------- | -------- | ------- |
| baseUrl                | string                     | true     |         |
| items                  | array                      | true     |         |
| fileFormat             | 'jpg' \| 'png'\| 'jpg'     | false    | 'svg'   |
| itemsPerRow            | number                     | false    | 4       |
| itemBackgroundGradient | 'dark' \| 'light'\| 'none' | false    | 'none'  |
| itemMaxHeight          | number                     | false    | 512     |
| itemMaxWidth           | number                     | false    | 512     |
| useBreakpoints         | boolean                    | false    | true    |
