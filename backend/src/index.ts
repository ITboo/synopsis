import express from "express";
import * as trpcExpress from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc'
import cors from 'cors'

const PORT = 8080;
const expressApp = express();

expressApp.use(cors())
expressApp.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  })
)

expressApp.listen(PORT, () =>
  console.info(`Listening on http://localhost:${PORT}/`),
);
