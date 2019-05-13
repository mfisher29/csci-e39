import React from 'react'
import {SecondaryButton} from './button';
import Polaroid from './polaroid';

let follow_btn_props = {
	button_text: 'Follow',
	button_fxn: () => alert('You are now following this user.'),
	button_cls: 'follow-btn'
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

const UserCard = (props) => {
    console.log(props)
    return <figure class="polaroid user-card">
        <Polaroid {...props} />
        <article class="image-details">
            <h3>{props.img_title}</h3>
            <h4>Posted by {props.usr_name} on {today}</h4>
            <p>{props.img_description}</p>
            <SecondaryButton button_fxn={follow_btn_props.button_fxn} button_text={follow_btn_props.button_text} />
        </article>     
    </figure>
}

export default UserCard