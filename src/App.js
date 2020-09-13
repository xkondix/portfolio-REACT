import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Section from "./components/page/Section";
import {MenuItems} from "./components/navbar/MenuItems";


function App() {
  return (
    <div className="App">
      <Navbar />


      {MenuItems.map((item,index) => 
{
    return (
        <Section
        title={item.title}
        subtitle={"xd"}
        dark={true}
        id={item.title}> 
        </Section>)
    })}

    </div>
  );
}

export default App;
