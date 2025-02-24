"use client"

import  React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    // Here you would typically call your authentication API
    console.log("Signing in with:", email, password)

    // For demonstration purposes, we'll just show a success message
    toast({
      title: "Success",
      description: "Sign in successful!",
    })
}

return (
  <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-lg shadow-md">
    <div>
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
    </div>
    <div>
      <Label htmlFor="password">Password</Label>
      <Input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
      />
    </div>
    <Button type="submit" className="w-full">
      Sign In
    </Button>
   </form>
  )
}