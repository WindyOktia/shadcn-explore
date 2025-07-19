'use client'
import { Building2, Contact, Earth, Flame, HandCoins, Home, Info, Settings, SquareChevronRight } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import Link from "next/link"
import { usePathname } from 'next/navigation'

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "About",
        url: "/about-us",
        icon: Info,
    },
    {
        title: "Services",
        url: "/services",
        icon: HandCoins,
    },
    {
        title: "Clients",
        url: "/clients",
        icon: Building2,
    },
    {
        title: "Contact Us",
        url: "/contact-us",
        icon: Contact,
    },
]

const itemsSettings = [
    {
        title: "Icons",
        url: "/style/icons",
        icon: Settings,
    },
    {
        title: "Forms",
        url: "/style/form",
        icon: Settings,
    },
    {
        title: "Components",
        url: "/style/components",
        icon: Settings,
    }
]

const appSample = [
    {
        title: "Add Watermark to Image",
        url: "#",
        icon: SquareChevronRight,
    },
    {
        title: "Image Compressor",
        url: "#",
        icon: SquareChevronRight,
    },
    {
        title: "Color Pallete Extractor",
        url: "#",
        icon: SquareChevronRight,
    },
    {
        title: "QR Code Generator",
        url: "#",
        icon: SquareChevronRight,
    },
    {
        title: "Markdown Preiewer",
        url: "#",
        icon: SquareChevronRight,
    },
    {
        title: "Resume / Portfolio Builder",
        url: "#",
        icon: SquareChevronRight,
    },
    {
        title: "AI Quote / Joke Generator",
        url: "#",
        icon: SquareChevronRight,
    },
    {
        title: "Unit Converter",
        url: "#",
        icon: SquareChevronRight,
    },
    {
        title: "CSS Gradient Generaotr",
        url: "#",
        icon: SquareChevronRight,
    },
    {
        title: "Local Notepad",
        url: "#",
        icon: SquareChevronRight,
    }
]

const AppSidebar = () => {
    const pathname = usePathname()

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <div className="flex font-bold text-lg items-center">
                                    <Earth className="mr-2" /> Web Studio IDN
                                </div>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Main</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((itemsSet) => {
                                const Icon = itemsSet.icon;
                                const isActive = pathname === itemsSet.url;

                                return (
                                    <SidebarMenuItem key={itemsSet.title}>
                                        <SidebarMenuButton asChild>
                                            <a
                                                href={itemsSet.url}
                                                className={`flex items-center px-2 py-1.5 rounded-md transition-colors
    ${isActive
                                                        ? 'bg-blue-100 text-gray-900 dark:bg-blue-900 dark:text-white font-bold'
                                                        : 'text-gray-900 hover:bg-blue-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-blue-800 dark:hover:text-white'}
  `}
                                            >
                                                <Icon className="mr-2 h-4 w-4" />
                                                <span>{itemsSet.title}</span>
                                            </a>

                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Our Style Guidlines</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {itemsSettings.map((itemsSet) => {
                                const Icon = itemsSet.icon;
                                const isActive = pathname === itemsSet.url;

                                return (
                                    <SidebarMenuItem key={itemsSet.title}>
                                        <SidebarMenuButton asChild>
                                            <a
                                                href={itemsSet.url}
                                                className={`flex items-center px-2 py-1.5 rounded-md transition-colors
    ${isActive
                                                        ? 'bg-blue-100 text-gray-900 dark:bg-blue-900 dark:text-white font-bold'
                                                        : 'text-gray-900 hover:bg-blue-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-blue-800 dark:hover:text-white'}
  `}
                                            >
                                                <Icon className="mr-2 h-4 w-4" />
                                                <span>{itemsSet.title}</span>
                                            </a>

                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel className="flex items-center gap-2">
                        Our Sample Apps <Flame className="text-red-500" />
                    </SidebarGroupLabel>

                    <SidebarGroupContent>
                        <SidebarMenu>
                            {appSample.map((itemsSet) => {
                                const Icon = itemsSet.icon;
                                const isActive = pathname === itemsSet.url;

                                return (
                                    <SidebarMenuItem key={itemsSet.title}>
                                        <SidebarMenuButton asChild>
                                            <a
                                                href={itemsSet.url}
                                                className={`flex items-center px-2 py-1.5 rounded-md transition-colors
    ${isActive
                                                        ? 'bg-blue-100 text-gray-900 dark:bg-blue-900 dark:text-white font-bold'
                                                        : 'text-gray-900 hover:bg-blue-50 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-blue-800 dark:hover:text-white'}
  `}
                                            >
                                                <Icon className="mr-2 h-4 w-4" />
                                                <span>{itemsSet.title}</span>
                                            </a>

                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            {/* <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    <User2 /> John Doe <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <User /> Account
                                </DropdownMenuItem>
                                <DropdownMenuItem variant="destructive">
                                    <LogOut /> logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter> */}
        </Sidebar>
    )
}

export default AppSidebar