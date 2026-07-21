import express from "express";
import cors from "cors";

import taskRouter from "./routes/task.routes.js";
import categoryRouter from "./routes/category.routes.js";

import { redis } from "./services/redis.js";
import { seed } from "./mocks/seed.js";

const app = express();
const PORT = 3000;

async function start() {
  app.use(cors());
  app.use(express.json());

  app.get("/", (_, res) => {
    res.send("API is running");
  });

  app.use("/tasks", taskRouter);
  app.use("/categories", categoryRouter);

  await redis.connect();

  const hasData = await redis.exists("category:1");

  if (!hasData) await seed();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

start();
