import kitty from '../assets/images/kitty/Kitty.png';
import KT1 from '../assets/images/kitty/KT1.png';
import KT2 from '../assets/images/kitty/KT2.png';
import KT3 from '../assets/images/kitty/KT3.png';
import Fade from 'react-reveal/Fade';


const See = ({ href }) => {
	return (
		<Fade right>
			<a href={href ? href : "#"} target="blank_">See project</a>
		</Fade>
	);
}

const Img = ({ image, class_ }) => {
	return (
		<img src={image} className={class_} alt="image"/>
	);
}


const Designs = () => {
	return (
	<Fade bottom cascade>
		<div className="Designs">
			<Img image={kitty} class_="kitty" />
			<div>
				<Img image={KT1} class_="KT1" />
				<Img image={KT2} class_="KT2" />
				<Img image={KT3} class_="KT3" />
			</div>
		</div>
	</Fade>
	
	);
}

const Mooshell = () => {
	return (

			<Fade bottom cascade>
				<div className="Mooshell">
					<h1> Mooshell </h1>
					<p>
						Python shell that adds additional functionality to the windows
						command line such as the touch command, downloading fonts,
						downloading videos, organizing files, scrapping web pages, even
						downloading currency stats then dumping to a csv file, and many 
						more utilities.
						open source and can be integrated very easily and modified.
						also, I have used these libraries.
					</p>
					<div>
						<ul>
							<li>Requests</li>
							<li>typing</li>
							<li>hashlib</li>
						</ul>

						<ul>
							<li>os</li>
							<li>shutil</li>
							<li>sys</li>
						</ul>

						<ul>
							<li>base64</li>
							<li>colorama</li>
							<li>json</li>
						</ul>

						<ul>
							<li>subprocess</li>
						</ul>
					</div>
					<See href="https://github.com/Moody0101/mooshell"/>
				</div>
			</Fade>
		)
	}

	const RemoteAccess = () => {
		return (
		<Fade bottom cascade>
			<div className="RemoteAccess">
				<h1> RemoteAccess </h1>
				<p>
					An application to remotely access your pc using  your private networks
					and your pc ipv4.
				</p>
				
				<h4> Terminology </h4>
				
				<p>
					so basically what this appliaction does behind the scenes is initializing 
					a Socket server and then a flask Api that connects to the same socket.
					the api gets the commands via a post request, then it forwards it into
					the socket that takes the data then decodes to utf-8, finally it returns a
					response that has the standard output of the command.
					Finally, the api sends the response as json to the client/remote user.
					libraries I used:
				</p>

				<div>
					<ul>
						<li>Requests</li>
						<li>Socket</li>
					</ul>

					<ul>
						<li>os</li>
						<li>sys</li>
					</ul>

					<ul>
						<li>Threading</li>
						<li>dataclasses</li>
					</ul>

					<ul>
						<li>json</li>
						<li>subprocess</li>
					</ul>
				</div>

				<See href="https://github.com/Moody0101/RemoteAccess"/>
			</div>
		</Fade>
	)
}


const YoutubeD = () => {
	return (
		<Fade bottom cascade>
			<div className="Youtube_">
				<h1> Youtube downloader </h1>	
				<p>
					A cli and gui to download videos and audio from youtube.
					it was my first project that had me prepared for the challenges
					of software engineering.
					Libraries I used:
				</p>

				<div>
					<ul>
						<li>Tkinter</li>
						
					</ul>

					<ul>
						<li>os</li>
						
					</ul>
					
					<ul>
						<li>pafy</li>
						
					</ul>

					<ul>
						<li>time</li>
						
					</ul>
				</div>
				<See href="https://github.com/Moody0101/youtubeDownloader"/>
			</div>
		</Fade>
		);
}

const Analyzer = () => {
	return (
		<Fade bottom cascade>
			<div className="Analyzer">
				<h1> Currency Analyzer </h1>
				<p>
					a gui that downloads or plots the stats of a currency throughout the month,
					it also can dump the data in a csv file.
					the api I used is Yahoo finance api, and for the design I used QT designer but
					when I figured out how pyqt5 works, I just started coding it without the code 
					generator
				</p>
				<div>
					<ul>
						<li>PyQT5</li>
						<li>y-finance</li>
						
					</ul>

					<ul>
						<li>sys</li>
						<li>matplotlib</li>
						
					</ul>

					<ul>
						<li>pandas</li>
					</ul>

					<ul>
						<li>seaborn</li>
					</ul>
				</div>
				<See href="https://github.com/Moody0101/Crypto_Currency_Analyzer"/>
			</div>
		</Fade>
	)
}


export { Mooshell, RemoteAccess, YoutubeD, Analyzer, Designs };