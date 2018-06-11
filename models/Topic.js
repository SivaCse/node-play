import mongoose from '../db';
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TopicSchema = new Schema({
	categoryId: ObjectId,
	topicName:  String,
},
{ versionKey: false });

export default mongoose.model('Topic', TopicSchema);
