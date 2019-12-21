import React from 'react';
import Alert from './Alert';
import Axios from 'axios';
import '../styles/AddProperty.css';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: '',
        bedrooms: '0',
        bathrooms: '0',
        price:'0',
        city: '',
        email:'',
      },
      status: {
        alertMessage: '',
        isSuccess: false,
        isError: false,
      }
    }
  }

  handleAddProperty = (event) => {
    event.preventDefault();
    this.setState({
      status: {
        alertMessage: '',
        isSuccess: false,
        isError: false,
      },
    });
    console.log(this.state.fields);
    Axios.post('http://localhost:3000/api/v1/PropertyListing/',{
    ...this.state.fields, [event.target.name]: event.target.value,
    })
    .then((response) => {
      console.log(response.data);
      this.setState({
        alertMessage: 'Property Added',
        isSuccess: true,
      });
    })
   .catch(error => {
     this.setState({
       alertMessage: 'Error, property not added',
       isError: true,
     });
   })
  }

  handleFieldChange = (event) => {
    this.setState({
      fields: {...this.state.fields, [event.target.name]: event.target.value},
    });
  };

  render() {
    return (
  <div className="AddProperty">
    <form onSubmit={this.handleAddProperty}>
      <div className="propertyTitle">
        <label>
          Title:
          <br></br>
          <input 
            name="title" 
            value={this.state.fields.title}
            onChange={this.handleFieldChange} 
          />
        </label>
      </div>
      <div className="propertyType">
        <label>
          Type:
          <br></br>
          <select
            name="type"
            value={this.state.fields.type}
            onChange={this.handleFieldChange}>
              <option value="flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End Of Terrace">End Of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
          </select>
        </label>
      </div>
      <div className="propertyBedrooms">
        <label>
          Bedrooms:
          <br></br>
          <input
            name="bedrooms"
            value={this.state.fields.bedrooms}
            onChange={this.handleFieldChange}
          />
        </label>
      </div>
      <div className="propertyBathrooms">
        <label>
          Bathrooms:
          <br></br>
          <input
            name="bathrooms"
            value={this.state.fields.bathrooms}
            onChange={this.handleFieldChange}
            />
        </label>
      </div>
      <div className="propertyPrice">
        <label>
          Price:
          <br></br>
          <input
            name="price"
            value={this.state.fields.price}
            onChange={this.handleFieldChange}
           />
        </label>
      </div>
      <div className="propertyCity">
        <label>
          City:
          <br></br>
          <select
            name="city"
            value={this.state.fields.city}
            onChange={this.handleFieldChange}>
              <option defaultValue="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
          </select>
        </label>
      </div>
      <div className="propertyEmail">
        <label>
          email:
          <br></br>
          <input
            name="email"
            type="email"
            value={this.state.fields.email}
            onChange={this.handleFieldChange}
          />
        </label>
      </div>
          <button type="submit">
            <label>Add</label>
          </button>
          {this.state.status.isSuccess && (
            <Alert message={this.state.status.alertMessage} success />
          )}
          {this.state.status.isError && (
            <Alert message={this.state.status.alertMessage} success />
          )}
    </form>
  </div>
    );
  }
}

export default AddProperty;