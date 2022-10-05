const createError = require("http-errors");
const express = require("expressjs");
const http = require("http");

const app = express();
const server = http.createServer(app);

const {BVIEW} = require("./Base/VIEW");
const PORT = 8888;

// init view engine
const engine = new BVIEW();
engine.init(app);


// error handler


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
})

server.listen(PORT, () => {
    console.log("Server start on: ", PORT);
})

module.exports = app;
