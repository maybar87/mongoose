import Head from 'next/head';
import connectDB from '../lib/dbConnect';
import Movie from '../models/Movie';


export default function Home({movies}) {
  
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='generated by next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main  className='container' >
        <h1>Movies</h1>
        {
          movies.map( ( {_id, title, plot} )=>(
            <div className='card mb-2' key={_id} >
              <div className='card-body'>
                <div className='h5 text-uppercase'>{title}</div>
                <p className='fw-ligth'>{plot}</p>
              </div>
            </div>

          ))
        }
      </main>

     
    </div>
  )
}


export async function getServerSideProps(){
  try {
    await connectDB()
    const res = await Movie.find({});
    const movies = res.map( doc => {
      const movie = doc.toObject();
      movie._id = ` ${movie._id} `;
      return movie
    })
    
    
    return {props: {
      movies,
    }
  }
  } catch (error) {
    console.log(error);
    
  }
}