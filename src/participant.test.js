import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './participant.js';
import renderer from 'react-test-renderer';

describe('Participant Component', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Participant key={'1'} name={'TommyThompson'} avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'} inSessionString="in-session" onStage={false}/>, div);

        ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
      const tree = renderer
        .create(<Participant key={'1'} name={'TommyThompson'} avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'} inSessionString="in-session" onStage={false} />)
        .toJSON();
      expect(tree).toMatchSnapshot();  
      });
})

//key={'1'} name={'TommyThompson'} avatar={'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'} inSessionString="in-session" onStage={false}