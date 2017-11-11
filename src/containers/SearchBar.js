import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeWeather } from './../actions'

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    const inputText = event.target.value;
    this.setState({
      inputText
    });
  }

  onSubmit(event) {
    this.props.changeWeather(this.state.inputText);

  }

  render() {
    console.log(this.state.inputText)
    return (
      <div>
        <Input
          action={{content: 'Add', onClick: this.onSubmit}}
          placeholder='Type the city you want to know about the weatehr there'
          fluid={true}
          onChange={this.onInputChange}
          value={this.state.inputText}
          ref='weather'
        />
        { this.props.weathers }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weathers: state.weathers
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeWeather }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
