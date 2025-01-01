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
import { Separator } from "@/components/ui/separator"




const Admin = () => {
  const [unsentData, setunsentData] = useState<Preorder[]>([]);
  const [sentData, setsentData] = useState<Preorder[]>([]);
  const [pendingData, setpendingData] = useState<Preorder[]>([]);
  const [loading, setLoading] = useState(true);


  const getunsentData = async () => {
    try {
      const response = await fetch(`/admin/unsent/api`);
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
      const response = await fetch(`/admin/sent/api`);
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
      const response = await fetch(`/admin/pending/api`);
      const fetchedData = await response.json();
      setpendingData(fetchedData);
    } catch (error) {
      console.error("Error fetching preorders:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getunsentData();
    getsentData();
    getpendingData();
  }, []);


  return (
    <div>
      <div>
        <ClerkProvider>
          <div className='container py-10 mx-auto items-center space-y-1'>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <h1 className="text-sm font-medium leading-none">Hey! Glad you&apos;re here :) Let&apos;s send out some books! </h1>
            <h2 className="text-sm text-muted-foreground">This administrator dashboard displays all the pre-order requests from the main page. Here, you can view all records, find a customer&apos;s email address, send them an automated confirmation, and officially mark their order as fulfilled. </h2>
            <Separator />
          </div>
        </ClerkProvider>
      </div>
      <div>
        <Tabs defaultValue="not-done" className="container py-10 mx-auto items-center">
          <TabsList>
            <TabsTrigger value="not-done">Unsent</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="done">Sent</TabsTrigger>
          </TabsList>
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
    </div>
  );
};

export default Admin;