import { Request } from "express"

export class ExpressRequest {
  constructor(public req: Request) {}
}
