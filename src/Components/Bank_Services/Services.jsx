import React from 'react';

const Services = ({ Source, Service, Text }) => {
return (
    <div>
        <figure>
            <img src={Source} alt="" />
            <figcaption class='flex flex-col gap-3 mt-5' >
                <h3 class='font-bold text-xl'>{Service}</h3>
                <p>{Text}</p>
            </figcaption>
        </figure>
    </div>
)
}

export default Services