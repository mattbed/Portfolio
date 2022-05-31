import './App.css';
import React from "react";
import Header from './Header';
import MainView from './MainView';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="body">
        <MainView />
      </main>
    </div>
  );
}

export default App;
