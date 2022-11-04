import React from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from "./Components/NavBar/NavBar";
import RowPost from './Components/RowPost/RowPost';
import { actionsUrl, originalsUrl } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originalsUrl} title="Netflix Originals"/>
      <RowPost url={actionsUrl} title="Action" isSmall />
    </div>
  );
}

export default App;
