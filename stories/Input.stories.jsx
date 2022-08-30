import React from 'react';

import  Input  from '../pages/Components/Input';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Input',
  component: Input,
};
export function Primary() {
  return <Input type="text" placeHolder="placeHolder" primary/>
}
