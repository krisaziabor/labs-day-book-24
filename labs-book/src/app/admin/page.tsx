"use client";

import React, { useEffect, useState } from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "../globals.css";
import { Preorder, columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Admin = () => {
  const [unsentData, setunsentData] = useState<Preorder[]>([]);
  const [sentData, setsentData] = useState<Preorder[]>([]);
  const [pendingData, setpendingData] = useState<Preorder[]>([]);
  const [loading, setLoading] = useState(true);

  const getunsentData = async () => {
    try {
      const response = await fetch(`/admin/unsent/api`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const fetchedData = await response.json();
      setunsentData(fetchedData);
    } catch (error) {
      console.error("Error fetching preorders:", error);
    } finally {
      setLoading(false);
    }
  };

  const getsentData = async () => {
    try {
      const response = await fetch(`/admin/sent/api`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const fetchedData = await response.json();
      setsentData(fetchedData);
    } catch (error) {
      console.error("Error fetching preorders:", error);
    } finally {
      setLoading(false);
    }
  };

  const getpendingData = async () => {
    try {
      const response = await fetch(`/admin/pending/api`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const fetchedData = await response.json();
      setpendingData(fetchedData);
    } catch (error) {
      console.error("Error fetching preorders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getunsentData();
    getsentData();
    getpendingData();
  }, []);

  return (
    <div>
      <div>
        <ClerkProvider>
          <div className="container py-10 mx-auto items-center space-y-1">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <h1 className="text-sm font-medium leading-none">
              Hey! Glad you&apos;re here :) Let&apos;s send out some books!{" "}
            </h1>
            <h2 className="text-sm text-muted-foreground">
              This administrator dashboard displays all the pre-order requests
              from the main page. Here, you can view all records, find a
              customer&apos;s email address, send them an automated
              confirmation, and officially mark their order as fulfilled.{" "}
            </h2>
            <Separator />
          </div>
        </ClerkProvider>
      </div>
      <div>
        <Tabs
          defaultValue="not-done"
          className="container py-10 mx-auto items-center"
        >
          <TabsList>
            <TabsTrigger value="not-done">Unsent</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="done">Sent</TabsTrigger>
          </TabsList>
          <NavigationMenu className="container py-10 mx-auto items-center">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Group actions</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Manage groups of pre-orders here.
                          </div>
                          <p className="text-sm leading-tight text-muted-forrground">
                            Here you can manage multiple pre-orders at once. If you want to just manage one pre-order, you can do that using the ... menu on the right side of the table.
                          </p>
                        </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem title="Update customers">
                    Send select customers an email message if there is a delay or any update you want to send them.
                  </ListItem>
                  <ListItem title="Mark as pending">
                    Mark a pre-order as pending if you they are next in line to be sent out. This sends them an automated message you can customize.
                  </ListItem>
                  <ListItem title="Mark as sent">
                    Mark a pre-order as sent if you have sent out the book. Only do this once the customer has received their book.
                  </ListItem>
                  <ListItem title="Mark as unsent">
                    Mark a pre-order as unsent if you have not sent out the book yet. This will remove them from the sent list.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
          <TabsContent value="not-done">
            <div className="container mx-auto py-10">
              {loading ? (
                <Skeleton />
              ) : (
                <DataTable columns={columns} data={unsentData} />
              )}
            </div>
          </TabsContent>
          <TabsContent value="pending">
            <div className="container mx-auto py-10">
              {loading ? (
                <Skeleton />
              ) : (
                <DataTable columns={columns} data={pendingData} />
              )}
            </div>
          </TabsContent>
          <TabsContent value="done">
            <div className="container mx-auto py-10">
              {loading ? (
                <Skeleton />
              ) : (
                <DataTable columns={columns} data={sentData} />
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div></div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Admin;
