import renderer from 'react-test-renderer';
import React from "react"
import Input from './Input';

it('Input test', () => {
  const component = renderer.create(
    <Input>Test</Input>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();})
