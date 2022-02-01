import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    props.showAlert("Converted to lowerCase","success");

        }
        const handleClear=()=>{
            let newText="";
            setText(newText);
    props.showAlert("Text Cleared","success");

            }

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");

    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");

        }
    const[text,setText]=useState("Enter text here");
    //text="new Text"; wrong way to change state
    //setText("new Text");correct way to change the state
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
  <div className="mb-3">
    
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#102123':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
  </div>
  <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
  <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
  <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
  <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
  <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

   

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Tour text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here..."}</p>
        </div>
        </>
    )
}
