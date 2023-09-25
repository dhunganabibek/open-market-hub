import { useState, useEffect } from 'react';

type WindowDimension =  {
  height: number;
  width: number;
}

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState<WindowDimension>({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		};

		window.onresize = handleResize; // Assign the resize handler directly

		return () => {
			window.onresize = null; // Remove the resize handler
		};
	}, []);

	return windowSize;
};

export default useWindowSize;
