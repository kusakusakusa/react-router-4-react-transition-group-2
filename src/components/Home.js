import React from 'react'
import { Link } from 'react-router-dom'

import FadeWrapper from '_components/FadeWrapper'

const Home = () => (
	<div>
		<h1>This is HOME page</h1>
		<br/>
		{renderLinks()}
	</div>
);

const renderLinks = () => {
	return [
		"Luffy",
		"Zoro",
		"Nami",
		"Usopp",
		"Sanji",
		"Chopper",
		"Nico Robin",
		"Franky",
		"Brooke",
	].map(character => {
		return (
			<Link key={character}
			      to={`/${character.toLowerCase()}`}>
				Visit {character} now! <br/>
			</Link>
		)
	})
};

export default FadeWrapper(Home)