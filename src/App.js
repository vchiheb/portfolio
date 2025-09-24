import { useState, useEffect } from 'react';

import './App.css';

function Header() {
  return (
    <header>
      <h1>Portfolio</h1>
      <h2>Vanessa Chiheb</h2>
    </header>
  )
}

function Footer(){
  return (
    <div>&copy; Vanessa Chiheb 2026</div>
  )
}

function App() {  

  return (
    <>
      <Header />
      <article>
        <h3>React Apps - Front End only or Public API Based</h3>
        <div class="flex-container">
          <div class="flex-item">
            <div className="container">
              <div className="panel">
                <h4>Expanding Cards</h4>
                <p>This mini-app features an animation as the user selects a card to see at full size. Other cards are minimised when not being viewed.</p>
                <a href="https://github.org" target="_blank">Github Repository</a>
                <a href="https://www.google.com" target="_blank">Test Drive</a>
                <img src="expanding-cards.png" />
              </div>  
            </div>
          </div>
          <div class="flex-item">
            <div className="container">
              <div className="panel">
                <h4>Public Holidays</h4>
                <p>This mini-app uses the free Public Holidays API. Please note the API doesn't include all countries world wide.</p>
                <a href="https://github.org" target="_blank">Github Repository</a>
                <a href="https://www.google.com" target="_blank">Test Drive</a>
                <img src="public-holidays.png" />
              </div>  
            </div>
          </div>
        </div>

      </article>
      <Footer />
    </>
  )

}

export default App;