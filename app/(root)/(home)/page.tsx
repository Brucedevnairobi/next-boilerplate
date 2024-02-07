import { UserButton } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div className="h-screen">
      <h2 className="bg-red-600 text-blue-800">Hello World</h2>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}