import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem, RemoveBtn } from "../../components/List";

class Saved extends Component {
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
							<h1>Saved Articles</h1>
						</Jumbotron>
						<List>
							<ListItem>
								Saved Articles
								<RemoveBtn>Delete</RemoveBtn>
							</ListItem>
							<ListItem>
								Saved Articles
								<RemoveBtn>Delete</RemoveBtn>
							</ListItem>
						</List>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Saved;