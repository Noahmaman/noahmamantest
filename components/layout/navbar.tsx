"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const menuItems = [
  { href: "/features/analytics", label: "Analytics" },
  { href: "/features/collaboration", label: "Collaboration" },
  { href: "/features/security", label: "Security" },
]

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname()
  const isAuthPage = pathname?.includes("/login") || pathname?.includes("/signup")

  return (
    <nav className={cn("flex items-center justify-between py-4", className)}>
      <Link href="/" className="text-2xl font-bold text-white">BoltSaaS</Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {!isAuthPage && menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-white hover:text-purple-200 transition-colors",
              pathname === item.href && "text-purple-200"
            )}
          >
            {item.label}
          </Link>
        ))}
        <ThemeToggle />
        {!isAuthPage && (
          <>
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-purple-200">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-white text-purple-600 hover:bg-purple-50">
                Get Started
              </Button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center space-x-4">
        <ThemeToggle />
        {!isAuthPage && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-foreground hover:text-purple-600 transition-colors",
                      pathname === item.href && "text-purple-600"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/login">
                  <Button variant="ghost" className="w-full justify-start">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  )
}