import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'ingrese un titulo']
    },
    plot: {
        type: String,
        required: [true, 'ingrese un plot']
    }
})

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);