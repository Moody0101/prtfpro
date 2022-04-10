
// import { useRef, useEffect, useState } from 'react';
import logo from "../assets/icons/brands/POPI.svg";
import { useRef } from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {

	const menu = useRef(null);	
	
	const Clicked = (e) => {
		e.target.style.color = "#0984e3";
		
		for(let i = 0; i < document.getElementsByClassName("LINK").length; i++) {
			if(document.getElementsByClassName("LINK")[i] !== e.target) {
				document.getElementsByClassName("LINK")[i].style.color = "white";
			}
		}

		ShowNav();
	}
	

	const ShowNav = () => {
		const spans = document.querySelectorAll("#HAMBMENU span");		
		for(let i = 0; i < spans.length; i++) {
			spans[i].classList.toggle("active");
		}

		menu.current.classList.toggle("ActiveNav");
	}


	return (
		<nav className="navbar">
	            <div className="innerNavContainer">
		            <img className="logo" src={ logo } alt="M&T logo"/>
		            
			            <ul ref={menu} className="menu unactive">
			                <li><NavLink onClick={Clicked} className="LINK" to="/"> Home </NavLink></li>
			                <li><NavLink onClick={Clicked} className="LINK" to="/Work"> work </NavLink></li>
		                  	<li><NavLink onClick={Clicked} className="LINK" to="/Contact"> contact me </NavLink></li>
			                <li><NavLink onClick={Clicked} className="LINK" to="/About"> About me </NavLink></li>
			                <li><a target="blank_" className="BlogButton" href="https://moodyyb.netlify.app/"> Blog </a></li>
			        	</ul>
		            

		        	<button id="HAMBMENU" onClick={ShowNav}>
		        		<span></span>
		        		<span></span>
		        		<span></span>
		        	</button>
	            </div>
        </nav>
	)
}

export default Nav; 