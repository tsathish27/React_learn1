// Code: App.jsx
import { useState } from 'react';
import BG from './Components/bg/BG';
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/hero/Hero';
const App = () => {

  let heroData = [
    {text1:"Fast lanes and city lights",text2:"the open road awaits"},
    {text1:"Sleek curves ",text2:"endless roads"},
    {text1:"Roaring engines ",text2:"silent streets"},
  ]
  const[heroCount,setHeroCount] = useState(2);
  const[playStatus,setPlayStatus] = useState(false);
  
  return (
    <div>
       <BG playStatus={playStatus}heroCount={heroCount}/>
       <Navbar/>
       <Hero
       setPlayStatus={setPlayStatus}
       heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}

       />
    </div>
  );
}

export default App;