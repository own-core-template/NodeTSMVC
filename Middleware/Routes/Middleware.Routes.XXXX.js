module.exports = [
  async (req, res, next) => {
    console.log("PASS XXXX", req.baseUrl);
    next();
  },
];
