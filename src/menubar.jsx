import React, { Component } from 'react';
//import img from './image/img.jpg';
import "./style.css";

class menubar extends Component {
    render() {
        return (
            <body>
            <h1 className="menubar"><center>MenuBar</center></h1>
           
            <div className="img">
           
            <center><a href="/#page1"> <button className="btn btn-warning" style={{width:100 + '%'}}>Page1</button><hr /></a></center>           
            <center><a href="/#page2"> <button className="btn btn-danger" style={{width:100 + '%'}}>Page2</button><hr /></a></center>
            </div>
</body>  
               
          
        );
    }
}

export default menubar;