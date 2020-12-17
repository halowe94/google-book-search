const Router = require("express").Router();
const BookCon = require("../../controllers/BookCon");

Router.route("/").get(BookCon.findAll).post(BookCon.create);

Router.route("/:id")
  .get(BookCon.findById)
  .put(BookCon.update)
  .delete(BookCon.remove);

module.exports = Router;
