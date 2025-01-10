"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
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
  UsersRound,
  UserRound,
  Layers,
  Heart,
  House,
  BadgeDollarSign,
  CircleArrowRight,
  SendHorizonal,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { VerifyPaymentsDialog } from "./group-actions/verify-payments";
import { ChangeStatusesDialog } from "./group-actions/push-new-status";

// Menu items.
const homeItem = [{ title: "Home", url: "/admin", icon: House }];

const docItems = [
  { title: "Workflow Introduction", url: "/admin/docs/workflow", icon: Layers },
  {
    title: "Single User Actions",
    url: "/admin/docs/user-actions",
    icon: UserRound,
  },
  {
    title: "Group Actions",
    url: "/admin/docs/group-actions",
    icon: UsersRound,
  },
  {
    title: "Automated Emails",
    url: "/admin/docs/emails",
    icon: SendHorizonal,
  },
  { title: "Colophon", url: "/admin/docs/colophon", icon: Heart },
];

const groupActions = [
  { title: "Verify Payments", action: "verifyPayments", icon: BadgeDollarSign },
  { title: "Push New Status", action: "changeStatus", icon: CircleArrowRight },
  { title: "Email Customers", action: "#", icon: Inbox },
];

interface AppSidebarProps {
  currentTab: string;
}

export function AppSidebar({ currentTab }: AppSidebarProps) {
  const [isVerifyDialogOpen, setIsVerifyDialogOpen] = useState(false);
  const [isChangeStatusDialogOpen, setIsChangeStatusDialogOpen] =
    useState(false);

  const [isDocsPage, setIsDocsPage] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDocsPage(window.location.pathname.includes("/docs"));
    }
  }, []);

  const handleActionClick = (action: string) => {
    if (action === "verifyPayments") {
      setIsVerifyDialogOpen(true);
    } else if (action === "changeStatus") {
      setIsChangeStatusDialogOpen(true);
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
                    disabled={
                      isDocsPage ||
                      (item.action === "changeStatus" &&
                        (currentTab === "verified?" ||
                          currentTab === "unverified")) ||
                      (item.action === "verifyPayments" &&
                        (currentTab == "not-done" ||
                          currentTab == "pending" ||
                          currentTab == "done"))
                    }
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
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
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
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <VerifyPaymentsDialog
        isOpen={isVerifyDialogOpen}
        onClose={() => setIsVerifyDialogOpen(false)}
      />
      <ChangeStatusesDialog
        isOpen={isChangeStatusDialogOpen}
        onClose={() => setIsChangeStatusDialogOpen(false)}
      />
    </Sidebar>
  );
}
