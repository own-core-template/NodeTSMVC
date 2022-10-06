module.exports = [
  async (req, res, next) => {
    console.log("PASS YYYY", req.baseUrl);
    next();
  },
];
