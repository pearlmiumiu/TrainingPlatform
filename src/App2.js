import React, { Component } from 'react';
import './App.css';



class App extends Component {
  render() {
    //console.log(classes.Button2)
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Personalized Course List for Liping:</h1>
        </header>
     
      <img src="/pythondata.jpeg" width="150"/>
      <p><a href="https://www.coursera.org/learn/python-data">Python Data Structures</a></p>
      Completed: 80%
      
      <hr></hr>
      <img src="/standfordml.png" width="150"/>
      <p><a href="https://www.youtube.com/watch?v=UzxYlbK2c7E&t=5s">Standford Machine Learning</a></p>
      Completed: 0%
      <hr></hr>
      <img src="/cleancode.png" width="150"/>
      <p><a href="https://www.youtube.com/watch?v=QedpQjxBPMA&list=PLlu0CT-JnSasQzGrGzddSczJQQU7295D2">Clean Code by Robert Martin</a></p>
      Completed: 16%
      <hr></hr>
      <img src="/design.png" width="150"/>
      <p><a href="https://www.youtube.com/watch?v=IzN9Vuoivrg&list=PL6XklZATqYx9dj72MKG6wLYjljeB2odra">OO Systems Analysis and Design</a></p>
      Completed: 30%
      <hr></hr>
      <img src="/py3.jpg" width="180"/>
      <p><a href="https://www.youtube.com/watch?v=CkIrizsP64c&list=PL1A2CSdiySGIPxpSlgzsZiWDavYTAx61d">Python3 Advanced Tutorial</a></p>
      Completed: 10%
      <hr></hr>
      <img src="/algorithm.jpeg" width="180"/>
      <p><a href="https://www.youtube.com/watch?v=HtSuA80QTyo&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb">Introduction to Algorithm</a></p>
      Completed: 28%
      <hr></hr>

      </div>
    );
  }
}

export default App;
