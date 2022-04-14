
import { useRef, useEffect } from 'react';
import logo from "../assets/icons/brands/POPI.svg";



export default function Loader() {
	const loader = useRef("");

	useEffect(() => {
		window.onload = () => {
			setTimeout(() => {
				loader.current.style.display = 'none';
			}, 4000);
		}
	}, []);

 	return (
 		<div id="loading" ref={loader}>
	        <div className="container">
		        <img src={logo} alt="logo"/>
		        <div id="LOAD" className="load"></div>
	        </div>
    	</div>	
 	)
}
