import React from 'react'
import Dashboard from './Pages/Dashboard'
import Posts from './Pages/Posts'
import Final from './Pages/Final'
import Bookmarks from './Pages/Bookmarks'
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

const App = () => {
  const [theme,setTheme] = useState("light");

  useEffect(() =>{
      if(theme === "dark"){
        document.documentElement.classList.add("dark");
      }else{
        document.documentElement.classList.remove("dark");
      }
  }, [theme]);

  const handleThemeSwitch = () =>{
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='posts' element={<Posts/>}/>
        <Route path='final' element={<Final/>}/>
        <Route path='bookmarks' element={<Bookmarks/>}/>
      </Routes>
    </BrowserRouter>
    // <div>
      
    //   {/* <Dashboard/> */}
    //   <Posts/>
    //   {/* <Final/> */}
    //   {/* <Bookmarks/> */}
    // </div>
  )
}

export default App