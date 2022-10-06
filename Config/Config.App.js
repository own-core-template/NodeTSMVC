module.exports.CONFIGS = {
  NODE_ENV: "development",
  SERVER: {
    PORT: 8888,
  },
  DB: {
    MONGODB: {
      NAME: "AAAA",
      LOCAL: "mongodb://localhost:27017/",
      CLOUD:
        "mongodb+srv://<username>:<password>@<host>/<DBname>?retryWrites=true&w=majority",
    },
    MYSQL: {
      NAME: "BBBB",
      HOST: "localhost",
      USERNAME: "tptindev",
      PASSWORD: "123456789",
    },
  },
};
