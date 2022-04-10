import POPI from '../assets/icons/brands/POPI.svg'
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';


const PagetNotFound = () => {

 	return (
		<Fade bottom>
	 		<section className="NotFound">
		 				<img src={POPI} alt=""/>
		 				<h1> Ooops!! we could not find this page!</h1>
	 		</section>
 		</Fade>
 	)
}


export default PagetNotFound;