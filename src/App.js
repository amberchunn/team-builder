import React, { useState } from 'react';
import Form from './components/Form';
import TeamList from './components/TeamList';

import './App.css';

const App = props => {
	const [members, setMembers] = useState({});

	return (
		<div className="App">
			<header className="App-header"></header>
			<div className="form">
				<Form />
			</div>
			<div className="list">
				<TeamList members={members} />
			</div>
		</div>
	);
};

export default App;
