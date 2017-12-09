const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

var schema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  question: { type: Schema.Types.ObjectId, ref: 'Question' },
  name: {type: String, trim:true},
  age: {type: String, trim:true},
  motive: {type:String, trim:true},
  note: {type: String, trim: true},
  numLikes: {type: Number, default: 0},
  createdAt: {type: Date, default: Date.now}
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
schema.plugin(mongoosePaginate);
var Participation = mongoose.model('Participation', schema);

module.exports = Participation;
