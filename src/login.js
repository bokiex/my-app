import React from 'react';
import './bootstrap/css/bootstrap.css';
import './login.css';

class App extends React.Component {

  handleSubmit = event =>{
    event.preventDefault();
  }

  render (){
    return <div id='Container'>
      <div id='Form'>
        <form>
          <div class="form-group">
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="email" bsSize="large">
                <ControlLabel>Email</ControlLabel>
              </FormGroup>
            </form>
          </div>
        </form>
      </div>
    </div>
  }
}
export default App;
