import React, { Component } from 'react';
import Header from "./common/Header";
import './ShowSubscribers.css';
import './common/common.css';
import {Link} from 'react-router-dom';

class ShowSubscribers extends Component {

  clickHandler(message){
      alert(message);
  }

  onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId);
  }

  // constructor()
  // {
  //   super();
  //   this.state = {
  //     subscribersListToShow: []
  //   }
  //   console.log("Constructor called")
  // }

  // componentDidMount()
  // {
  //   let newSubscriber = {
  //     id: 1,
  //     name: "Debanik Kundu",
  //     phone: "9158314321"
  //   }
  //   let subscribersList = this.state.subscribersListToShow;
  //   subscribersList.push(newSubscriber);
  //   this.setState({subscribersListToShow: subscribersList});
  //   console.log("componentDidMount called for adding subscriber")
  // }

  render(){
    console.log("render called")
    // let subscribers = [
    //   {
    //     id: 1,
    //     name: "Debanik Kundu",
    //     phone: "9158314321"
    //   },
    //   {
    //     id: 2,
    //     name: "Payal Nath",
    //     phone: "9168667520"
    //   },
    //   {
    //     id: 3,
    //     name: "Hiranmayee Kundu",
    //     phone: "0123456789"
    //   }
    // ]
    return (
      <div>
        <Header heading="Phone Directory" instructor="Debanik Kundu"/>
        <div className="component-body-container">
          <Link to="/add">
            <button className="custom-btn add-btn">Add</button>
          </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
        </div>
        
        {
          //this.state.subscribersListToShow.map(sub => {
            this.props.subscribersList.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                <button className="custom-btn dlt-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
              </span>
              </div>
          })
        }
        
      </div>
     
    );
  }
  
}

export default ShowSubscribers;

