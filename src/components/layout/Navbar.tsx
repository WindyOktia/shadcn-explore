"use client"

import { Github, Linkedin, Moon, Sun } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { useTheme } from "next-themes"
import { SidebarTrigger } from "../ui/sidebar"
import Link from "next/link"

const Navbar = () => {
    const { setTheme } = useTheme();

    return (
        <nav className="p-4 flex items-center justify-between">
            {/* LEFT */}
            <SidebarTrigger />

            {/* RIGHT */}
            <div className="flex items-center gap-4">
                <Button asChild className="bg-black hover:bg-gray-800 text-white">
                    <Link href="https://github.com/WindyOktia" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                    </Link>
                </Button>
                <Button asChild className="bg-[#0077B5] hover:bg-[#006699] text-white">
                    <Link href="https://id.linkedin.com/in/win-oktia" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                    </Link>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </nav>
    )
}

export default Navbar