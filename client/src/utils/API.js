import axios from "axios";

export default {
	showHome: function() {
		return axios.get("/");
	},

	searchAPI: function(searchData) {
		console.log(searchData);
		// return axios.get("/api/search", searchData);
	}

/*	storeArticles: function(articleData) {
		return axios.post("/api/store");
	}*/
};