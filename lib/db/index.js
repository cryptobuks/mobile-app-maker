var config = require("config"),
  sprintf = require("sprintf"),
  debug = require("debug")("cms:db"),
  store = require("nedb"),
  db2 = require("../db2");

module.exports = getdb();

//file based
function getdb() {
  var db = {};

  users = new store({
    filename: "./filestorage/db/users.json",
    autoload: true
  });

  editables = new store({
    filename: "./filestorage/db/editables.json",
    autoload: true
  });
  datacollections = new store({
    filename: "./filestorage/db/datacollections.json",
    autoload: true
  });
  db.users = require("./users")(users);
  db.editables = require("./editables")(editables);
  db.datacollections = require("./datacollections")(datacollections);
  return db;
}