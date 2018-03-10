import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { InputGroup, Button, Classes, Intent } from '@blueprintjs/core';
import cx from 'classnames';
import { fetchUser } from './utils';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  onSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    fetchUser(this.state.value);
  }

  render() {
    return (
      <div>
        <form
          className="keyword-search-input"
          onSubmit={this.onSubmit} 
        >
        <InputGroup
          value={this.state.value}
          onChange={this.onChange}
          className={cx(Classes.LARGE)}
          leftIconName="search"
          placeholder="Who are you looking for?..."
          rightElement={
            <Button
              intent={Intent.PRIMARY}
              iconName="arrow-right"
              onClick={this.onSubmit}
            />
          }
        />
        </form>
      </div>
    )
  }
};
