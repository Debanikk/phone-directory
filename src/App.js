import React, { Component } from 'react';
import Header from "./Header";
import './App.css';

class App extends Component {

  clickHandler(message){
      alert(message);
  }

  render(){
    let subscribers = [
      {
        id: 1,
        name: "Debanik Kundu",
        phone: "9158314321"
      },
      {
        id: 2,
        name: "Payal Nath",
        phone: "9168667520"
      },
      {
        id: 3,
        name: "Hiranmayee Kundu",
        phone: "0123456789"
      }
    ]
    return (
      <div>
        <Header heading="Phone Directory" instructor="Debanik Kundu"/>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
        </div>
        
        {
          subscribers.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn dlt-btn" onClick={this.clickHandler.bind(this, "Delete button is now Clicked")}>Delete</button>
              </span>
              </div>
          })
        }
        
      </div>
     
    );
  }
  
}

export default App;

