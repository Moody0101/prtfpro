import { importAll, isInviewPort } from './util';
import { useState, useEffect } from 'react';



const r = importAll(require.context('../assets/icons/tools', false, /\.(svg)$/));

export default function About() {

	const [images, setImages] = useState(r);

 	return (
 		<section className="About">
 				
	 			<div className="innerAbout">
	 				
		 			<h2> Who am I, what I do </h2>
					

		 			<p>
						<p>
							Hi, I am hossin, a self-taught full-stack engineer, UI/UX designer, and probably
							an artist.
						</p>
						<p>
							I like everything computer related,
							I like making software in a daily basis using python, javascript or c++.
						</p>
						<p>
							I love what I am doing.	
						</p>	
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
 		</section>
 			
 	)
}