import express from 'express';
import { getUser, createUser} from './users.js';

//console.log("what do you want");
//console.log("try again");

//creating an express application
const app = express();
// Use middleware to parse JSON
app.use(express.json());
const port = 3000;

//Authorization middleware
app.use((req, res, next) => {
	const authToken = req.headers.authorization;
	if (authToken !== "validToken") {
		res.status(403).send("Unauthorized");
	}
	next();
});

//Handle index route //creating a route handler to handle GET requests from localhost
app.get("/", (req, res) => {
	res.send("Hello there"); //creates a respond and sends the response "hello there"
});


//Handle get user
app.get("/user/:id", (req, res) => {
	const id = req.params.id;
	const user = getUser(id);
	if (user) {
		res.send(user);
	} else {
			res.status(404).send(`No user found with id ${id}`);
		}
})

//Handle create user
app.post("/user", async (req, res) => {
const user = await createUser(req.body.user);
res.send(user);
})


app.listen(port, () => console.info(`Express app listening on port: ${port}`));
