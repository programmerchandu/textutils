import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleToLowerClick = () => {
        let ltext = text.toLowerCase();
        setText(ltext);
    }

    const handleToClearText = () => {
        let ctext = '';
        setText(ctext);
    }

     const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
     }

     const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
     }


    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const [text, setText] = useState('Enter text here');
    // text = "new text"; // wrong way.
    // setText("new Text"); // correct way to change the state

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" onChange={handleOnChange} value={text} rows="5"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleToLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleToClearText}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Spaces</button>
                
            </div>
            <div className='container'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} charaters</p>
                <p>{0.008 * text.split(" ").length} Minutes To Read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
