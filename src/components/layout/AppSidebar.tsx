import { Calendar, ChevronsLeftRightEllipsis, Home, Inbox, Search, Settings } from "lucide-react"
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar"
import Link from "next/link"

// Menu items.
const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "About Us",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Services",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Clients",
        url: "#",
        icon: Search,
    },
    {
        title: "Contact Us",
        url: "#",
        icon: Settings,
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

const AppSidebar = () => {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="#">
                                <div className="flex font-bold text-lg items-center">
                                    <ChevronsLeftRightEllipsis className="mr-2" /> ShadCN Expl
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
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarGroupLabel>Our Style Guidlines</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {itemsSettings.map((itemsSet) => (
                                <SidebarMenuItem key={itemsSet.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={itemsSet.url}>
                                            <itemsSet.icon />
                                            <span>{itemsSet.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
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