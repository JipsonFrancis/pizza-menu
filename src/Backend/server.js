//mongodb+srv://kingKLong:yTT5WGRSEDlLEjSb@cluster101.ia1ny2m.mongodb.net/?retryWrites=true&w=majority
import {MongoClient} from "mongodb"

async function main ()
{
    const uri = `mongodb+srv://kingKLong:yTT5WGRSEDlLEjSb@cluster101.ia1ny2m.mongodb.net/?retryWrites=true&w=majority`

    const session = new MongoClient(uri)

    try
    {
        await session.connect()
        await listCollections(session)
    }catch(e)
    {
        console.error(e)
    }finally
    {
        await session.close()
    }
}


async function listCollections(session)
{
    const {databases} = await session.db().admin().listDatabases()
    console.log(databases)
    databases.forEach((db) => console.log(db.name))
}

main().catch(console.error)