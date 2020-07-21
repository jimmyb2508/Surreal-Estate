import React from 'react';
import axios from 'axios';
import SavedPropertyCard from './SavedPropertyCard';

import '../styles/SavedProperties.css';

class SavedProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storedProperties: [],
    }
  }

  componentDidMount() {
    // console.log(this.props.userFavourites)
    axios.get(`http://localhost:3000/api/v1/Favourite?populate=propertyListing`)
    // .then(response => console.log(response))
    .then(response => this.setState({ storedProperties: response.data}))
    .catch(error => console.log(error))
  }

  handleDelete = _id => {
    const { storedProperties } = this.state;

    axios.delete(`http://localhost:3000/api/v1/Favourite/${_id}`)
    .then(this.setState({
      storedProperties: storedProperties.filter(property => property._id !== _id),
    }),
    )
    .catch(error => console.log(error))
  }

  render() {
    const { storedProperties } = this.state;
    console.log(storedProperties)
    return (
      <div className="saved-properties">
      {storedProperties.map(property => console.log(property))}
      {storedProperties.map(property => (
        <SavedPropertyCard key={property._id} {...property} deleteProperty={this.handleDelete}/>
      ))}
      </div>
    );
  }
}

export default SavedProperties;