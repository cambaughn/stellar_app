
// 192.168.1.143
let onDevice = true;
let ipAddress = '192.168.1.143';
const baseUrl = onDevice ? `http://${ipAddress}:1337` : 'http://localhost:1337';

console.log('REQUESTING => ', baseUrl)

function get(path, callback) {
  fetch(`${baseUrl}${path}`)
    .then(result => {
      setTimeout(() => null, 0);  // workaround for issue-6679
      return result.json();
    })
    .then(result => {
      callback(result);
    })
    .catch(error => {
      console.log(`ERROR => ${error}`);
    })
}


function post(path, body, callback) {
  let headers = new Headers({
    'Content-Type': 'application/json',
  });

  let init = { method: 'POST',
                mode: 'cors',
                headers: headers,
                body: JSON.stringify(body)
              };

  fetch(`${baseUrl}${path}`, init)
    .then(result => {
      setTimeout(() => null, 0);  // workaround for issue-6679
      return result.json();
    })
    .then(result => {
      callback(result);
    })
    .catch(error => {
      console.log(`ERROR => ${error}`);
    })
}

function postMedia(path, body, callback) {
  let headers = new Headers({
    'Content-Type': 'multipart/form-data',
  });

  let formData  = new FormData();

  for(let name in data) {
    formData.append(name, data[name]);
  }

  let init = { method: 'POST',
                mode: 'cors',
                headers: headers,
                body: formData
              };

  fetch(`${baseUrl}${path}`, init)
    .then(result => {
      setTimeout(() => null, 0);  // workaround for issue-6679
      return result.json();
    })
    .then(result => {
      callback(result);
    })
    .catch(error => {
      console.log(`ERROR => ${error}`);
    })
}

export { get, post, postMedia };
