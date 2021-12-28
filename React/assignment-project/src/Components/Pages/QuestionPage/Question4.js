import {React, useRef, useState} from "react";
import "../css/pages.css";
import "../css/question.css";

function Question4() {

    const resultRef = useRef(); 
    // const [result, setResult] = useState("")

    // clear all the values
    const clearScreen = () => {
        // setResult("");
        resultRef.current.value = "";
    }

    const display = (value) => {
        // setResult(result+value);
        resultRef.current.value = resultRef.current.value + value; 
    }
    const calculate = () => {
        // setResult(eval(result));
        resultRef.current.value = eval(resultRef.current.value);
      }
    
    
    return (
        <div className="pages">
            <h1>Question No. 4</h1>
            <br />
            <table className = "calculator">
            <tbody>
                <tr>
                {/* Display */}
                <td colSpan = "3"> <input className = "display-box" ref={resultRef} type = "text" id = "result" disabled /> </td>
                {/* clearScreen() function clear all the values */}
                <td> <input className = "button" type = "button" value = "C" onClick = {clearScreen} style = {{backgroundColor: "#0058fb"}} /> </td>
                </tr>
                <tr>
                {/* display() function display the value of clicked button */}
                <td> <input className = "button" type = "button" value = "1" onClick = {()=>display("1")} /></td>
                <td> <input className = "button" type = "button" value = "2" onClick = {()=>display("2")} /></td>
                <td> <input className = "button" type = "button" value = "3" onClick = {()=>display("3")} /></td>
                <td> <input className = "button" type = "button" value = "/" onClick = {()=>display("/")} /></td>
                </tr>
                <tr>
                <td> <input className = "button" type = "button" value = "4" onClick = {()=>display("4")} /></td>
                <td> <input className = "button" type = "button" value = "5" onClick = {()=>display("5")} /></td>
                <td> <input className = "button" type = "button" value = "6" onClick = {()=>display("6")} /></td>
                <td> <input className = "button" type = "button" value = "-" onClick = {()=>display("-")} /></td>
                </tr>
                <tr>
                <td> <input className = "button" type = "button" value = "7" onClick = {()=>display("7")} /></td>
                <td> <input className = "button" type = "button" value = "8" onClick = {()=>display("8")} /></td>
                <td> <input className = "button" type = "button" value = "9" onClick = {()=>display("9")} /></td>
                <td> <input className = "button" type = "button" value = "+" onClick = {()=>display("+")} /></td>
                </tr>
                <tr>
                <td> <input className = "button" type = "button" value = "." onClick = {()=>display(".")} /></td>
                <td> <input className = "button" type = "button" value = "0" onClick = {()=>display("0")} /></td>
                {/* calculate() function evaluate the mathematical expression */}
                <td> <input className = "button" type = "button" value = "=" onClick = {calculate} style = {{backgroundColor: "#0058fb"}} /> </td>
                <td> <input className = "button" type = "button" value = "*" onClick = {()=>display("*")} /></td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default Question4

