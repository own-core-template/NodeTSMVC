module.exports = [
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("PASS YYYY", req.baseUrl);
    next();
  },
];
