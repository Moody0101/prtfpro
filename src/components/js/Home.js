import hero from '../assets/Illustrations/hero/Hero.svg';
import twitter from '../assets/icons/brands/twitter.svg';
import github from '../assets/icons/brands/github.svg';
import About from './About';


const Hero = () => {

	
	
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
					<a href="#"> Let’s wrok! together </a>
					<a href="#"> Want my cv ? </a>
				</div>
				<div className="sm">
					<a><img src={github} alt="https/github.com/Moody0101"/></a>
					<a><img src={twitter} alt="https://twitter.com/Moody010111"/></a>
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
			<About />
		</section>
	)
}


export default Home;