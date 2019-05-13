import React from 'react'
import Example, {ActiveCodeProvider} from './support/example'
import Polaroid from './components/polaroid.js'
import Button, {SecondaryButton} from './components/button';
import Footer from './components/footer.js'

import './app.scss'

const img_description = "pink polaroid camera"

let generic_btn_props = {
	button_text: 'Button',
	button_fxn: false,
	button_cls: false
}

let subscribe_btn_props = {
	button_text: 'Subscribe',
	button_fxn: () => alert('Subscribed!'),
	button_cls: 'subscribe-button'
}

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

			<Example title="Buttons">
				<Button {...generic_btn_props}/>
				<SecondaryButton {...subscribe_btn_props}/>
			</Example>

			<Example title="Polaroid">
				<Polaroid img_description={img_description} />
			</Example>

			<Example title="Footer">
				<p>The footer for all cherry blossom pages will always contain 4 elements to maintain a simplistic aesthetic. 
					These elements can be easily changed by entering the desired footer element name as a prop.</p>
				<Footer {...footer_props}/>
			</Example>
		</body>
	</ActiveCodeProvider>

export default CherryBlossom