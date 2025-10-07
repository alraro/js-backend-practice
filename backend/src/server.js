const dotenv = require("dotenv");
const express = require("express");
const employeesRoutes = require("./routes/employees");
const cors = require("cors");

dotenv.config({ path: "./.env" });

function validateEnv() {
	console.log("Validating environment variables...");
	const requiredEnvVars = ["DB_USER", "DB_NAME", "DB_PASSWORD", "DB_HOST", "DB_PORT", "BACKEND_PORT", "BACKEND_HOST"];
	const missingVars = requiredEnvVars.filter((varName) => !process.env[varName]);
	if (missingVars.length > 0) {
		throw new Error(`Missing required environment variables: ${missingVars.join(", ")}`);
	}
	console.log("All required environment variables are set.");
}

function startExpressApp(port, host) {
	console.log("Starting Express server...");
	const app = express();
	app.use(cors());
	app.use(express.json());
	app.use("/employees", employeesRoutes);
	app.get("/", (req, res) => {
		res.send("<h1>Welcome to tus muertos the Express server!</h1>");
	});
	app.listen(port, () => {
		console.log(`Express server running at http://${host}:${port}/`);
	});
	return app;
}

function main() {
	validateEnv();
	const PORT = process.env.BACKEND_PORT;
	const HOST = process.env.BACKEND_HOST;
	const expressApp = startExpressApp(PORT, HOST);
}

main();
