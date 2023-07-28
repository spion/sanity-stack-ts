import "reflect-metadata"
import { ResolverData, buildSchema } from "type-graphql"
import { ApolloServer } from "apollo-server"
import { DependencyContainer, container } from "tsyringe"
import { ExpressRequest } from "./lib"

const PORT = process.env.PORT || 4000

type SchemaContext = {
  container: DependencyContainer
}

async function main() {
  const schema = await buildSchema({
    resolvers: [__dirname + "/**/*.resolver.{ts,js}"],
    container: ({ context }: ResolverData<SchemaContext>) => ({
      get: cls => context.container.resolve(cls),
    }),
  })

  const server = new ApolloServer({
    schema,
    context: ctx => {
      // generate the requestId (it also may come from `express-request-id` or other middleware)

      let requestContainer = container.createChildContainer()

      requestContainer.register(ExpressRequest, {
        useValue: new ExpressRequest(ctx.req),
      })
      return { container: requestContainer }
    },

    plugins: [
      {
        requestDidStart: async () => {
          return {
            willSendResponse: async requestContext => {
              // This can be used to implement all disposables
              await requestContext.context.container.dispose()
            },
          }
        },
      },
    ],
  })

  const { url } = await server.listen(PORT)
  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

main()
