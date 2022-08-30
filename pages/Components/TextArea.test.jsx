import renderer from 'react-test-renderer';
import React from "react"
import TextArea from './TextArea';

it('textarea test', () => {
  const component = renderer.create(
    <TextArea>test</TextArea>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();})
