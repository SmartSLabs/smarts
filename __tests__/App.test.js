import "react-native";
import React from "react";
import App from "../src/App";

import renderer from "react-test-renderer";

describe('App', () => {
  it('renders App correctly', () => {
    const tree = renderer.create(
      <App />
    ).toJSON();
  
    expect(tree.children[0].children[0]).toBe('Hello');
    expect(tree).toMatchSnapshot();
  });
});