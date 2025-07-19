'use client'
import { Building2, Contact, Earth, HandCoins, Home, Info, Settings } from "lucide-react"
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
        url: "#",
        icon: Building2,
    },
    {
        title: "Contact Us",
        url: "#",
        icon: Contact,
    },
]

const itemsSettings = [
    {
        title: "Icons",
        url: "#",
        icon: Settings,
    },
    {
        title: "Forms",
        url: "#",
        icon: Settings,
    },
    {
        title: "Components",
        url: "#",
        icon: Settings,
    }
]

const appSample = [
    {
        title: "Add Watermark to Image",
        url: "#",
        icon: Settings,
    },
    {
        title: "Tiktok Downloader",
        url: "#",
        icon: Settings,
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
                    <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
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
                    <SidebarGroupLabel>Our Sample Apps</SidebarGroupLabel>
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