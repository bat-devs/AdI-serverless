import app from "./app";
import environment from "./constants/environemnt";

const port = environment.port;

app.listen(port, () => {
    console.log(`Server's running on http://localhost:${port}`);
});
