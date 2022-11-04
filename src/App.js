import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from "./Components/NavBar/NavBar";
import RowPost from './Components/RowPost/RowPost';
import { actionsUrl, comedyUrl, horrorUrl, originalsUrl, romanceUrl } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originalsUrl} title="Netflix Originals"/>
      <RowPost url={actionsUrl} title="Action" isSmall />
      <RowPost url={comedyUrl} title="Comedy Movies" isSmall />
      <RowPost url={horrorUrl} title="Horror Movies" isSmall />
      <RowPost url={romanceUrl} title="Romance Movies" isSmall />
    </div>
  );
}

export default App;
