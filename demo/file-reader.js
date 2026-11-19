// Small demo helper used to show Snyk PR checks.
// NOTE: intentionally vulnerable (path traversal + command injection) for demo purposes.
var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

var BASE_DIR = path.join(__dirname, 'files');

// Path traversal: user-controlled filename is joined without validation
function readUserFile(filename, cb) {
  var fullPath = path.join(BASE_DIR, filename);
  fs.readFile(fullPath, 'utf8', cb);
}

// Command injection: user input is concatenated into a shell command
function pingHost(host, cb) {
  exec('ping -c 1 ' + host, cb);
}

module.exports = { readUserFile: readUserFile, pingHost: pingHost };
