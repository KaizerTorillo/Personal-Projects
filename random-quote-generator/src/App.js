import './App.css';
import React, {useState} from 'react';
import quotes from "./quotes.json";
import palette from "./colors.js"
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa" 

function App() {

  
  const [author, setAuthor] = useState("Charles Swindoll");
  const [quote, setQuote] = useState("Work is 1-% what happens to me and 90% of how I react to it.")
  const [oneColour, setOneColor] = useState("#69D2E7")


  const randomQuote = () => {
    let randomNumber = Math.floor(quotes.length * Math.random())
    setOneColor(palette[randomNumber])
    setQuote(quotes[randomNumber].quote)
    setAuthor(quotes[randomNumber].author)

  }

  return (
    <div className="App" >
      <header className="App-header" style={{backgroundColor: oneColour}}>
        <div id="quote-box">
          <div id="text" style={{color: oneColour}}>
            <p>
              <FaQuoteLeft size="15"/>
              {quote}
              <FaQuoteRight size="15"/>
            </p>
          </div>
          <div id="author" style={{color: oneColour}}>
            <p>
              - {author}
            </p>
          </div>
          <button id="new-quote" style={{backgroundColor: oneColour}} onClick={() => randomQuote()}>New Quote</button>
          <div className='button' style={{backgroundColor: oneColour}}>
          <a id="tweet-quote" target="_blank" href="http://www.twitter.com/intent/tweet">
          <FaTwitter></FaTwitter>
          </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

