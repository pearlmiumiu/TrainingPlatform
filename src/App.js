import React, { Component } from 'react';
import './App.css';



class App extends Component {
  render() {
    //console.log(classes.Button2)
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to The World's Leading Training Platform</h1>
        </header>
        <p className="App-intro">
          To get started, Please fill out the servey! 

        </p>
        <p className='Appintro'>
          We will provide you a customized curriculum to tailor your training goals and interests!
        </p>
        <a href='https://freeonlinesurveys.com/s/b6fjnAVh'><button className='Button' > 
        Jounery starts here! </button> </a>
        {/*<button className={classes.Button}> Jounery starts here! </button>
        // <button className={classes.Button2}> Jounery starts here! </button>*/}

      </div>
    );
  }
}

export default App;
