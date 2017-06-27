
let onDevice = false;
const baseUrl = onDevice ? 'http://cambook.local:1337' : 'http://localhost:1337';

console.log('REQUESTING => ', baseUrl)

function get(path, callback) {
  fetch(`${baseUrl}${path}`)
    .then(result => {
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
      return result.json();
    })
    .then(result => {
      callback(result);
    })
    .catch(error => {
      console.log(`ERROR => ${error}`);
    })
}


export { get, post };
