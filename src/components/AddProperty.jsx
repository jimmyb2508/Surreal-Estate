import React from 'react';

import '../styles/AddProperty.css';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
        type: '',
        bedrooms: '',
        bathrooms: '',
        price:'',
        city: '',
        email:''
      }
    }
  }

  handleAddProperty = (event) => {
    this.setState({})
    event.preventDefault();
    console.log(this.state.fields);
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
      <label>
      Title:
        <input 
        name="title" 
        value={this.state.fields.title}
        onChange={this.handleFieldChange} 
        />
      </label>
      <br></br>
      <label>
        Type:
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
      <br></br>
      <label>
        Bedrooms:
        <input
          name="bedrooms"
          value={this.state.fields.bedrooms}
          onChange={this.handleFieldChange}
          />
      </label>
      <br></br>
      <label>
        Bathrooms:
        <input
          name="bathrooms"
          value={this.state.fields.bathrooms}
          onChange={this.handleFieldChange}
          />
      </label>
      <br></br>
      <label>
        Price:
        <input
        name="price"
        value={this.state.fields.price}
        onChange={this.handleFieldChange}
        />
      </label>
      <br></br>
      <label>
        City:
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
      <br></br>
        <label>
          email:
      <input
      name="email"
      type="email"
      value={this.state.fields.email}
      onChange={this.handleFieldChange}
      />
      </label>
        <button type="submit">
          <label>Add</label>
        </button>
    </form>
  </div>
    );
  }
}

export default AddProperty;