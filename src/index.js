import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { get, isEmpty } from 'lodash';
import { Alert } from '@blueprintjs/core';
import { fetchUser, fetchRepos, fetchLastIssue } from './utils';
import { Form } from './form';
import { User } from './user';

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      error: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  onChange(event) {
    this.setState({value: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    fetchUser(this.state.value)
    .then(response => {
      if (!response) {
        this.setState({
          error: 'No user found'
        });
        return response;
      }
      this.setState({
        ...this.state,
        error: '',
        user: {
          name: response.login,
          avatar: response.avatar_url,
          profileCreationDate: response.created_at,
          repos: response.repos_url,
        }
      });
      return response;
    })
    .then(resp => {
      if (resp) {
        return fetchRepos(resp.repos_url)
      }
      const error = new Error(`${resp.status} (${resp.statusText})`);
      throw error;
    })
    .then(response => {
      this.setState({
        ...this.state,
        error: '',
        user: {
          ...this.state.user,
          repositories: response,
        }
      })
      return response;
    })
    .catch(error => {
      console.error(error);
    })
  }

  onClear(event) {
    event.preventDefault();
    this.setState({...this.state, value: ''});
  }

  render() {

    if (!isEmpty(this.state.error)) {
      return (
        <div>
          <Form 
            value={this.state.value}
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            onClear={this.onClear}
          />
        <br/>
        <h1>No user found</h1>
      </div>
    )
  }

    return (
      <div>
        <Form 
          value={this.state.value}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          onClear={this.onClear}
        />
        <br/>
        <User userInfo={this.state.user} />
      </div>
    )
  }
};

