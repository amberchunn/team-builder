import React, { useState } from 'react';
import styled from 'styled-components';

const TeamList = props => {
	const list = props.members;
	console.log(list);
	return <div id="member-list" className="list"></div>;
};

export default TeamList;
