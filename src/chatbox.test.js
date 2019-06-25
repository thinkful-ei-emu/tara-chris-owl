import React from 'react';
import ReactDOM from 'react-dom';
import ChatBox from './chatbox';
import renderer from 'react-test-renderer';

describe('Participant Component', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ChatBox key={'1'} id={'5'} participants={[{
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
      }]} type='thumbs-down' time={1548852544247} />, div);

        ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
      const tree = renderer
        .create(<ChatBox key={'1'} id= {'5'} participants = {[{id: 1,
          name: 'Koren Templeton',
          avatar:
              'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
          inSession: true,
          onStage: true}]} type='thumbs-down' time={1548852544247} />)
        .toJSON();
      expect(tree).toMatchSnapshot();  
      });
})