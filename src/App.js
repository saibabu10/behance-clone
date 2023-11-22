import React from 'react';
import HeaderComponent from './components/HeaderComponents/HeaderComponent'
import { FooterComponents } from './components/FooterComponents/FooterComponents';
import SearchBar from './components/BodyComponents/SearchBar';
import SelectBar from './components/BodyComponents/SelectBar';
import MainCards from './components/BodyComponents/MainCards';
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <SelectBar/>
      <SearchBar/>
      <hr className='mt-[1rem]'/>
     <MainCards />
      <FooterComponents/>
    </div>
  );
}

export default App;
