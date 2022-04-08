
// import { useRef, useEffect, useState } from 'react';
import logo from "../assets/icons/brands/POPI.svg";
import { useRef } from 'react';

const Nav = () => {

	const menu = useRef(null);	
	
	const Clicked = (e) => {
		for(let i = 0; i < document.getElementsByClassName("LINK").length; i++) {
			if(document.getElementsByClassName("LINK")[i] !== e.target) {
				document.getElementsByClassName("LINK")[i].style.color = "white";
				document.getElementsByClassName("LINK")[i].onClick = () => {
					document.querySelector(".heroContent img").classList.add("revealLeft");
					document.querySelector(".heroContent a").classList.add("revealRight");
				}		
			}
		}

		ShowNav();
		e.target.style.color = "#0984e3";
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
	                <li><a onClick={Clicked} className="LINK" href="#"> Home </a></li>
	                <li><a onClick={Clicked} className="LINK" href="#"> work </a></li>
                  	<li><a onClick={Clicked} className="LINK" href="#"> contact me </a></li>
	                <li><a className="" onClick={ShowNav} href=".About"> About me </a></li>
	                <li><a href="#" onClick={ShowNav} className=""> Blog </a></li>
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