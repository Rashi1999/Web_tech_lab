var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    name:{type:String, require:true},
    department:{type:String, require:true}
});

module.exports=mongoose.model('student',studentSchema);