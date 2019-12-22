import PropertyCard from '../../components/PropertyCard.jsx';
import { shallow } from 'enzyme';
import React from 'react';

it('renders OK', () => {
  shallow(<PropertyCard />);
});