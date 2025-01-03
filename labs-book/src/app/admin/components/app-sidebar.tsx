"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarGroupContent,
} from "@/components/ui/sidebar";

import { Inbox, RotateCcw, CircleDotDashed, CircleCheck, UsersRound, UserRound, Layers, Heart } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from "@clerk/nextjs";

// Menu items.
const docItems = [
    {
      title: "Workflow Introduction",
      url: "#",
      icon: Layers,
    },
    {
      title: "Individual User Actions",
      url: "#",
      icon: UserRound,
    },
    {
      title: "Group Actions",
      url: "#",
      icon: UsersRound,
    },
    {
      title: "Colophon",
      url: "#",
      icon: Heart,
    },
  ];
  
const groupActions = [
    {
      title: "Email Customers",
      url: "#",
      icon: Inbox,
    },
    {
      title: "Mark as Pending",
      url: "#",
      icon: CircleDotDashed,
    },
    {
      title: "Mark as Confirmed",
      url: "#",
      icon: CircleCheck,
    },
    {
      title: "Mark as Unsent",
      url: "#",
      icon: RotateCcw,
    },
  ];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold py-1">
            DAY Book 2024 Admin Dashboard
          </SidebarGroupLabel>
          <SidebarGroupLabel>
            Documentation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                {docItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <a href="#">
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
          <SidebarGroupLabel>
            Group Actions
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                {groupActions.map((item) => (
                    <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                        <a href="#">
                            <item.icon />
                            <span>{item.title}</span>
                        </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
          <Separator />
          <p className="text-xs text-muted-foreground rounded-md px-2 py-2">
            Hey! Glad you&apos;re here :) Let&apos;s send out some books!
          </p>
          <p className="text-xs text-muted-foreground rounded-md py-2 px-2">
            This administrator dashboard displays all the pre-order requests
            from the main page. Here you can view all records (unsent, pending,
            and sent), move orders ahead in the cycle, send them an automated
            confirmation, and finally mark their order as confirmed.
            </p>
          <p className="text-xs text-muted-foreground rounded-md py-2 px-2">
            Tip: Use ⌘ + b at anytime to toggle the sidebar.
          </p>
          <p className="text-xs text-muted-foreground rounded-md py-2 px-2">
            Need help? Reach out to Kris via text.
          </p>
            <div className="px-2 py-2">
                <ClerkProvider>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </ClerkProvider>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
