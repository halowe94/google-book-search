const path = require("path");
const router = require("express").Router();
const booksRoutes = require("./book");
const googleRoutes = require("./google");

router.use("/books", booksRoutes);

router.use("/google", googleRoutes);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

modeule.exports = router;
