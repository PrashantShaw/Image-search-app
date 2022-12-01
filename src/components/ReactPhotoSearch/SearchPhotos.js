import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { createApi } from 'unsplash-js'
import Photo from './Photo'

function SearchPhotos({ setBookmarked }) {


    const [imagesData, setimagesData] = useState(null)
    const inputRef = useRef(null)

    console.log(imagesData)

    const api = createApi({
        accessKey: 'wqyh1BupILgzZ2FNCrMQ6tSjArJeQNkvzK9o7p4eOTo'
    })

    function getImages() {
        const text = inputRef.current.value
        console.log(text)
        api.search
            .getPhotos({
                query: text,
                orientation: 'squarish',
                perPage: 24
            })
            .then(result => setimagesData(result.response.results))
            .catch(() => console.log("Some error occured !!"))
    }

    return (
        <div className='main'>
            <div className='container'>
                <div className='header'>
                    <h1>React Photo Search</h1>
                    <button className='bookmark-btn'>
                        <Link to='/bookmarks'>Bookmarks</Link>
                    </button>
                </div>
                <div className='search'>
                    <input
                        ref={inputRef}
                        type='text'
                        placeholder='Search free high resolution images' />
                    <button
                        className='search-btn'
                        onClick={getImages}
                    >Search</button>
                </div>
                <div className='img-container'>
                    {!imagesData ?
                        null
                        :
                        imagesData.map((image, idx) => {
                            return <Photo 
                            key={idx}
                            image={image}
                            setBookmarked={setBookmarked}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchPhotos