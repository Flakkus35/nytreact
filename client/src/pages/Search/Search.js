import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { FormInput, FormBtn } from "../../components/Form";
import API from "../../utils/API";
import "./Search.css";

class Search extends Component {
	state = {
		topic: "",
		start: "",
		end: "",
	};

	componentDidMount() {
		console.log("Search mounted");
		API.showHome();
	}

	handleInputChange = event => {
	    const { name, value } = event.target;
	    this.setState({
	      [name]: value
	    });
	};

	queryArticles = event => {
		event.preventDefault();
		if (this.state.topic && this.state.start && this.state.end) {
			API.searchAPI({
				topic: this.state.topic,
				start: this.state.start,
				end: this.state.end
			})
			.then(res => console.log(res))
			.catch(err => console.log(err));
		};
	};

	/*handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.topic && this.state.start && this.state.end) {
			API.searchAPI({
				topic: this.state.topic,
				start: this.state.start,
				end: this.state.end
			})
			.then((req, res) => res.json(`Got them articles ${req.body}`))
		}
	}*/

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<Jumbotron>
							<h1>Search</h1>
						</Jumbotron>
						<form>
							<FormInput
								value={this.state.topic}
								onChange={this.handleInputChange}
								name="topic"
								dataname="Topic"
							/>
							<FormInput
								value={this.state.start}
								onChange={this.handleInputChange}
								name="start"
								dataname="Start Year"
								placeholder="Format: YYYYMMDD"
							/>
							<FormInput
								value={this.state.end}
								onChange={this.handleInputChange}
								name="end"
								dataname="End Year"
								placeholder="Format: YYYYMMDD"
							/>
							<FormBtn
								disabled={!(this.state.topic && this.state.start && this.state.end)}
								onClick={this.queryArticles}
							>
								Search
							</FormBtn>
						</form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Search;