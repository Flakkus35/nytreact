import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import "./Results.css";

class Results extends Component {
	state = {
		articles: []
	};

	componentDidMount() {
		console.log("Results mounted");
	}

	handleInputChange = event => {
	    const { name, value } = event.target;
	    this.setState({
	      [name]: value
	    });
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size="md-12">
						<Jumbotron>
							<h1>Results</h1>
						</Jumbotron>
						<List>
							<ListItem>
								<p>ArticleList</p>
							</ListItem>
							<ListItem>
								<p>ArticleList</p>
							</ListItem>
						</List>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Results;