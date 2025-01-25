import { initTRPC } from '@trpc/server';

const items = [
    {id:1, name:'test1', description: 'description 1'},
    {id:2, name:'test2', description: 'description 2'},
    {id:3, name:'test3', description: 'description 3'},
]
const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getItems: trpc.procedure.query(() => {
    return { items }
  }),
})

export type TrpcRouter = typeof trpcRouter