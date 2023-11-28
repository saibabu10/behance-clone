import React from 'react';
import HeaderComponent from './components/HeaderComponents/HeaderComponent'
import FooterComponent from './components/FooterComponents/FooterComponent'
import SearchBar from './components/BodyComponents/SearchBarComponent';
import SelectBar from './components/BodyComponents/SelectBarComponent';
import MainCards from './components/BodyComponents/MainCardsComponent';
function App() {
  return (
    <div className="App">
      <div className='sticky top-0 bg-white z-40'>
      <HeaderComponent/>
      <SelectBar/>
      <SearchBar/>
      </div>
      <hr className='mt-[1rem]'/>
     <MainCards />
      <FooterComponent/>
    </div>
  );
}

export default App;
