import { reduce, isUndefined } from 'lodash';

const endpoint = 'https://api.github.com/users/';

export const fetchUser = (userId) => {
const url = `https://api.github.com/users/${userId}`;
console.log(url)
return fetch(url, { mode: 'cors' })
  .then(resp => {
    if (resp.ok) {
      return resp.json().catch(err => ({}));
    }
    const error = new Error(`${resp.status} (${resp.statusText})`);
    throw error;
  })
  .catch(error => {
    console.error(error);
  })
};

export const fetchRepos = (url) => {
console.log(url)
return fetch(url, { mode: 'cors' })
  .then(resp => {
    if (resp.ok) {
      return resp.json().catch(err => ({}));
    }
    const error = new Error(`${resp.status} (${resp.statusText})`);
    throw error;
  })
  .then(resp => {
    if (!isUndefined(resp)) {
      return reduce(resp, (memo, val, key) => {
        return {
          ...memo,
          [val.name]: {
            description: val.description,
            name: val.name,
            repoLink: val.html_url,
            created_at: val.created_at,
            issues: val.open_issues,
            issuesUrl: val.issues_url,
          }
        }
      }, {})
    }
    return {};
  })
  .catch(error => {
    console.error(error);
  })
};

export const fetchLastIssue = (isues_url, number) => {
const url = `${isues_url}/${userId}`;
fetch(url, { mode: 'cors' })
  .then(resp => {
    if (resp.ok) {
      return resp.json().catch(err => ({}));
    }
    const error = new Error(`${resp.status} (${resp.statusText})`);
    throw error;
  })
  .catch(error => {
    console.error(error);
  })
};


