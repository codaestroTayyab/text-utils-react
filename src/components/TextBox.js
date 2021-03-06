import React from "react";
import { useState } from "react";
import propTypes from "prop-types";
export default function TextBox(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alertShow("Text converted to Uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alertShow("Text converted to Lowercase!", "success");
  };

  const onAlternatingCase = () => {
    let newtext = "";
    for (let index = 0; index < text.length; index++) {
      if (index % 2 === 0) {
        newtext += text[index].toLowerCase();
      } else {
        newtext += text[index].toUpperCase();
      }
    }
    setText(newtext);
    props.alertShow("Text converted to Alternating Case!", "success");
  };

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.alertShow("Text will be spoken in some seconds!", "success");

  };

  const handleFindAndReplace = () => {
    let find = document.getElementById("find").value;
    let replace = document.getElementById("replace").value;
    let newText = text.replaceAll(find, replace);
    setText(newText);
  };

  const handleCapClick = () => {
    let arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let newText = arr.join(" ");
    setText(newText);
    props.alertShow("Text converted to Capitalized Case!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.alertShow("Text copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alertShow("Extra Spaces are removed", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.alertShow("Text Cleared!", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          placeholder="Enter text here..."
          value={text}
          onChange={handleChange}
        ></textarea>

        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-1"
          onClick={handleUpClick}
        >
          UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-1"
          onClick={handleLowClick}
        >
          lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-1"
          onClick={handleCapClick}
        >
          Capitalized Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-1"
          onClick={onAlternatingCase}
        >
          aLtErNaTiNg Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-2 mx-1"
          onClick={handleSpeak}
        >
          Speak the Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-secondary my-2 mx-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container">
        <h3>Info about Text</h3>
        <p>
          <li>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            words and {text.length} characters
          </li>
          <li>
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}{" "}
            minutes read
          </li>
        </p>
        <div className="container my-3">
          <h3>Find and Replace the text</h3>
          <input
            type="text"
            className="form-control my-2"
            placeholder="Enter the text you want to change"
            id="find"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter the new text you want to add"
            id="replace"
          />
          <button
            className="btn btn-primary mb-3 mx-1"
            onClick={handleFindAndReplace}
          >
            Replace
          </button>
        </div>
        <h2>Preview</h2>
        {text}
      </div>
    </>
  );
}

TextBox.propTypes = {
  heading: propTypes.string,
};
