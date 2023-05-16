import Image from 'next/image';
import Columns from './components/columns';
import Cards from './components/cards';

export default function Home() {
	return (
		<main className='flex min-h-screen p-5 gap-2'>
			<Columns Title='To Do'>
				<Cards Task='Javascript Ninja' />
			</Columns>
			<Columns Title='In progress'>
				<Cards Task='Epitome of Grace' />
			</Columns>
			<Columns Title='Done'>
				<Cards Task='Financial Stability' />
			</Columns>
		</main>
	);
}
