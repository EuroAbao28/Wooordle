const {
  getLeaderBoard,
  createLeaderBoard,
} = require("../controllers/leaderBoardController");

const router = require("express").Router();

router.get("/getLeaderBoard", getLeaderBoard);
router.post("/createLeaderBoard", createLeaderBoard);

module.exports = router;
