'use client';

import React from 'react';

interface ColumnProps {
	Title: string;
}

const Columns = ({ Title, children }: React.PropsWithChildren<ColumnProps>) => {
	return (
		<div className='border-[1px] bg-neutral-950 border-neutral-700 rounded-md h-fit '>
			<div className=' flex items-center relative px-6 py-4'>
				<div className='absolute bottom-0 right-0 w-[100%] h-[1px] bg-gradient-radial from-neutral-700 to-transparent' />
				<h1 className='text-center font-extrabold bg-gradient-to-tr text-transparent text-lg  from-cyan-500 to-green-300 bg-clip-text'>
					{Title}
				</h1>
			</div>
			<div className='p-4'>{children}</div>
		</div>
	);
};

export default Columns;
