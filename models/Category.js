import mongoose from '../db';
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	categoryName:  { type: String, required: true },
	createdOn: { type: Date, default: Date.now() },
	modifiedOn: { type: Date, default: Date.now() }
},
{ versionKey: false });

export default mongoose.model('Category', CategorySchema);
