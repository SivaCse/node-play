import mongoose from '../db';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TopicSchema = new Schema({
	categoryId: { type: ObjectId, required: true },
	topicName:  { type: String, required: true },
	createdOn: { type: Date, default: Date.now() },
	modifiedOn: { type: Date, default: Date.now() }
},
{ versionKey: false });

export default mongoose.model('Topic', TopicSchema);
