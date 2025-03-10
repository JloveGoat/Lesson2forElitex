import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignupForm() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f0f5f0] p-4">
      <h1
        className="text-4xl md:text-5xl font-bold text-[#2e7d32] mb-8 relative"
        style={{
          textShadow: "8px 8px 0 rgba(0, 100, 0, 0.1)",
        }}
      >
        CartSmart
      </h1>
      <Card
        className="w-full max-w-md border-0 shadow-none relative"
        style={{
          boxShadow: "8px 8px 0 rgba(0, 100, 0, 0.1)",
        }}
      >
        <CardHeader className="space-y-1 pt-6 pb-2 flex flex-col items-center">
          <div className="w-16 h-16 bg-[#2e7d32] rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-center">Sign up for a free account</h1>
          <p className="text-sm text-muted-foreground text-center">
            or{" "}
            <Link href="/login" className="text-[#2e7d32] hover:underline">
              login here
            </Link>
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <form>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <Button type="submit" className="w-full bg-[#2e7d32] hover:bg-[#1b5e20]">
                Create Account
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

