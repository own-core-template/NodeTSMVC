exports.sendSuccess = (res, data, msg) => {
  let body = {
    message: msg || "Success",
    ok: 1,
  };
  if (data) body.data = data;
  res.status(200).json(body);
};

exports.sendError = (res, msg) => {
  res.status(500).json({
    message: msg || "Internal server error",
    ok: 0,
  });
};
