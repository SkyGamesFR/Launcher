import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { userAuthSchema } from "@/lib/validation/auth";
import * as z from "zod";
import { CgClose, CgSpinner } from "react-icons/cg";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { DialogClose } from "@radix-ui/react-dialog";

type FormData = z.infer<typeof userAuthSchema>

export default function AuthPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: zodResolver(userAuthSchema),
    })

    const [isLoading, setIsLoading] = React.useState<boolean>(false)
    const [error, setError] = React.useState<string | null>(null)
    const [showOTP, setShowOTP] = React.useState<boolean>(false)

    async function onSubmit(data: FormData) {
        setIsLoading(true)
        console.log("data", data)
    
        await window.ipc.invoke("signIn", data).then((result) => {
            console.log("result", result)

            if (result.status === "pending" && result.requires2fa) {
                setShowOTP(true)
                return
            }

            setIsLoading(false)
        }).catch((error) => {
            console.error(error)
            setIsLoading(false)
        })

    }

    return(
        <MainLayout>
            <div className="flex h-screen w-screen items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Card className="bg-black/5 backdrop-blur-md">
                        <CardHeader>
                            <CardTitle className="text-2xl">Login</CardTitle>
                            <CardDescription>
                            Enter your email below to login to your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com"
                                        disabled={isLoading}
                                        {...register("email")}
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link href="#" className="ml-auto inline-block text-sm underline">
                                        Forgot your password?
                                    </Link>
                                    </div>
                                    <Input
                                     id="password" 
                                     type="password" 
                                     disabled={isLoading}
                                     {...register("password")}
                                    />
                                </div>
                                {errors?.email && (
                                    <p className="px-1 text-xs text-red-600">
                                        {errors.email.message}
                                    </p>
                                    )}
                                <Button type="submit" className="w-full" disabled={isLoading}>
                                    {isLoading && (
                                        <CgSpinner className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Login
                                </Button>
                                </div>
                                <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href="#" className="underline">
                                    Sign up
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                    {showOTP && (
                        <div className="mt-4">
                            <Dialog open={showOTP}>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Two-factor authentication</DialogTitle>
                                        <DialogDescription>
                                            Enter the code from your authenticator app
                                        </DialogDescription>
                                    </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid grid-cols-4 items-center justify-center gap-4">
                                                <InputOTP maxLength={6}>
                                                    <InputOTPGroup>
                                                        <InputOTPSlot index={0} />
                                                        <InputOTPSlot index={1} />
                                                        <InputOTPSlot index={2} />
                                                    </InputOTPGroup>
                                                    <InputOTPSeparator />
                                                    <InputOTPGroup>
                                                        <InputOTPSlot index={3} />
                                                        <InputOTPSlot index={4} />
                                                        <InputOTPSlot index={5} />
                                                    </InputOTPGroup>
                                                </InputOTP>
                                            </div>
                                        </div>
                                    <DialogFooter>
                                        <Button type="submit">Send Code</Button>
                                        <DialogClose asChild>
                                            <Button type="button" variant="destructive" onClick={() => setShowOTP(false)}>
                                                Close
                                            </Button>
                                    </DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    )}

                </form>
            </div>
        </MainLayout>
    )
}