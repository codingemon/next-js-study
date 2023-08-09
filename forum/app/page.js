import { connectDB } from "/util/database.js";

// export const recalidate = 60;

export default async function Home() {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  // await fetch("/URL", { cache: "force-cache" });

  return <main>{result[0].title}</main>;
}
