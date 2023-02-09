const registerUser =  (req, res) => {
  if (!req.body.email) {
    res.status(400);
    throw new Error("Please add an email address");
  }
  res.send("Register user");
};
const loginUser = async (req, res) => {
  res.send("login user");
};
const logout = async (req, res) => {
  res.send("Register user");
};
module.exports = {
  registerUser,
  loginUser,
  logout,
};
