import React from 'react'
import ReactDOM from 'react-dom'
import { mapValues } from 'lodash'

import { DisplayTweetsContainer } from './DisplayTweetsContainer.jsx'

var info = {
}

function loadData() {

}

loadData()

function display() {
	var content = (
		<div>
			<DisplayTweetsContainer />
		</div>
	)

	ReactDOM.render(
	  content,
	  document.getElementById('target')
	)
}
display()
