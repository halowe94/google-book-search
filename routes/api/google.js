const Router = require("express").Router();
const GoogleCon = require("../../controllers/GoogleCon");

Router.route("/").get(GoogleCon.findAll);

module.exports = Router;
