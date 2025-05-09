document.getElementById('request-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const method = document.getElementById('method-select').value;
  const endpoint = document.getElementById('endpoint-input').value.trim();
  
  // Adjust the protocol and domain as necessary.
  const fullUrl = `http://149.165.238.105/ocpu${endpoint}`;
  const responseOutput = document.getElementById('response-output');

  responseOutput.textContent = 'Loading...';

  fetch(fullUrl, { method: method })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(`${response.status} - ${text}`) });
      }
      return response.text(); // or response.json() if the response is in JSON format
    })
    .then(data => {
      // If the response is JSON, use JSON.stringify to format it, otherwise, display it directly
      responseOutput.textContent = data;
    })
    .catch(error => {
      console.error('Error fetching data from OpenCPU: ', error);
      responseOutput.textContent = `Failed to load response: ${error.message}`;
    });
});
