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



const Admin = () => {
  const [notDoneData, setNotDoneData] = useState<Preorder[]>([]);
  const [DoneData, setDoneData] = useState<Preorder[]>([]);
  const [loading, setLoading] = useState(true);


  const getNotDoneData = async () => {
    try {
      const response = await fetch(`/admin/not-done/api`);
      const fetchedData = await response.json();
      setNotDoneData(fetchedData);
    } catch (error) {
      console.error("Error fetching preorders:", error);
    } finally {
      setLoading(false);
    }
  };


  const getDoneData = async () => {
    try {
      const response = await fetch(`/admin/done/api`);
      const fetchedData = await response.json();
      setDoneData(fetchedData);
    } catch (error) {
      console.error("Error fetching preorders:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getNotDoneData();
    getDoneData();
  }, []);


  return (
    <div>
      <div>
        <ClerkProvider>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <h1 className="container py-10 mx-auto items-center">Hey! Glad you&apos;re here :) Let&apos;s send out some books! </h1>
            <h2 className="container py-10 mx-auto items-center">This administrator dashboard displays all the pre-order requests from the main page. Here, you can view all records, find a customer&apos;s email address, send them an automated confirmation, and officially mark their order as fulfilled. </h2>
          </div>
        </ClerkProvider>
      </div>
      <div>
        <Tabs defaultValue="account" className="container py-10 mx-auto items-center">
          <TabsList>
            <TabsTrigger value="not-done">Unfulfilled</TabsTrigger>
            <TabsTrigger value="done">Fulfilled</TabsTrigger>
          </TabsList>
          <TabsContent value="not-done">
              <div className="container mx-auto py-10">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <DataTable columns={columns} data={notDoneData} />
              )}
            </div>
          </TabsContent>
          <TabsContent value="done">
          <div className="container mx-auto py-10">
              {loading ? (
                <p>Loading...</p>
              ) : (
                <DataTable columns={columns} data={DoneData} />
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;