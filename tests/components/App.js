import React from 'react';
import expect from 'expect.js';
import { shallow } from 'enzyme';

import App from '../../app/components/App';

describe('<App />', () => {
  it('should render the application', () => {
    const child = <h1>Rendered from ./app/components/App.js!</h1>;
    expect(shallow(<App />).contains(child)).to.be(true);
  });
});
