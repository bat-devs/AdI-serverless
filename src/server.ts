import app from "./app";

let port = process.env.PORT || '4201';

app.listen(port, () => {
    console.log(`Server's running on http://localhost:${port}`);
});
