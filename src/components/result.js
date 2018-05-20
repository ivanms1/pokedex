import React from 'react';

export default function Result({pokemon, entry}){
	return (
			<div className="pokemon-info">
				{pokemon && entry ?
					<React.Fragment>
						<h1 className="pokemon-name">
							{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
						</h1>
						<img src={pokemon.sprites.front_default} alt=""/>
						<p className="entry">{entry.flavor_text_entries[1].flavor_text}</p>
					</React.Fragment>
					:
					''}
			</div>
	)
}