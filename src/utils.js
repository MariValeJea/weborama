const endpoint = 'https://api.github.com/users/';

export const fetchUser = (userId) => {
const url = `https://api.github.com/users/${userId}`;
console.log(url)
fetch(url, { mode: 'cors' })
  .then(resp => {
    if (resp.ok) {
      return resp.json().catch(err => ({}));
    }
    const error = new Error(`${resp.status} (${resp.statusText})`);
    throw error;
  })
  .then(response => {
    console.log('ok')
  })
  .catch(error => {
    console.error(error);
    dispatch(fetchTopicsError(error));
  })
};

