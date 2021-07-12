import { db } from 'src/lib/db'

export const getWatchList = () => {
  return db.user.findMany()
}
