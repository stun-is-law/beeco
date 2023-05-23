import clientPromise from "@/lib/mongodb";

export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("misc");
    const collection = db.collection("ciekawostki");
    const dumpsters_location = await collection.find({}).toArray();

    return new Response(JSON.stringify(dumpsters_location));
  } catch (e: any) {
    console.error(e);
    throw new Error(e).message;
  }
}
