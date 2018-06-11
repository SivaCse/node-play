import mongoose from '../db';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const NoteSchema = new Schema({
	topicId: ObjectId,
	postName: String,
	postDesc: String,
	tags: Array,
	createdOn: Date,
	modifiedOn: Date
},
{ versionKey: false });

export default mongoose.model('Note', NoteSchema);
