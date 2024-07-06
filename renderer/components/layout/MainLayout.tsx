import Head from "next/head";
import React from "react";
import { SideNav } from "../sideNav";

type MainLayoutProps = {
    children: React.ReactNode;
};

export function MainLayout({children}: MainLayoutProps) {
    return(
        <React.Fragment>
            <Head>
                <title>SkyGames Launcher - v0.0.1-alpha</title>
            </Head>
            <main className="font-sans w-screen h-screen text-white flex bg-[linear-gradient(to_top,rgba(0,0,0,0.85),rgba(0,0,0,0.65),rgba(0,0,0,0.4)),url('/images/1.jpeg')] overflow-hidden bg-no-repeat bg-clip-border bg-cover">
                <SideNav />
                {children}
            </main>
        </React.Fragment>
    )
}