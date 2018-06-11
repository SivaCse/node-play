import mongoose from '../db';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const NoteSchema = new Schema({
	topicId: ObjectId,
	postName: { type: String, required: true },
	postDesc: { type: String, required: true },
	tags: Array,
	createdOn: { type: Date, default: Date.now() },
	modifiedOn: { type: Date, default: Date.now() }
},
{ versionKey: false });

export default mongoose.model('Note', NoteSchema);
