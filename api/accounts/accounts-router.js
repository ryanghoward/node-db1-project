const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.json("get accounts");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    res.json("get account by id");
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  try {
    res.json("post account");
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    res.json("update account");
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    res.json("delete account");
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
