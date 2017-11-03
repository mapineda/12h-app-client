import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
 render() {
   return (
		  <div className='Home'>
  			<div className='lander'>
  				<h1>12Hello</h1>
          <p>Enhancing Connections</p>

          <ButtonGroup >
    					<Button className='btn' bsSize='large' bsStyle='primary' active>Post</Button>
    					<Button className='btn' bsSize='large' bsStyle='success' active>Search</Button>
    					<Button className='btn' bsSize='large' bsStyle='warning' active>Connect</Button>
          </ButtonGroup>

  		  </div>
		  </div>
    );
	}
}
