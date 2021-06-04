"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var roleSchema = new _mongoose.Schema({
  name: String
}, {
  versionKey: false
}); // {name: "admin", _id: "abcsdefghijklmnop"}
// {name: "moderator", _id: "abcsdefghijklmnop"}

var _default = (0, _mongoose.model)("Role", roleSchema);

exports["default"] = _default;