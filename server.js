const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const fetchVideoInfo = require("youtube-info");
// const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	server.get("/", (req, res) => {
		return app.render(req, res, "/", req.query);
	});

	server.get("/hello", (req, res) => {
		return app.render(req, res, "/hello", req.query);
	});

	server.get("/video/:id", async (req, res) => {
		const data = await fetchVideoInfo(req.params.id);
		// console.log("pass 1", data);
		return app.render(req, res, "/video/:id", { data });
	});

	// server.get("/posts/:id", (req, res) => {
	// 	return app.render(req, res, "/posts", { id: req.params.id });
	// });

	// server.all("*", (req, res) => {
	// 	return handle(req, res);
	// });

	server.listen(port, error => {
		if (error) throw error;
		console.log(`> Ready on http://localhost:${port}`);
	});
});