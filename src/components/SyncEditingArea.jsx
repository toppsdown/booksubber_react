import React from 'react';
import ContentArea from './ContentArea';
import ControlRow from './ControlRow';
import SyncGroup from '../data_components/SyncGroup';
import ContentSyncRow from './ContentSyncRow';

class SyncEditingArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      syncGroups: [
        new SyncGroup(['this is some text'], ['this is some audio']),
        new SyncGroup(['segment2 text'], ['segment2 audio']),
      ],
    };
  }

  generateContentSyncRow(syncGroup) {
    return [
      <ContentSyncRow
        textContentList={syncGroup.textContentList}
        audioContentList={syncGroup.audioContentList}
      />,
      <ControlRow />,
    ];
  }

  generateContentSyncRows() {
    return this.state.syncGroups.map(this.generateContentSyncRow);
  }

  render() {
    return <div>{this.generateContentSyncRows()}</div>;
  }
}

export default SyncEditingArea;
