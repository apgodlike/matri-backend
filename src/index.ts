import express from "express";
import profileRouter from "./routes/profile.route";
import cors from "cors";

const app = express();

const port = 3010;

app.use(express.json());
// handle CORS
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/profile", profileRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
