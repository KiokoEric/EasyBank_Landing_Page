import React from 'react'

const Articles = ({ Source, Width, Author, Title, Text }) => {
return (
    <div>
        <figure>
            <img src={Source} alt="" />
            <figcaption class='flex flex-col gap-3 mt-5'>
                <p>{Author}</p>
                <h3 class='font-bold text-xl'>{Title}</h3>
                <p>{Text}</p>
            </figcaption>
        </figure>
    </div>
)
}

export default Articles