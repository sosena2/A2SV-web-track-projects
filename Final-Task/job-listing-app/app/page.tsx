import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import Home from "./components/Home";

export default async function HomePage() {
  const session = await getServerSession(options);
  console.log("Session from server:", session);
  if (!session) {
    redirect("/login");
  }

  return <Home/>;
}