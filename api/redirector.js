const http = require('http');
const url = require('url');

// Function to escape the URL (encryption method)
function escapeUrl(inputUrl) {
    return encodeURIComponent(inputUrl);
}

// Function to unescape the URL (decryption method)
function unescapeUrl(inputUrl) {
    return decodeURIComponent(inputUrl);
}

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Example URL to redirect to
    const urlToRedirect = 'https://view.richtonparks.com/KDJEDK';

    // Encrypt (escape) the URL
    const encryptedUrl = escapeUrl(urlToRedirect);

    // Send a 301 permanent redirect to the encrypted URL
    res.writeHead(301, { 'Location': '/' + encryptedUrl });
    res.end();
});

// Start the server on port 8080
server.listen(8080, () => {
    console.log('Server running on port 8080...');
    
    // Example: Encode a URL (escape it)
    const urlToRedirect = 'https://view.richtonparks.com/KDJEDK';
    const encryptedUrl = escapeUrl(urlToRedirect);
    console.log(`Encrypted URL: /${encryptedUrl}`);
});
