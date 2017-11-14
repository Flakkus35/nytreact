const path = require("path");
const router = require("express").Router();
const artController = require("../controllers/artController");

router.route("/")
	.get(artController.test);

router.route("/api/search")
	.get(artController.search);

/*router.route("/api/store")
	.get(artController.store);*/

module.exports = router;