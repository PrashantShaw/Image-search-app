import React, { useState } from 'react'

function Photo({ image, setBookmarked }) {

    const [bookmarkIt, setBookmarkIt] = useState(false)
    // const [ask, setAsk] = useState(false)

    return (
        <>
            <img alt="searched"
                style={
                    bookmarkIt ? { backgroundColor: 'green' } : {}}
                src={image.urls.small_s3}
                onClick={() => {
                    setBookmarked(prev => {
                        setBookmarkIt(true)
                        return [
                            ...prev,
                            image.urls.small_s3
                        ]
                    })
                }}
            />
        </>
    )
}

export default Photo