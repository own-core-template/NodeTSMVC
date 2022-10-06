module.exports = [
  {
    path: ["/main", "/"],
    middleware: [
      (req, res, next) => {
          // console.log(req.baseUrl);
          next();
      }
    ],
    routes: [
      require("../Routes/Routes.XXXX"),
      require("../Routes/Routes.YYYY")
    ],
  },
];
