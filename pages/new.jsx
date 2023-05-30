import Link from 'next/link';

import { useState } from 'react'; 
const New = () => {

   

    const [form, setForm] = useState({
        title: '',
        plot: ''
    }) 

    

    const handleChange = e =>{
        const { value, name } = e.target;
        setForm({
          ...form,
          [name]:value
        });
    };

    const handleSubmit = e =>{
        e.preventDefault();
        postData(form);
    };

    const postData = async (form) =>{
        try {
            console.log(form);
            const res = await fetch('./api/movie', {
                method: 'POST', 
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(form)
            })
            const data = res.json();
            console.log(data);
          
        } catch (error) {
            console.log(error);
            
        }
    }



    return (
        <div className='container'>
            <h1 className='my-3'>Agregar Pelicula</h1>
            <form onSubmit={handleSubmit}>
                <input
                className='form-control my-2' 
                type="text"
                placeholder='Title'
                autoComplete='off'
                name='title'
                value={form.title}
                onChange={handleChange}
                />
                <input
                className='form-control my-2' 
                type="text"
                placeholder='Plot'
                autoComplete='off'
                name='plot'
                value={form.plot}
                onChange={handleChange}
                />
                <button className="btn btn-primary w-100 my-2" type='submit'>Agregar</button>
                <Link href='/'>
                    <p className="btn btn-warning w-100">Volver...</p>
                </Link>
            </form>
        </div>
    )
}

export default New;
