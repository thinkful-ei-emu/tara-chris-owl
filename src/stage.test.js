import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './stage.js';
import renderer from 'react-test-renderer';

describe('Stage Component', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Stage participants={[  {
        id: 5,
        name: 'Ashla Attwool',
        avatar:
            'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    }]}/>, div);

        ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
      const tree = renderer
        .create(<Stage participants={[  {
          id: 5,
          name: 'Ashla Attwool',
          avatar:
              'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
          inSession: true,
          onStage: true
      }]} />)
        .toJSON();
      expect(tree).toMatchSnapshot();  
      });
})