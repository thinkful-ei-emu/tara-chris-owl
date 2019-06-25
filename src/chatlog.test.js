import React from 'react';
import ReactDOM from 'react-dom';
import ChatLog from './chatlog.js';
import renderer from 'react-test-renderer';

describe('Participant Component', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ChatLog participants={[{
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    }]} chatEvents={[  {
      participantId: 3,
      type: 'join-stage',
      timestamp: 1548852664247
  }]}/>, div);

        ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
      const tree = renderer
        .create(<ChatLog participants={[{
          id: 1,
          name: 'Koren Templeton',
          avatar:
              'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
          inSession: true,
          onStage: true
      }]} chatEvents={[  {
        participantId: 3,
        type: 'join-stage',
        timestamp: 1548852664247
    }]}/>)
        .toJSON();
      expect(tree).toMatchSnapshot();  
      });
})