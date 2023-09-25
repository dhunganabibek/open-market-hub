import { Menu } from '@headlessui/react';
import { useState } from 'react';
import { FaBars, FaMoon} from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { NavbarProps } from './DesktopNavbar';
import classNames from 'classnames';
import useDarkMode from '../../hooks/useDarkMode';
import { FiSun } from 'react-icons/fi';
const MobileNavbar = ({title, items}: NavbarProps) => {
	const [isOpen, setIsOpen] = useState(true);
	const {isDarkMode, toggleDarkMode} = useDarkMode();
	return (
		<div className={classNames('flex items-center px-4 w-full', {'justify-between': isOpen}, {'justify-center': isOpen} )}>
			{isOpen && <p>{title}</p>}
			<Menu as="div" className='flex items-end -900 p-4 flex-col w-full'>
				<Menu.Button className='self-end' onClick={() => setIsOpen(!isOpen)}>
					<div className='flex items-center gap-2'>
						<h1 onClick={() => toggleDarkMode()}><div className={classNames('border-2 border-red-900 p-3 rounded-full', {
							'border-gray-100': isDarkMode,
							'border-gray-900': !isDarkMode
						})}>{isDarkMode ? <FiSun/> : <FaMoon/> }</div></h1>
						{isOpen ? <FaBars/> : <FaXmark/>}
					</div>
				</Menu.Button>
				<Menu.Items className='text-gray-900 dark:text-white dark:bg-gray-800 w-full flex items-center flex-col gap-2'>
					{Object.entries(items).map(([item, Icon]) =>
						<Menu.Item key={item}>
							<div className='flex items-center gap-2'>
								<Icon/>
								<p>{item}</p>
							</div>
						</Menu.Item>
					)}
				</Menu.Items>
			</Menu>

		</div>
	);
};

export default MobileNavbar;
