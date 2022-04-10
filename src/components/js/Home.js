import hero from '../assets/Illustrations/hero/Hero.svg';
import twitter from '../assets/icons/brands/twitter.svg';
import github from '../assets/icons/brands/github.svg';
import instagram from '../assets/icons/brands/insta.svg';
import About from './About';
import Contact from './Contactme';
import {importAll} from './util';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


const r = importAll(require.context('../assets/Illustrations/art', false, /\.(svg|png)$/));
const Art = () => { 
	
	const [images, setImages] = useState(r);

	return (
		<section className="art">
			
				<div className="innerArt">
					
						{
							Object.keys(images).map((key_, i) => {
								return (
									<Fade bottom cascade key={i}>
										<img src={images[key_]} alt={key_}/> 
									</Fade>
								)
							})
						}
					
				</div>
			
		</section>
	)
}

const Hero = () => {

	// VanillaTilt.init(document.querySelector(".Herocontainer"), {
	//     max: 16,
	//     speed: 10
	// });

	return (
		<div className="Hero">
			<div>
				<h1>
					I build high
				</h1>
				<h1>
					quality degital
				</h1>
				<h1>
					products
				</h1>
				<div className="Buttons_">
					<a href="/"> Let’s wrok! together </a>
					<a href="/"> Want my cv ? </a>
				</div>
				<div className="sm">
					<a  target="blank_" href="https/github.com/Moody0101"><img src={github} alt="GithubLink"/></a>
					<a  target="blank_" href="https://twitter.com/Moody010111"><img src={twitter} alt="TwitterLink"/></a>
					<a  target="blank_" href="https://www.instagram.com/razor_1010_1"><img src={instagram} alt="InstagramLink"/></a>
				</div>
			</div>
				<img src={hero} alt="Hero image."/>
		</div>
	)
} 

const Home = () => {
	return (
		<section className="Home">
			<Hero />
			<Art />
			<Contact />
		</section>
	)
}


export default Home;