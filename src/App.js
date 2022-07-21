import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");



  const lightDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      alertShow("Dark Mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      alertShow("Light Mode is enabled", "success");
    }
  };

  const toggleMode = (event) => {
    switch (event.currentTarget.id) {
      case "blue":
        setMode("light");
       
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "white";
        alertShow("Blue Mode is enabled", "success");
        break;
      case "grey":
        setMode("light");
      
        document.body.style.backgroundColor = "grey";
        document.body.style.color = "white";
        alertShow("Grey Mode is enabled", "success");
        break;
      case "green":
        setMode("light");
        
        document.body.style.backgroundColor = "green";
        document.body.style.color = "white";
        alertShow("Green Mode is enabled", "success");
        break;
      case "red":
        setMode("light");
        
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        alertShow("Red Mode is enabled", "success");
        break;
      case "yellow":
        setMode("dark");
    
        document.body.style.backgroundColor = "yellow";
        document.body.style.color = "black";
        alertShow("Yellow Mode is enabled", "success");
        break;
      case "sky-blue":
        setMode("dark");
      
        document.body.style.backgroundColor = "#0dcaf0";
        document.body.style.color = "black";
        alertShow("Sky-Blue Mode is enabled", "success");
        break;
      case "reset":
        setMode("light");
    
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        alertShow("Theme restored to default!", "success");
        break;

      default:
        break;
    }
  };

  const [alert, setAlert] = useState(null);

  const alertShow = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="Texter"
          mode={mode}
          toggle={toggleMode}
          lightDarkMode={lightDarkMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/" element = {<TextBox heading="Text Analyzer" alertShow={alertShow} />}/>
            <Route exact path="about" element = {<About/> }/> */}
            <TextBox heading="Texter - Word Counter, Text Manipulator" alertShow={alertShow} />

          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
