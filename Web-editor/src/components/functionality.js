import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled } from 'react-codemirror2'

export default function Functionality(props) {
	const {
		language,
		Title,
		value,
		onchange
	} = props
	const [open, setOpen] = useState(true)

	function changer(editor, data, value) {
		onchange(value)
	}

	return (
		<div className={`editor-container ${open ? '' : 'collapsed'}`}>
			<div className="editor-title">
				{Title}
				<button id="min" onClick={() => setOpen(prevOpen => !prevOpen)}> - </button>
			</div>
			<Controlled
				onBeforeChange = {changer}
				value = {value}
				className="wrap"
				options={{
					lineNumbers: true,
					lineWrapping:true,
					mode: language,
					lint: true
				}}
			/>
		</div>
	)
}