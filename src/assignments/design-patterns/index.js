import React from 'react'
import Example, {ActiveCodeProvider} from './support/example'
import UserCard from './components/usercard.js'
import Polaroid from './components/polaroid.js'
import Button, {SecondaryButton} from './components/button';
import Footer from './components/footer.js'

import './app.scss'


let generic_btn_props = {
	button_text: 'Primary',
	button_fxn: false,
	button_cls: false
}

let subscribe_btn_props = {
	button_text: 'Secondary',
	button_fxn: () => alert('Does something!'),
	button_cls: 'secondary-button'
}

let polaroid_props = {
	img_url: "https://cdn1.thehunt.com/app/public/system/zine_images/2186040/zine_view_thumb/a8b3cec39d6215521cf04e074a042672.jpg",
	img_description: "Here is an image of a pink polaroid camera. It was taken not with a polaroid cameria, but a digital camera.",
	img_title: "Pink Polaroid"
}

let user_props = {
	usr_name: "Sakura" 
}

let card_props = Object.assign({}, user_props, polaroid_props)
console.log(card_props)

let footer_props = {
	element1: "contact us",
	element2: "faq",
	element3: "careers",
	element4: "terms of use"
}

const CherryBlossom = () =>
	<ActiveCodeProvider>
		<body className="style-guide">
			<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Muli" />

			<h1>cherryblossom</h1>
			<p>Welcome to the design library for cherry blossom, the style guide used exclusively by Marissa Fisher, a little-known web developer based out of Cambridge, MA.
			Cherry blossom was inspired by the beautiful spring blooms in Boston this time of year. Her goal is to share cherry blossom with the world so that anyone can 
			easily incorporate her thoughtfully designed React components into their application.
			</p>

			<Example title="User Entry">
				<UserCard {...card_props} />
			</Example>

			<Example title="Buttons">
				<Button {...generic_btn_props} />
				<SecondaryButton {...subscribe_btn_props} />
			</Example>

			<Example title="Polaroid">
				<Polaroid {...polaroid_props} />
			</Example>

			<Example title="Footer">
				<p>The footer for all cherry blossom pages contains 4 elements to maintain a simplistic aesthetic. 
					These elements can be easily changed by entering the desired footer element name as a prop.</p>
				<Footer {...footer_props} />
			</Example>
		</body>
	</ActiveCodeProvider>

export default CherryBlossom