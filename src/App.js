import React from 'react';
import HeaderComponent from './components/HeaderComponents/HeaderComponent'
import { FooterComponents } from './components/FooterComponents/FooterComponents';
import SearchBav from './components/BodyComponents/SearchBar';
import SearchTypeCard from './components/BodyComponents/SearchTypeCard';
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <SearchBav/>
      <SearchTypeCard/>
      
      <FooterComponents/>
    </div>
  );
}

export default App;
