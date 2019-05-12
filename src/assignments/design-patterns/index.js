import React from 'react'
import PropTypes from 'prop-types'
import Example, {ActiveCodeProvider} from './support/example'
import Footer from './components/footer.js'
import Polaroid from './components/polaroid.js'

import './app.scss'

const img_description = "pink polaroid camera"

const CherryBlossom = () =>
	<ActiveCodeProvider>
		<body className="style-guide">
			<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Muli" />

			<h1>cherryblossom</h1>
			<p>Welcome to the design library for cherry blossom, the style guide used exclusively by Marissa Fisher, a little-known web developer based out of Cambridge, MA.
			Cherry blossom was inspired by the beautiful spring blooms in Boston this time of year. Her goal is to share cherry blossom with the world so that anyone can 
			easily incorporate her thoughfully designed React components into their application.
			</p>

			<Example title="< div >">
				<div className="just-testing">HELLO DIV</div>
			</Example>

			<Example title="My Special <span>">
				<span className="just-testing">HELLO SPAN</span>
			</Example>

			<Example title="Polaroid">
				<Polaroid img_description={img_description} />
			</Example>

			<Example title="<footer>">
				<Footer />
			</Example>
		</body>
	</ActiveCodeProvider>

export default CherryBlossom