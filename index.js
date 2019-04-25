const envReader = require('dotenv');

envReader.config(); // Reads .env and merges it into process.env

const server = require('./api/server.js');

const port = process.env.PORT || 4000; // Heroku defines port in environment

server.listen(port, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
