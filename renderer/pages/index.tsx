import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cog, Play } from "lucide-react";

export default function HomePage() {
    return (
        <MainLayout>
            <div className="flex h-screen w-screen flex-col">
                <div className="bg-black/5 backdrop-blur-lg border border-stroke-1 rounded-out w-full h-full flex flex-col overflow-y-auto p-64">
                    <div className="flex flex-col gap-32" id="Main">
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    SkyGames
                                </CardTitle>
                                <CardDescription>
                                    Project Ozone 3 Remix
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-grid">
                                    <div className="flex flex-row gap-4">
                                        <Button variant="outline">
                                            Play
                                            <Play className="ml-2 h-4 w-4"/>
                                        </Button>
                                        <Button variant="ghost">
                                            <Cog className="mr-2 h-4 w-4" />
                                            {' '}Settings
                                        </Button>
                                    </div>
                                    <div className="flex flex-row">
                                        
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
