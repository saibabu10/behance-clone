import React from 'react';
import HeaderComponent from './components/HeaderComponents/HeaderComponent'
import FooterComponent from './components/FooterComponents/FooterComponent'
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
      <FooterComponent/>
    </div>
  );
}

export default App;
