import React from 'react';

const TeamForm = (props) => {
	console.log('This is from TeamForm', props);
	return (
		<div className='team-list'>
			{props.teamList.map((form, index) => {
				return (
					<div className='form' key={index}>
						<h2>{form.name}</h2>
						<p>{form.email}</p>
						<p>{form.role}</p>
					</div>
				);
			})}
		</div>
	);
};
export default TeamForm;
