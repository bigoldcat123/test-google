import { signIn, signOut } from "@/auth";
import Image from "next/image";
import { auth } from "../auth"
import Test from './test'
function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
} 
function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}
export default async function Home() {
  const session = await auth()
  console.log(session);
  
  return (
    <div>
      <SignIn></SignIn>
      <SignOut></SignOut>
      <Test user={session?.user} ></Test>
    </div>
  );
}
