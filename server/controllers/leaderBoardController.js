const leaderBoardModel = require("../models/leaderBoardModel");

const getLeaderBoard = async (req, res) => {
  try {
    const { mode } = req.query;

    if (!mode) return res.status(400).json({ message: "Empty req.query" });

    const leaderBoard = await leaderBoardModel.find({ mode });

    res.status(200).json(leaderBoard);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

const createLeaderBoard = async (req, res) => {
  try {
    const { username, mode, score } = req.body;

    if (!username || !mode || !score)
      return res.status(400).json({ message: "All fields are required" });

    await leaderBoardModel.create({ username, mode, score });

    res.status(201).json({ message: "Shared successfully" });
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

module.exports = { getLeaderBoard, createLeaderBoard };
