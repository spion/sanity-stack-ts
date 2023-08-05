import { injectable } from "tsyringe"
import { Query, Resolver } from "type-graphql"
import { ExpressRequest } from "../lib"
import { Database } from "../db"
import { Hellos } from "./hello-world-table"
import { eq } from "drizzle-orm"

@Resolver()
@injectable()
export class HelloWorldResolver {
  constructor(private exprReq: ExpressRequest, private db: Database) {}

  @Query(returns => String)
  async sayHello(): Promise<String> {
    let item = (await this.db.SQL.select().from(Hellos).where(eq(Hellos.id, 1))).at(0)

    return "Hello World" + this.exprReq.req.header("accept") + item?.name
  }
}
