import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from '@blueprintjs/core';
import { Repositories } from './repositories';

export const User = ({ userInfo }) => {
  if (!userInfo) return null;
  return (
    <div>
      <Card>
        <img src={userInfo.avatar} height="42" width="42"/>
        <h5><a href="#">Profile name: {userInfo.name}</a></h5>
        <p>Created at {userInfo.profileCreationDate}</p>
        <Repositories repos={userInfo.repositories} />
      </Card>
    </div>
  )
};

User.propTypes = {
  userInfo: PropTypes.object,
};

