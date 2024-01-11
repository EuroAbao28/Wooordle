const leaderBoardModel = require("../models/leaderBoardModel");

const getLeaderBoard = async (req, res) => {
  try {
    const { mode, listLimit, currentPage } = req.query;

    if (!mode)
      return res.status(400).json({
        message: "mode, listLimit, currentPage req.query is required.",
      });

    const leaderBoard = await leaderBoardModel
      .find({ mode })
      .sort({ score: -1 }) // descending sort
      .skip((currentPage - 1) * listLimit)
      .limit(listLimit);

    // Calculate rank for each entry
    // .map ay gumagawa ka ng bagong array, nasa sayo na yan pano yung logic kada iterate
    // sa logic na ito, kada iterate ay nilalagay mo yung orig copy ng kada object, which is yung entry by using spread operation.
    // tapos dinadagdagan mo nalang ng logic for computing the rank
    const rankedLeaderBoard = leaderBoard.map((entry, index) => ({
      // 0 x 10 + 0 + 1 = rank 1
      // bale current page at index lang nagdidictate dito kung ano rank
      // isipin mo nalang ulit, alam kong malilimutan mo to e
      ...entry.toObject(),
      rank: (currentPage - 1) * listLimit + index + 1,
    }));

    const totalEntry = await leaderBoardModel.countDocuments({ mode });
    const totalPages = Math.ceil(totalEntry / listLimit);

    res.status(200).json({ leaderBoard: rankedLeaderBoard, totalPages });
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
