var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var config = require('./../lib/config');
var labels = config.modelLabels;
var dataset = config.datasetIDs;

var workorderSchema = new Schema({
  id: {type: String },
  workflowId: {type: Date },
  assignee: {type: Date },
  type: {type: String },
  title: {type: String },
  status: {type: String },
  startTimestamp: {type: String },
  address: {type: String },
  location: [Number],
  summary: {type: String }
},{ timestamps: true, strict: false, versionKey: false  });

workorderSchema.index({
  id: 1
});

module.exports = function(db) {
  var model = db.model(labels.WORKORDERS, workorderSchema, dataset.WORKORDERS);
  return model;
};