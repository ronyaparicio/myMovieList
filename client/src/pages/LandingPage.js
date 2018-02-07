import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import logo from ".././logo.png";




// const imgurl = `https://image.tmdb.org/t/p/w500`


class SearchMoviesContainer extends Component {

		state = {
			email: "",
			password: ""
		};
	
	handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
		};

	componentDidMount() {
		this.topMovies();
		// this.setState({posterPath:posterPath});
	
	};

	topMovies = () => {
		API.topMovies()
			.then(res => this.setState({ posterPath: res.data.results}))
			.catch(err => console.log(err));
	};

	

	signUp = ()=> {
		this.props.history.push('/welcome');
	}
 

	render() {
		return (
			<div className="header" >
				<div className="header__logo-box">
					<a href="/" className="brand-logo center"><img id="logoWelcome" className="logo-img" src={logo} alt="logo" /></a>
				</div>
				<a href="/signIn" className="btn signIn">Sign In</a>
				
				<div className="header__text-box">
					<h1 className="primary-heading">Find shows and movies</h1>
					<a className="btn " href="/signUp" >Join Us</a>
				</div>
			</div>
		);
	}
}


export default SearchMoviesContainer;
