import Fade from 'react-reveal/Fade';
import { useState, useRef, useEffect } from 'react';
import { LoadingAnimation, importAll } from "./util";

const MoreArt = () => {
	const [more, setArt] = useState(importAll(require.context('../assets/Illustrations/more', false, /\.(svg)$/)));
	
	return (
		<div className="moreArt">
			{
				Object.keys(more).map((key_, i) => {
					return (
						<Fade bottom cascade key={i}>
							<img src={more[key_]} alt={key_}/>
						</Fade>
					)
				})
			}
		</div>)
}

const Contact = () => {
	
	const email = useRef('');
	const message = useRef('');
	const name = useRef('');

	const [state, setState] = useState({
		fullName: "",
		Email: "",
		Message: ""
	});

	const [loadingAnimationState, setLoadingAnimationState] = useState(false)

	useEffect(() => {
		setState({
			fullName: name.current.value,
			Email: email.current.value,
			Message: message.current.value
		});
	}, [])

	const handleChange = () => {
		setState({
			fullName: name.current.value,
			Email: email.current.value,
			Message: message.current.value
		});
	}
	
	const submit = (e) => {
		
		e.preventDefault();
		setLoadingAnimationState(true);
		var OK = true;

		Object.keys(state).map((key) => {

			if(state[key].length === 0) {
				switch(key) {
					case "fullName":
						name.current.nextElementSibling.textContent = "Empty Full Name field";
						break
					case "Email":
						email.current.nextElementSibling.textContent = "Empty email field";
						break
					case "Message":
						message.current.nextElementSibling.textContent = "Empty message field";
						break
					default:
						console.log("!");
				}
				OK = false;
			}
			return;
		});

		if(OK) {
			// SEND TO DATABASE.
			const OPTIONS = {
				headers: {
	         		'Accept': 'application/json',
	         		'Content-Type': 'application/json'
		       	},

		       method: "POST",
		       body: JSON.stringify(state)
			}

			fetch("/addNew", OPTIONS)
			.then((res) => {
				const data = res.json();
				console.log(data);
				return data;
			})
			.then((data) => {
				message.current.nextElementSibling.style.color = "yellow";
				message.current.nextElementSibling.style.margin = "15px 0";
				message.current.nextElementSibling.textContent = "Sent, thanks " + data.name + " I will contact you as quick as possible :)";
			})
			.catch((e) =>{
				message.current.nextElementSibling.textContent = e;
			})

			.finally(() => {
				setLoadingAnimationState(false);
			})
		}

		else {
			setLoadingAnimationState(false);
			return false;
		}
	}


 	return (
		<section className="Contact">
			<Fade right cascade>
				<form onSubmit={submit} className="Form">
					<h2>contact me</h2>
					<label>Full name</label>
					<input ref={name} onChange={handleChange} type="text" value={state.fullName.value} placeholder="" name="Name"/>
					<span className="validator"></span>
					<label>Email</label>
					<input ref={email} onChange={handleChange} type="Email" value={state.Email.value} placeholder="" name="Email"/>
					<span className="validator"></span>
					<label>Message</label>
					<textarea ref={message} onChange={handleChange} type="text" value={state.Message.value} placeholder="" name="Message" className="MSG"/>
					<span className="validator"></span>
					<div>
						<input type="submit"/> 
						<LoadingAnimation isVisible={loadingAnimationState}/>
					</div>
				</form>
			</Fade>
			<MoreArt />
		</section>
 	)
}


export default Contact;