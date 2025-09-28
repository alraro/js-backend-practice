const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
	res.send("User list");
});

router.get("/:id", (req, res) => {
	const userId = req.params.id;
	res.send(`User details for user ${userId}`);
});

module.exports = router;