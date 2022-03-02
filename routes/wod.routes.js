const router = require("express").Router();

router.get("/wods", (req, res) => {
  res.send("wods");
});

module.exports = router;
