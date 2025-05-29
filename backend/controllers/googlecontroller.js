// const { OAuth2Client } = require("google-auth-library");
// const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
// const client = new OAuth2Client(CLIENT_ID);
const axios = require("axios");

const googleController = async (req, res) => {
  const { token } = req.body;
  console.log("Received Token:", token);
  //check if token is provided in the request
  if (!token) {
    return res.status(400).json({ message: "Token is required." });
  }
  try {
    // Use Google's token info endpoint to verify the access token
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${token}`
    );
    console.log(response.data);
    const profileResponse = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`
    );
    console.log(profileResponse);
    const { email, name, picture } = profileResponse.data;
    res
      .status(200)
      .json({ message: "Login successful", user: { email, name, picture } });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ message: "Invalid token" });
  }
};
module.exports = googleController;
