import { useEffect, useState } from 'react';

type WindowDimension = {
  height: number;
  width: number;
};

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<WindowDimension>({height: 0, width: 0});

	useEffect(() => {
		const handleResize = () => setWindowSize({height: window.innerHeight, width: window.innerWidth});
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize );
		};

	}, []);
	return windowSize;
};


export default useWindowSize;
