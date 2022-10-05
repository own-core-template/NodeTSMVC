module.exports.catchAsync = (fn) => async (ctx, next) => {
  await fn(ctx, next).catch(next);
};
