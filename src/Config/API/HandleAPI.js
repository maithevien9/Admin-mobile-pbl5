const header = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: '',
};

var IP = 'http://192.168.1.10:8008/';
function APIGet(url, token) {
  if (token) {
    header.Authorization = `Bearer ${token}`;
  }
  url = IP + url;
  return fetch(url, {
    method: 'GET',
    headers: header,
  }).then(response => response.json());
}

function APIPost(url, params) {
  url = IP + url;
  return fetch(url, {
    method: 'POST',
    headers: header,
    body: JSON.stringify(params),
  }).then(response => response.json());
}

function APIPut(url, params) {
  url = IP + url;
  return fetch(url, {
    method: 'PUT',
    headers: header,
    body: JSON.stringify(params),
  }).then(response => response.json());
}

const HandleApi = {
  APIGet,
  APIPost,
  APIPut,
};

export default HandleApi;
