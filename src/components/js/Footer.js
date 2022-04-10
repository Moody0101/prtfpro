import { navigate } from './util';
import { Link } from 'react-router-dom';
import footerLogo from '../assets/icons/brands/POPI.svg';
import twitter from '../assets/icons/brands/twitter.svg';
import github from '../assets/icons/brands/github.svg';
import instagram from '../assets/icons/brands/insta.svg';
import Fade from 'react-reveal/Fade';



import { useState, useEffect } from 'react';

const Footer = () => {
	const [Elements, setElements] = useState(null);
	useEffect(() => {
		setElements(document.querySelectorAll(".menu .LINK"));
		return () => {
			setElements(null);
		}
	}, [])

	const Clicked = (n) => {
		navigate();
		Elements[n].style.color = "#0984e3";
		
		for(let i = 0; i < Elements.length; i++) {
			if(Elements[i] !== Elements[n]) {
				Elements[i].style.color = "white";
			}
		}
	}

	return (
		
			<section className="footer___">
				
					<div>
						<Fade left cascade> <img src={footerLogo} alt="footerLogo"/> </Fade>
					</div>
					<div className="lists">
						<Fade bottom cascade>
							<ul>
								<li> +212 37703384 </li>
								<li> azmoudh@gmail.com </li>
							</ul>
						</Fade>
						
						<Fade bottom cascade>
							<ul>
					            <li><Link onClick={() => {Clicked(0)}} className="LINK" to="/"> Home </Link></li>
								<li><Link onClick={() => {Clicked(1)}} className="LINK" to="/Work"> work </Link></li>
								<li><Link onClick={() => {Clicked(2)}} className="LINK" to="/Contact"> contact me </Link></li>
								<li><Link onClick={() => {Clicked(3)}} className="LINK" to="/About"> About me </Link></li>
								<li><a target="blank_" className="BlogButton" href="https://moodyyb.netlify.app/"> Blog </a></li>
							</ul>
						</Fade>

						<Fade bottom cascade>
							<ul>
								<li> terms of use </li>
								<li> privacy </li>
								<li><a target="blank_" href="https/github.com/Moody0101"><img src={github} alt="GithubLink"/></a></li>
								<li><a target="blank_" href="https://twitter.com/Moody010111"><img src={twitter} alt="TwitterLink"/></a></li>
								<li><a target="blank_" href="https://www.instagram.com/razor_1010_1"><img src={instagram} alt="InstagramLink"/></a></li>
							</ul>
						</Fade>
				</div>
			</section>
		
	);
}

export default Footer;