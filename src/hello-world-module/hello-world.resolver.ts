import { injectable } from "tsyringe"
import { Query, Resolver } from "type-graphql"
import { ExpressRequest } from "../lib"

@Resolver()
@injectable()
export class HelloWorldResolver {
  constructor(private exprReq: ExpressRequest) {}

  @Query(returns => String)
  sayHello() {
    return "Hello World" + this.exprReq.req.header("accept")
  }
}
