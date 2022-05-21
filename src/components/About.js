import React, { useState } from 'react'

export default function About() {
    // let myStyle={
    //     color:'red',
    //     backgroundColor:'blue'
    // }
    let [myStyle,setMyStyle]=useState({
        color:'red',
        backgroundColor:'blue'
    })

    let [btnText,setBtnText]=useState("Enable Dark Mode")

    let toggleMode=()=>{
        if(myStyle.color==='red')
        {
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'2px solid blue'
            })
            setBtnText("Enable Light Mode")
        }
        else
        {
            setMyStyle({
                color:'red',
                backgroundColor:'blue',
                border:'2px solid black'
            })
            setBtnText("Enable Dark Mode")   
        }
    }
    return (
        <div className="container" style={myStyle}>
            <h2>About Us</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">You can manipulate text in a variety of ways, from the length of space between letters in words of text, to the length of space between the words of a sentence, to the spacing between sentences in a paragraph, to how much space is used to indent the text contained in a paragraph</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">It magnifies your ability to perform incredible feats of text and data wrangling. You should download NimbleText right now. It's free.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">It also covers text alignment, spacing, and letter case. Microsoft Word styles make it easy to change and apply styles throughout a document.</div>
                    </div>
                </div>
                <button type="button" onClick={toggleMode} className="btn btn-secondary my-1">{btnText}</button>
            </div>
        </div>
    )
}
