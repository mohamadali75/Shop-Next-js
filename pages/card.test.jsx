import renderer from 'react-test-renderer';
import React from "react"
import Card from './card';

it('Card test', () => {
  const component = renderer.create(
    <Card/>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();})
