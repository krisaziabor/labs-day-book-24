"use client";

import React, { useState } from "react";

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

import {
  Inbox,
  RotateCcw,
  CircleDotDashed,
  CircleCheck,
  UsersRound,
  UserRound,
  Layers,
  Heart,
  House,
  NotebookPen,
  BadgeDollarSign,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { VerifyPaymentsDialog } from "./group-actions/verify-payments";

// Menu items.

const homeItem = [
  {
    title: "Home",
    url: "/admin",
    icon: House,
  },
];

const docItems = [
  {
    title: "Workflow Introduction",
    url: "docs/workflow",
    icon: Layers,
  },
  {
    title: "Individual User Actions",
    url: "docs/user-actions",
    icon: UserRound,
  },
  {
    title: "Group Actions",
    url: "docs/group-actions",
    icon: UsersRound,
  },
  {
    title: "Colophon",
    url: "docs/colophon",
    icon: Heart,
  },
  {
    title: "Designing the Dashboard",
    url: "admin/docs/design",
    icon: NotebookPen,
  },
];

const groupActions = [
  {
    title: "Verify Payments",
    action: "verifyPayments",
    icon: BadgeDollarSign,
  },
  {
    title: "Mark as Pending",
    action: "#",
    icon: CircleDotDashed,
  },
  {
    title: "Mark as Confirmed",
    action: "#",
    icon: CircleCheck,
  },
  {
    title: "Mark as Unsent",
    action: "#",
    icon: RotateCcw,
  },
  {
    title: "Email Customers",
    action: "#",
    icon: Inbox,
  },
];

export function AppSidebar() {
  const [isVerifyDialogOpen, setIsVerifyDialogOpen] = useState(false);

  const handleActionClick = (action: string) => {
    if (action === "verifyPayments") {
      setIsVerifyDialogOpen(true);
    }
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-bold py-1">
            DAY Book 2024 Admin Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {homeItem.map((item) => (
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
          <SidebarGroupLabel>Group Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {groupActions.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleActionClick(item.action)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Documentation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {docItems.map((item) => (
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
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Separator />
            <p className="text-xs text-muted-foreground rounded-md px-2 py-2">
              Hey! Glad you&apos;re here :) Let&apos;s send out some books!
            </p>
            <p className="text-xs text-muted-foreground rounded-md py-2 px-2">
              This is a confidential tool designed for the DAY Book 2024. As it
              is meant for internal use only, please do not give anyone outside
              the team account access.
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
      <VerifyPaymentsDialog
        isOpen={isVerifyDialogOpen}
        onClose={() => setIsVerifyDialogOpen(false)}
      />
    </Sidebar>
  );
}
