import dotenv from 'dotenv'
import express, { Application } from 'express'

export class Server {
  private readonly app: Application = express()
  private readonly PORT: string = process.env.PORT ?? '3000'

  constructor() {
    dotenv.config()
    this.routes()
  }

  // Routes handler
  private readonly routes = (): void => {
    // Example route
    this.app.get('/', (_, res) => res.send('Hello world'))
  }

  public listen = (): void => {
    this.app.listen(this.PORT, () => console.log(`Listening at port ${this.PORT}`))
  }
}
