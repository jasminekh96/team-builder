import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';

function App() {
	const [ team, teamMembers ] = useState({});

	const addNewNote = (form) => {
		teamMembers([ ...team, form ]);
	};
	return (
		<div className='App'>
			<Form addNewNote={addNewNote} />
		</div>
	);
}

export default App;
