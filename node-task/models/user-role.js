const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  userid: { type: String, required: true },
  userrole: { type: String, required: true },
});

module.exports = mongoose.model('User_role', postSchema);
