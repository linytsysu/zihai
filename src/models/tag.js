var mongoose = require('mongoose');

TagSchema = new mongoose.Schema ({
  name: String,
  createDate: Date,
  refTimes: Number,
});

TagSchema.pre('save', function(next) {
  var self = this;
    Tag.find({name: self.name}, function(err, objs) {
      if (!objs.length) {
        next();
      } else {
        next(new Error("Tag exists!"));
      }
    });
});

var Tag = mongoose.model('Tag', TagSchema);
module.exports = Tag;
