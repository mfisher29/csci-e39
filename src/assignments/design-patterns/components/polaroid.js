import React from 'react'
import Button from './button';

let share_btn_props = {
	button_text: 'Share',
	button_fxn: () => alert('Opens Share Dialogue'),
	button_cls: false
}

let hide_btn_props = {
	button_text: 'Hide Description',
	button_fxn: () => alert('Hides Description'),
	button_cls: false
}

const Polaroid = ({img_description}) => {
    return <figure class="polaroid">
        <img src="https://cdn1.thehunt.com/app/public/system/zine_images/2186040/zine_view_thumb/a8b3cec39d6215521cf04e074a042672.jpg" alt={img_description} />                
        <figcaption>{img_description}</figcaption>
        <Button button_fxn={hide_btn_props.button_fxn} button_text={hide_btn_props.button_text} />
        <Button button_fxn={share_btn_props.button_fxn} button_text={share_btn_props.button_text} />
    </figure>
}

export default Polaroid