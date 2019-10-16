import React, { useState } from 'react';

const Form = (props) => {
	const [ form, setForm ] = useState({
		name  : '',
		email : '',
		role  : '',
	});
	const ChangeHandler = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
		console.log(event.target.value);
	};
	const submitForm = (event) => {
		event.preventDefault();
		props.addNewNote(form);
		setForm({ name: '', email: '', role: '' });
	};
	return (
		<form onSubmit={submitForm}>
			<label htmlFor='name'>Name</label>
			<input name='name' id='name' type='name' placeholder='Name' onChange={ChangeHandler} value={form.name} />
			<label htmlFor='email'>Email</label>
			<input
				name='email'
				id='email'
				type='email'
				placeholder='Type your email here'
				onChange={ChangeHandler}
				value={form.email}
			/>
			<label htmlFor='role'>Role</label>
			<textarea
				name='role'
				id='role'
				placeholder='Backend, Frontend, Designer'
				onChange={ChangeHandler}
				value={form.role}
			/>
			<button type='submit'>Add Team Member</button>
		</form>
	);
};
export default Form;
