const parseFile = async (req, res, next) => {
  if (!req.is("application/json")) {
    return res
      .status(400)
      .json({ message: "Invalid content type. Expected application/json." });
  }

  const { image, fileType } = req.body;

  if (!image) {
    return res.status(400).json({ message: "No image data provided." });
  }

  // If the base64 image is present in the request body, store it in req.body
  req.file = { image };
  req.fileType = fileType; // Store file type if needed
  next();
};

module.exports = { parseFile };
