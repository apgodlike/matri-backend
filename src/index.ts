import express from "express";
import profileRouter from "./routes/profile.route";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/profile", profileRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
