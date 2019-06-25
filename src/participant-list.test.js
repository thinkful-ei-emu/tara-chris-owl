import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantList from './participant-list.js';
import renderer from 'react-test-renderer';

describe('Participant Component', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ParticipantList participants={[{
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    }]} />, div);

        ReactDOM.unmountComponentAtNode(div);
  })

  it('renders the UI as expected', () => {
      const tree = renderer
        .create(<ParticipantList participants={[{
            id: 1,
            name: 'Koren Templeton',
            avatar:
                'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: true
        }]} />)
        .toJSON();
      expect(tree).toMatchSnapshot();  
      });
})