import { Home, LineChart, NewspaperIcon, Package, Package2, Settings, ShoppingCart, Users2 } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function SideNav() {
    const [user, setUser] = useState(null);
    const { pathname } = useRouter();

   /* useEffect(() => {
        window.ipc
        .invoke("request-instances", )
        .then((data) => {
            setUser(data.user);
        })
        .catch((error) => {
            console.error("IPC invocation failed:", error);
        });
    }, []);
*/
    return (
        <TooltipProvider>
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-24 flex-col border-r bg-background/50 backdrop-blur-md sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 py-4">
                    <Link
                        href="/"
                        className="group flex h-12 w-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-12 md:w-12 md:text-base"
                    >
                        <Image
                            src="/images/icon.png"
                            alt="Logo"
                            width={64}
                            height={64}
                        />
                    </Link>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Link
                            href="/"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Home className="h-5 w-5" />
                            <span className="sr-only">Home</span>
                        </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Home</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Link
                            href="/account"
                            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Users2 className="h-5 w-5" />
                            <span className="sr-only">Account</span>
                        </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Account</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Link
                            href="/news"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <NewspaperIcon className="h-5 w-5" />
                            <span className="sr-only">News</span>
                        </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">News</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Link
                            href="/discord"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <FaDiscord className="h-5 w-5" />
                            <span className="sr-only">Discord</span>
                        </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Discord</TooltipContent>
                    </Tooltip>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                    {user && (
                        <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/store"
                                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                            >
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src={user?.avatar || "https://crafatar.com/avatars/069a79f4-44e9-4726-a5be-fca90e38aaf5"} alt={user?.username} />
                                    <AvatarFallback>{user?.username?.charAt(0).toUpperCase()}</AvatarFallback>
                                </Avatar>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">{user?.username}</TooltipContent>
                    </Tooltip>
                    )}
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Link
                            href="/settings"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Settings className="h-5 w-5" />
                            <span className="sr-only">Settings</span>
                        </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">Settings</TooltipContent>
                    </Tooltip>
                </nav>
            </aside>
        </TooltipProvider>
        
    )
}