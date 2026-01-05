// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Hellooo Routes; Get goals" });
};

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Bad request - Please add a text field with value");
  } else {
    res.status(200).json({ message: "Hellooooo, setting goals" });
  }
};
// @desc Update goals
// @route PUT /api/goals
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: "Hellooooo, updating (PUT) goals" });
  console.log(req.body);
};
// @desc Delete goals
// @route DELETE /api/goals
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: "Hellooooo, deleting goals" });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
