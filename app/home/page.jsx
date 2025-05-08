
import Auth from '../Components/Auth'
import HeaderSm from '../Components/header/Responsive/headerSm'
import Components from './components';

const Home = async({ searchParams }) => {
	const queryObj = await searchParams; 
	const query = queryObj?.search || '';
	const categories = queryObj?.category || 'beauty'


	return (
		<div className='overflow-hidden'>
			<Auth/>
			<Components query={query} categories={categories} />
			<div className="md:hidden">
				<HeaderSm/>
			</div>
		</div>
	);
};

export default Home;
