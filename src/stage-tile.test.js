import React from 'react';
import ReactDOM from 'react-dom';
import StageTile from './stage-tile.js';
import renderer from 'react-test-renderer';

describe('StageTile Component', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<StageTile name={'Tommy Thompson'} avatar={'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1'} />, div);

        ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
      const tree = renderer
        .create(<StageTile name={'Tommy Thompson'} avatar={'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1'} />)
        .toJSON();
      expect(tree).toMatchSnapshot();  
      });
})