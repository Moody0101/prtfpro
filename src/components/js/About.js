import { importAll, isInviewPort } from './util';
import { useState, useEffect } from 'react';

import Fade from 'react-reveal/Fade'

const r = importAll(require.context('../assets/icons/tools', false, /\.(svg)$/));

export default function About() {

	const [images, setImages] = useState(r);

 	return (
 		<section className="About">
 				<Fade bottom cascade>

	 			<div className="innerAbout">
	 				
		 			<h2> Who am I, what I do </h2>
					

		 			<p>
						 			hello, I am hossin, a self-taught front-end engineer,  graphic designer and artist based
						in Morocco. I build real world web applications, I design high quality and modern UIs and 
						graphics, I also enjoy  scripting using various programming languages such as 
						Python, Javascript and C++.
						I am fueled with alot of dreams and ambitions of my own, I love science, technology 
						and music.
		 			</p>
		 			
		 				<h2> What I use</h2>
					
		 			<div className="ToolsImages">
		 				{
		 					Object.keys(images).map((key, index) => {
									return <img src={images[key]} key={index} alt={key}/>
		 					})
		 				}
		 			</div>
 				</div>
 				</Fade>
 		</section>
 			
 	)
}