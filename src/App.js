import React from 'react';
import HeaderComponent from './components/HeaderComponents/HeaderComponent'
import BodyComponents from './components/BodyComponents/BodyComponents';
import { FooterComponents } from './components/FooterComponents/FooterComponents';
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <BodyComponents/>
      <FooterComponents/>
    </div>
  );
}

export default App;
