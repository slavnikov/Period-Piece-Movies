import React from 'react';
import OmniForm from './omni_form';
import { fetchDatabaseBackup } from '../../api/external_requests';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: true,
      backupUrl: null,
    };
  }

  dbBackupButton() {
    if (this.props.currentUser.email === 'dmitry.slavnikov@gmail.com') {
      if (this.state.backupUrl) {
        return (<a href={this.state.backupUrl} download='db_extractiob.rb'>downlaod db backup</a>);
      } else {
        return (
          <button
            onClick={() => {
              fetchDatabaseBackup().then((fileBits) => {
                const file = new File([fileBits], 'db_extraction.rb');
                const url = URL.createObjectURL(file);
                this.setState({backupUrl: url});
              });}
            }>
            generate db backup
          </button>
        );
      }
    }
  }

  variableContent() {
    if (this.props.currentUser) {
      return (
        <div className='glass-container flex-column-center' id='inner-header'>
          <h5 className='pseudo-center'>{this.props.currentUser.email}</h5>
          <div className='flex-row'>
            <form><button onClick={this.props.logout}>logout</button></form>
            {this.dbBackupButton()}
          </div>
        </div>
      );
    } else {
      return (
        <div className='glass-container flex-column-center' id='inner-header'>
          <h5 className='pseudo-center'>
            <button onClick={() => {this.setState({signIn: true});}}>
              SIGN IN
            </button>
            &nbsp;OR&nbsp;
            <button onClick={() => {this.setState({signIn: false});}}>
              REGISTER
            </button>
            &nbsp;TO EDIT OR ADD ENTRIES
          </h5>
          <OmniForm signIn={this.state.signIn} createUser={this.props.createUser} login={this.props.login}/>
        </div>
      );
    }
  }

  render () {
    return (
      <div className='glass-pane' id='header'>
        {this.variableContent()}
      </div>
    );
  }
}

export default Header;
