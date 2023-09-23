import { FaHome, FaBars, FaStore, FaEnvelope } from 'react-icons/fa';
import { FaGear, FaXmark } from 'react-icons/fa6';
import useWindowSize from './hooks/useWindowSize';

import Navbar from './components/Navbar';

const navbarOptions = {
	title: 'OpenMarketHub',
	items: {
		home: FaHome,
		maketplace: FaStore,
		contact:FaEnvelope,
		apis:FaGear,
	},
	mobileIcon: {
		open: FaXmark,
		close: FaBars
	}
} as const;

function App() {
	const size = useWindowSize();
	console.log(size);
	return (
		<div className="dark:bg-gray-800 bg-gray-50 text-gray-900 dark:text-gray-50">
			<Navbar title={navbarOptions.title} items={navbarOptions.items} mobileIcons={navbarOptions.mobileIcon}/>
		</div>
	);
}

export default App;
