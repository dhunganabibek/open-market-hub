import {useState, useEffect} from 'react';

const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	useEffect(() => {
		if(isDarkMode){
			document.documentElement.classList.add('dark');
		}
		else{
			document.documentElement.classList.remove('dark');
		}
	},[isDarkMode]);

	return {isDarkMode, toggleDarkMode};
};


export default useDarkMode;
