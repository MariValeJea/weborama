import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from '@blueprintjs/core';
import { map } from 'lodash';

export const Repository = ({ repo }) => {
  if (!repo) return null;
  return (
    <div>
      <Card>
        <p>Repo name: <a href={repo.repoLink} target="_blank">{repo.name}</a></p>
        <p>Description: {repo.description}</p>
        <p>Creation: {repo.created_at}</p>
      </Card>
    </div>
  );
};

export const Repositories = ({ repos }) => {
  if (!repos) return null;
  return map(repos, (repo, key) => <div><Repository key={key} repo={repo} /></div>)
};

Repository.propTypes = {
  repo: PropTypes.object,
};

Repositories.propTypes = {
  repos: PropTypes.object,
};

