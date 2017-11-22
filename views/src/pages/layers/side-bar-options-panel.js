import React, {Component} from 'react';

const styles = {
    optionsPanel: {
      width: '284px',
      margin: '24px',
      padding: '12px 24px',
    },
    topRight: {
      right: '0',
      position: 'absolute',
      top: '0',
    },
    optionsText: {
      fontFamily: 'ff-clan-web-pro,Helvetica Neue,Helvetica,sans-serif!important',
      fontSize: '12px',
      lineHeight: '1.833'
    }
}


export default class OptionsPanel extends Component{
  render() {
    return( 
      <div className="list-group-item " style={{...styles.optionsPanel,...styles.topRight}} tabIndex="0">
       <div style={styles.optionsText}>
          <h3>Subway Entrances Transportation Map</h3>
        </div>
          <p> Map of NYC Subway Entrances </p>
      </div>
    );
  }
}
