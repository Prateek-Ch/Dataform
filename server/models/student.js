const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  id: {type: Number , autoIncrement: true, primaryKey: true},
  name: {type: String, required: true},
  year_of_batch: {type: Number,required: true},
  college_id: {type: Number,required: true },
  skills: {type: [String],required: true}
    
});

module.exports = mongoose.model("student",studentSchema);