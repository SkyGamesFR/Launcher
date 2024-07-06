import { MainLayout } from "@/components/layout/MainLayout";
import React from "react";
import { CgDanger } from "react-icons/cg";

export default function Error() {
    return (
        <MainLayout>
            <div className="flex flex-col gap-12 justify-center items-center w-screen h-fit ">
                <CgDanger className="text-red-500 text-5xl" />
                <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
                <p className="text-lg text-white text-center">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <a href="/" className="text-lg text-white underline">Go back to Home</a>
            </div>
        </MainLayout>
    );
}