import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Section from "./components/page/Section";
import {MenuItems} from "./components/navbar/MenuItems";
import HomePage from "./components/page/home/HomePage";
import AboutMe from "./components/page/aboutme/AboutMePage";




function App() {
  return (
    <div className="App">
      <Navbar />

      <HomePage 
        title={"Home"}
        id="Home"> 
        </HomePage>

        <AboutMe
        title={"About Me"}
        id="AboutMe"
        ></AboutMe>

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
