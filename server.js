// const express = require('express');
// const path = require('path');
// const http = require('http');
// const bodyParser = require('body-parser');
// // lấy routes api
// const api = ('./server/routes/api');
// const app = express();

// //phân tích dữ liệu post
// app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({extended: false}));
// app.use(function(req, res, next){
//     bodyParser.urlencoded({extended: false})
// })


// //chỉ đường dẫn tới dist
// app.use(express.static(path.join(__dirname,'dist')));
// //tạo api routes
// app.use('/api, api');
// //bắt tất cả routes và trả về file index
// app.get('*',(req, res) =>{
//     res.sendfile(path.join(__dirname,'dist/index.html'));
// })

// // lấy dư liệu ở môi trường và lưu trữ ở express
// const port = process.env.PORT || '3000';
// app.set('port',port);

// //tao http server
// const server = htttp.createServer(app);

// server.listen(port, () => console.log(`API running on localhost:${port}`));

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));