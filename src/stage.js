import React from 'react';
import StageTile from './stage-tile'

class Stage extends React.Component {
  render() {
    let stagePars = this.props.participants.map((item) => {
      if (item.onStage) {
        return <StageTile name={item.name} avatar={item.avatar} />;
      }
    });

    return (
      <section class="stage">
        {stagePars}
      </section>
    );
  }
}

export default Stage;