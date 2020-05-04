import React from 'react';
import './app.css';
import twemojis from '../data';
import ScrollWindowGrid from '../components/scroll-window-grid';

function App() {
  return (
    <div className="app">
      <ScrollWindowGrid
        baseUrl="https://twemoji.maxcdn.com/v/latest/svg/"
        items={twemojis}
        itemsPerRow={6}
        itemBackgroundGradient="dark"
      />
    </div>
  );
}

export default App;
