import renderer from 'react-test-renderer';
import React from "react"
import {cleanup, fireEvent, render} from '@testing-library/react';
import Button from './Button';

it('Button test', () => {
  const component = renderer.create(
    <Button>test</Button>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();})
 
 
  afterEach(cleanup);

  it('Dom onClick Test', () => {
    let value=1
    const {getByText} = render(
      <Button onClick={()=>{value+=1}}>plus</Button>,
    );

  
    fireEvent.click(getByText(/plus/));
  
    expect(value).toBe(2)
  });
  


