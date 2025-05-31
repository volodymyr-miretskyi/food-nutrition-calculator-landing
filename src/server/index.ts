import express from "express";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("./src/client"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
