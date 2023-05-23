import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'ingrese un titulo']
    },
    plot: {
        type: String,
        require: [true, 'ingrese un plot']
    }
})

export default mongoose.models.Movie || mongoose.model("Movie", MovieSchema);