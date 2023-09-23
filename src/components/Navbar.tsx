import { useState } from 'react';
import { IconType } from 'react-icons';

type NavbarProps= {
  title: string;
  items: Record<string, IconType>
  mobileIcons: Record<string, IconType>
}


const Navbar = ({items, title, mobileIcons}: NavbarProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const Icon = isMenuOpen ? mobileIcons.open : mobileIcons.close;
	return (
		<div className='flex flex-row  md:h-10 justify-between items-center gap-11 p-4'>
			<p>{title}</p>
			<div className='gap-12 hidden sm:flex'>
				{Object.entries(items).map(([item, Icon]) =>
					<div  className='flex gap-2 items-center' key={item}>
						<Icon/>
						<p>{item}</p>
					</div>
				)}
			</div>
			<div>
				<Icon onClick={() => setIsMenuOpen(!isMenuOpen)}/>
			</div>

		</div>
	);
};

export default Navbar;
