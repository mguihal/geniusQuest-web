import React, { Component, PropTypes } from 'react';
import {UISref} from 'ui-router-react';
import AchievementList from './AchievementList/AchievementList';
import './ChallengeView.css';

class ChallengeView extends Component {

  render() {
      const {challenge} = this.props.resolves;
      return (
    <div className="ChallengeView row">
      <div className="col-xs-12 col-md-8 col-md-offset-2">
        <div className="header" style={{backgroundImage: `url('${challenge.photo}')`}}>
            <div className="title">{challenge.title_en} | {challenge.points}pts</div>
        </div>
        <div className="description">{challenge.description_en}</div>
        <AchievementList achievements={challenge.achievements}/>
      </div>
    </div>
    );
  }
}

ChallengeView.propTypes = {
  resolves: PropTypes.shape({
    challenge: PropTypes.object
  })
};

export default ChallengeView;
