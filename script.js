document.getElementById('runCode').addEventListener('click', function() {
    var requestType = document.getElementById('requestType').value;
    var code = document.getElementById('codeInput').value;
    var resultContainer = document.getElementById('result');

    resultContainer.textContent = "Running...";

    var xhr = new XMLHttpRequest();
    xhr.open(requestType, 'http://149.165.238.105/ocpu/library/stats/R/rnorm', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            var status = xhr.status;
            if (status === 0 || (status >= 200 && status < 400)) {
                // The request has been completed successfully
                resultContainer.textContent = xhr.responseText;
            } else {
                // Oh no! There has been an error with the request!
                resultContainer.textContent = "Error: " + xhr.statusText;
            }
        }
    };
    xhr.send('n=10'); // For GET requests, this line should be changed to append the query string to the URL instead
});
