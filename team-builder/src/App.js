import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TeamForm from './components/TeamForm';
import data from './data';

function App() {
	const [ team, teamMembers ] = useState(data);

	const addNewNote = (form) => {
		teamMembers([ ...team, form ]);
	};
	return (
		<div className='App'>
			<Form addNewNote={addNewNote} />
			<TeamForm teamList={team} />
		</div>
	);
}

export default App;

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
