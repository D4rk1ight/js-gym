# Current state

Goal:
Local Node.js file server for accessing files from iPhone.

Done:

- HTTP server on port 3000
- LAN access works
- index.html served at /
- fs.createReadStream + pipe understood
- fs.readdir tested
- Read ./public/files and get an array of filenames.

Current step:

- Generate HTML links from filenames

Next:

- Route file URLs
- Determine Content-Type from extension
- Add downloading
- Add video
- Later: Range requests
