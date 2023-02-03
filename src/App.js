import './App.css';
import NavBar from './Component/NavBar';
import News from './Component/News';

// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'


export default class App extends Component {
  pageSize =5;
  state = {
    progress : 10
  }


  setProgress = (progress)=>{
    this.setState({ progress: progress})
  }
  render() {
    return (
      
      <div>
        <Router>
        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={6}
      />
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>} />
        <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/>} />
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>} />
        <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/>} />
        <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/>} />
        <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/>} />
        <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/>} />
        <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/>} />
          
        </Routes>
        </Router>



      </div>
    )
  }
}



