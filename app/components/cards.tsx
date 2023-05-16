'use client';

import React from 'react';

interface CardProps {
	Task: string;
}

const Cards = ({ Task }: CardProps) => {
	return (
		<div className='py-4 px-5 bg-gradient-to-br from-neutral-800 to-neutral-900 bg-clip-border  rounded-md'>
			<h1>{Task}</h1>
		</div>
	);
};

export default Cards;
