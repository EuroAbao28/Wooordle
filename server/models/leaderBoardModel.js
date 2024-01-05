const mongoose = require("mongoose");

const leaderBoardSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    mode: { type: String, required: true },
    score: { type: Number, required: true },
  },
  {
    timeStamps: true,
  }
);

module.exports = mongoose.model("LeaderBoard", leaderBoardSchema);
