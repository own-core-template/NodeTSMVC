const { CONFIGS } = require("../../Config/Config.App");

const assert = require("assert");
const mongoose = require("mongoose");

const uri = CONFIGS.DB.MONGODB.LOCAL + CONFIGS.DB.MONGODB.NAME;
mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    assert.equal(null, err);
    console.log("MongoDB connected!!!");
  }
);
