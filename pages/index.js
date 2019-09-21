import React from "react";
import Axios from "axios";
import Router from "next/router";

export default () => {

	async function getVideoData(id) {
		const response = await Axios.get(`/info/${id}`);
	}

	function handleSubmit(event) {
		// event.preventDefault();
		Router.push("/info/123");

		alert("ALERT");
		console.log("ALERT");
	}

	return (
		<div>
			<h1>Hello YTB</h1>
			<form onSubmit={handleSubmit}>
				<input id="input-video-url" type="text" name="video-url" placeholder="Insira o URL do video aqui" required></input>
				<input type="submit" value="Enviar" />
			</form>
		</div>
	);
}