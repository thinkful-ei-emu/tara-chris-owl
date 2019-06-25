import React from 'react';

class StageTile extends React.Component {
//props will be name and avatar
  render() {
    return (
      <div className="stage-tile">
        <h3>{this.props.name}</h3>
        <button></button><button></button>
        <img src={this.props.avatar} alt={`${this.props.name}'s avatar`} />
      </div>
    );
  }
}

export default StageTile;