import { FaHome, FaStore, FaEnvelope } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import DesktopNavbar from '../Navbar/DesktopNavbar';
import useWindowSize from '../../hooks/useWindowSize';
import MobileNavbar from '../Navbar/MobileNavbar';


const navbarOptions = {
	title: 'OpenMarketHub',
	items: {
		home: FaHome,
		maketplace: FaStore,
		contact:FaEnvelope,
		apis:FaGear,
	}
};

const HomePage = () => {
	const windowDimension = useWindowSize();
	return (
		<>
			<div className='flex items-center justify-center px-2'>
				{windowDimension.width > 700 ?
					<DesktopNavbar title={navbarOptions.title} items={navbarOptions.items} />
					: <MobileNavbar title={navbarOptions.title} items={navbarOptions.items}/>}
			</div>
		</>



	);
};

export default HomePage;
