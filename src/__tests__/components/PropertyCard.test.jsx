import { shallow } from 'enzyme';
import React from 'react';
import PropertyCard from '../../components/PropertyCard';

it('renders', () => {
  shallow(<PropertyCard />);
});

it('renders a title', () => {
  const wrapper = shallow(<PropertyCard 
    title="JamesHouse"
    type="Terraced"
    bedrooms="2"
    bathrooms="2"
    price="185000"
    city="Manchester"
    email="james.barrington1985@gmail.com"
    />,
  )
  const text = wrapper.find('.title').text();
  expect(text).toEqual('JamesHouse');
});

it('renders a type', () => {
  const wrapper = shallow(<PropertyCard 
  title="JamesHouse"
  type="Terraced"
  bedrooms="2"
  bathrooms="2"
  price="185000"
  city="Manchester"
  email="james.barrington1985@gmail.com"
    />,
  )
  const text = wrapper.find('.type').text();
  expect(text).toEqual('Terraced');
});

it('renders a bedroom', () => {
  const wrapper = shallow(<PropertyCard 
  title="JamesHouse"
  type="Terraced"
  bedrooms="2"
  bathrooms="2"
  price="185000"
  city="Manchester"
  email="james.barrington1985@gmail.com"
    />,
  )
  const text = wrapper.find('.bedrooms').text();
  expect(text).toEqual('2');
});

it('renders a bathroom', () => {
  const wrapper = shallow(<PropertyCard 
    title="JamesHouse"
    type="Terraced"
    bedrooms="2"
    bathrooms="2"
    price="185000"
    city="Manchester"
    email="james.barrington1985@gmail.com"
    />,
  )
  const text = wrapper.find('.bathrooms').text();
  expect(text).toEqual('2');
});

it('renders a price', () => {
  const wrapper = shallow(<PropertyCard
    title="JamesHouse"
    type="Terraced"
    bedrooms="2"
    bathrooms="2"
    price="185000"
    city="Manchester"
    email="james.barrington1985@gmail.com"
   />,
  )
  const text = wrapper.find('.price').text();
  expect(text).toEqual('185000');
})

it('renders a city', () => {
  const wrapper = shallow(<PropertyCard
    title="JamesHouse"
    type="Terraced"
    bedroooms="2"
    bathrooms="2"
    price="185000"
    city="Manchester"
    email="james.barrington1985@gmail.com"
    />,
   )
   const text = wrapper.find('.city').text();
   expect(text).toEqual('Manchester')
});

it('renders an email', () => {
  const wrapper = shallow(<PropertyCard 
    title="JamesHouse"
    type="Terraced"
    bedrooms="2"
    bathrooms="2"
    price="185000"
    city="Manchester"
    email="james.barrington1985@gmail.com"
    />,
  )
  const text = wrapper.find('.email').text();
  expect(text).toEqual('james.barrington1985@gmail.com')
});