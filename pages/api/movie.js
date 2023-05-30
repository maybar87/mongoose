import connectDB from '../../lib/dbConnect';
import Movie from '../../models/Movie';



export default  async function handler(req, res) {
  await connectDB();

  const { method } = req;
  switch (method) {
    case 'POST':
      try {
          const movie = new Movie(req.body)
          await Movie.save()
          return res.status(200).json({success: true,  movie})
        
      } catch (error) {
          return res.status(400).json({ success: false, error:'no se envio'})
      }
      
      
    default:
      return res.status(500).json({ success: false,
        error: 'Falla del servidor'});
    }

}
