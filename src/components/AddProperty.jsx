import React from 'react';

import '../styles/AddProperty.css';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        title: '',
      }
    }
  }

  handleAddProperty = (event) => {
    this.setState({})
    event.preventDefault();
    console.log(this.state.fields);
  }

  render() {
    return (
  <div className="AddProperty" onSubmit={this.handleAddProperty}>
    <form>
      <label>
        Add: 
        <button type="submit" />
      </label>
    </form>
  </div>
    );
  }
}

export default AddProperty;