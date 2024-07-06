import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardHeader } from "@/components/ui/card";

export default function HomePage() {
    return (
        <MainLayout>
            <Card className="bg-background/50 backdrop-blur-md">
                <CardHeader>
                    <Link href='/auth'>
                        Authenticate
                    </Link>
                </CardHeader>
            </Card>
        </MainLayout>
    );
}
