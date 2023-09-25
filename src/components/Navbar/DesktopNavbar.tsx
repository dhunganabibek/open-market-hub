import { IconType } from 'react-icons';
import useDarkMode from '../../hooks/useDarkMode';
import {FiSun} from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import classNames from 'classnames';


export type NavbarProps= {
  title: string;
  items: Record<string, IconType>
}
const DesktopNavbar = ({items, title}: NavbarProps) => {
	const {isDarkMode, toggleDarkMode} = useDarkMode();
	return (
		<div className='flex items-center justify-between p-4 h-16 w-full'>
			<p>{title}</p>
			<div className='gap-8 flex justify-center pr-12 w-full'>
				{Object.entries(items).map(([item, Icon]) =>
					<div className='flex gap-2 items-center' key={item}>
						<>
							<Icon/>
							<p>{item}</p>
						</>
					</div>
				)}
			</div>
			<h1 onClick={() => toggleDarkMode()}><div className={classNames('border-2 border-red-900 p-3 rounded-full', {
				'border-gray-100': isDarkMode,
				'border-gray-900': !isDarkMode
			})}>{isDarkMode ? <FiSun/> : <FaMoon/> }</div></h1>
		</div>
	);
};

export default DesktopNavbar;
