var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://wrmcyipqrmwgak:n1pMPrOF9pDpndw2sXof-UXYRi@ec2-23-23-81-221.compute-1.amazonaws.com:5432/daesspv05ese4t?ssl=true';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, status VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });
