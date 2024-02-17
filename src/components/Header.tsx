import LoginButton from "@/components/LoginButton";
import LogoutButton from "@/components/LogoutButton";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Logo from "/public/logo.jpg";

export default async function Header() {
  const session = await getServerSession(authOptions);
  return (
    <header className="bg-gray-200 p-4 px-8">
        <div className="flex justify-between items-center">
            <img src={Logo.src} alt="Logo" className="h-8 w-auto"/>
            <Link href="/" className="logo">Task-UIC</Link>
            <div>
                {session && (
                    <>
                        Hello, {session?.user?.name}
                        <LogoutButton/>
                    </>
                )}
                {!session && (
                    <>
                        Not logged in
                        <LoginButton/>
                    </>
                )}
            </div>
        </div>
    </header>
  );
}