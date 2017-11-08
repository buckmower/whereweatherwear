// // /* global describe, it, afterEach, before, beforeEach,  */
// // /* eslint-disable no-console */
import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import configureStore from 'redux-mock-store';
import WWWApp from "../App";
import mockState from "./mockState";

describe('<WhereWeatherWear App/>', () => {
  let wrapper;
  let component;

  const mockStore = configureStore();
  let store = mockStore(mockState);

  before(() => {
    wrapper = shallow(<Provider store ={store}><WWWApp /></Provider>);
    component = wrapper.instance();
  });

  it('should render the WhereWeatherWear App Provider component', () => {
    var component = wrapper.find(<WWWApp />);
    expect(component).toExist;
  });
  
});
