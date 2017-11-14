const axios = require("axios");
const db = require("../models");

module.exports = {
	test: function(req, res) {
		res.json(`You did it ${req.body}`);
	},

	search: function(req, res) {
		console.log("searchAPI");
		// axios
		// 	.get({
		// 		url:`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931?q=${req.topic}?begin_date=${req.start}?end_date=${req.end}`
		// 	})
		// 	.then(({ data: { results } }) => res.json(results))
		// 	.catch(err => res.status(422).json(err));
		// axios({
		// 	method: 'get',
		// 	url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931?q=${req.topic}?begin_date=${req.start}?end_date=${req.end}`
		// })
		// .then(({ data: { results } }) => res.json(results))
		// .catch(err => res.status(422).json(err));
	},

	// store: function(req, res) {
	// 	db.Article
	// 		.create(req.body)
	// }
}