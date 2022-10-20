import React from "react";
import './Meme.css';

export default function Meme(){

    const [textState, setTextState] = React.useState({
        topText: "",
        bottomText: "",
        memeUrl: ""
    })
    const [memeDataState, setMemeDataState] = React.useState([{}])
    React.useEffect(() =>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setMemeDataState(data.data.memes))
    }
        
        ,[])
    console.log(memeDataState)
    function handleChange (event){
        const {name, value} = event.target
        setTextState((old)=>{
            return {
                ...old,
                [name]: value
            }
        })
    }

    function getNewMeme(event){
        event.preventDefault();
        const number = Math.floor(Math.random() * 100) + 1;
        console.log(memeDataState[number].url)
        setTextState(old => {
            return {
                ...old,
                memeUrl : memeDataState[number].url
            }
        })
    }

    return(
        <main className="Main">
            <form className="Main--form">
                <span className="Main--form--input--wrapper">
                    <input className="Main--form--input"
                    type="text"
                    name="topText"
                    value={textState.topText}
                    onChange = {handleChange}
                    />
                    <input className="Main--form--input"
                    type="text"
                    name="bottomText"
                    value={textState.bottomText}
                    onChange = {handleChange}
                    />
                </span>
                
                <button className="Main--form--button"
                    onClick={getNewMeme}
                >Get a new Meme</button>
            </form>
            <div className="Meme">
                
                <h2 className="Meme--toptext">{textState.topText}</h2>
              
                <img className="Meme--image" src={textState.memeUrl}></img>
               
                <h2 className="Meme--bottomtext">{textState.bottomText}</h2>
               
                
            </div>
            
        </main>
    );
}