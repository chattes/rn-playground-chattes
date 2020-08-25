/**
 * @format
 */
import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import RecipeList from '../Components/RecipeList';

describe('Testing test Component', () => {
  it('1+1 should be 2', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('<App />', () => {
  it('should render app', () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.findWhere((node) => node.prop('testID') === 'title'),
    ).toExist();
  });

  it('matches snapshot', () => {
    const tree = shallow(<App />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});

describe('<RecipeList />', () => {
  it('should match snapshot', () => {
    const tree = shallow(<RecipeList />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
  it('should return a list of recipes', () => {
    const wrapper = shallow(<RecipeList />);
    expect(
      wrapper.findWhere((node) => node.prop('testID') === 'recipe-list'),
    ).toExist();
  });
});
