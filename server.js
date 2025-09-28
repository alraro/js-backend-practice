const dotenv = require("dotenv");
const express = require("express");
const usersRoutes = require("./routes/users");

dotenv.config({ path: "./.env" });

function validateEnv() {
	console.log("Validating environment variables...");
	const requiredEnvVars = ["PORT", "POSTGRES_PASSWORD", "POSTGRES_USER", "POSTGRES_DB"];
	const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);
	if (missingVars.length > 0) {
		throw new Error(`Missing required environment variables: ${missingVars.join(", ")}`);
	}
	console.log("All required environment variables are set.");
}

function startExpressApp(port) {
	console.log("Starting Express server...");
	const app = express();
	app.use(express.json());
	app.use("/users", usersRoutes);
	app.get("/", (req, res) => {
		res.send("<h1>Welcome to the Express server!</h1>");
	});
	app.listen(port, () => {
		console.log(`Express server running at http://localhost:${port}/`);
	});
	return app;
}

function main() {
	validateEnv();
	const PORT = process.env.PORT;
	const expressApp = startExpressApp(PORT);
}

main();
