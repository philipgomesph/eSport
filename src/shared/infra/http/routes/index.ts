import { Router } from "express";
// import userRouter from "@modules/users/infra/http/routes/create.routes";
import userRouter from "../../../../modules/users/infra/http/routes/create.routes";

const routes = Router();

routes.use("/user", userRouter);

export default routes;
