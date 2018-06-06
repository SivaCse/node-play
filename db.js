import monk from 'monk';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/Notes');

export default mongoose;
