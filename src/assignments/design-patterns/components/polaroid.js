import React from 'react'

const Polaroid = ({img_description}) => {
    return <figure class="polaroid">
        <img src="https://cdn1.thehunt.com/app/public/system/zine_images/2186040/zine_view_thumb/a8b3cec39d6215521cf04e074a042672.jpg" alt={img_description} />                
        <figcaption class="polaroid-caption">{img_description.split('.').slice(0, -1).join('.')}</figcaption>
        <button class="edit-button" onClick={() => alert('button clicked!')}>OK</button>
    </figure>
}

export default Polaroid