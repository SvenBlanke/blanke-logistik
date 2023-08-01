import express from "express";
import { mainRouter } from "./routes/mainRouter";

export const app = express();

app.use(express.static("../webpack/dist"));
app.use(express.json());

app.use("/", mainRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
