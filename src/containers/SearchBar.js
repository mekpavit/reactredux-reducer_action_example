import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

class SearchBar extends Component {

  constructor(prop) {
    super(prop);

    this.state = {
      inputText: ''
    };

    this.onInputChange = this.onInputChange.bind(this);

    console.log(this.props.weathers);
  }

  onInputChange(event) {
    const inputText = event.target.value;
    this.setState({
      inputText
    });
  }

  render() {
    console.log(this.state.inputText)
    return (
      <div>
        <Input
          action={{content: 'Add', onClick: (event) => console.log('pass')}}
          placeholder='Type the city you want to know about the weatehr there'
          fluid={true}
          onChange={this.onInputChange}
          value={this.state.inputText}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    weathers: state.weathers
  };
}

export default connect(mapStateToProps)(SearchBar);
