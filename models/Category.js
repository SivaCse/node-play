import mongoose from '../db';
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	categoryName:  String,
},
{ versionKey: false });

export default mongoose.model('Category', CategorySchema);
