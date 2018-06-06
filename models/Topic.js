import mongoose from '../db';
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
	name:  String,
},
{ versionKey: false });

export default mongoose.model('Topic', TopicSchema);
