import express from "express";
import cors from "cors";

import taskRouter from "./routes/task.routes.js";
import categoryRouter from "./routes/category.routes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("API is running");
});

app.use("/tasks", taskRouter);
app.use("/categories", categoryRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
