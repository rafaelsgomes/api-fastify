import { Knex, knex as setupKnex } from 'knex'
import { env } from './env'

export const DbConfig: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './database',
  },
}

export const knex = setupKnex(DbConfig)
