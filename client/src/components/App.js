import React from "react";
//import {BrowserRouter, Route, Switch} from "react-router-dom";
import {BrowserRouter,Route,Routes} from "react-router-dom";

import Header from "./Header";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Shop from "./shop/Shop";
import Chatbot from "./chatbot/Chatbot";

const App = () => {
    return (
      <div>
        
        <BrowserRouter>
       
          <Header/>
          <div className="container">
            
          <Routes>
            
         
            <Route exact path="/"  element={<Landing />} />
            <Route path="/about" element={<About/>} />
            <Route path="/shop" element={<Shop/>} />
          </Routes>
          
          {/* chatbot will always in all pages */}
          <Chatbot/>
          </div>
        </BrowserRouter>
      </div>
    )
  };


export default App;

