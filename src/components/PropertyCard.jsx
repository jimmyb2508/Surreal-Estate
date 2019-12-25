import React, { Component } from 'react';

class PropertyCard extends React.Component {
  render() {
    return (
      <div>
        <div className="PropertyCardTitle">
          <span>{this.props.title}</span>
        </div>
        <div className="PropertyCardType">
          <span>{this.props.type}</span>
        </div>
        <div className="PropertyCardBedrooms">
          <span>{this.props.bedrooms}</span>
        </div>
        <div className="PropertyCardBathrooms">
          <span>{this.props.bathrooms}</span>
        </div>
        <div className="PropertyCardPrice">
          <span>{this.props.price}</span>
        </div>
        <div className="PropertyCardCity">
          <span>{this.props.city}</span>
        </div>
        <div className="PropertyCardEmail">
          <span>{this.props.email}</span>
        </div>
      </div>
    );
  }
}

export default PropertyCard;