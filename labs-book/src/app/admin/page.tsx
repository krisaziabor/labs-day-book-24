"use client";

import React, { useEffect, useState } from "react";
import "../globals.css";
import { Preorder, columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchData } from "./utils/fetchData";
import { AppSidebar } from "./components/app-sidebar";

const Admin = () => {
  const [unsentData, setunsentData] = useState<Preorder[]>([]);
  const [sentData, setsentData] = useState<Preorder[]>([]);
  const [pendingData, setpendingData] = useState<Preorder[]>([]);
  const [awaitingUserActionData, setawaitingUserActionData] = useState<
    Preorder[]
  >([]);
  const [awaitingVerificationData, setawaitingVerificationData] = useState<
    Preorder[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState<string>("verified?"); // Track the current tab

  useEffect(() => {
    fetchData(`/admin/statuses/unsent/api`, setunsentData, setLoading);
    fetchData(`/admin/statuses/sent/api`, setsentData, setLoading);
    fetchData(`/admin/statuses/pending/api`, setpendingData, setLoading);
    fetchData(
      `/admin/statuses/awaiting-user-action/api`,
      setawaitingUserActionData,
      setLoading
    );
    fetchData(
      `/admin/statuses/awaiting-verification/api`,
      setawaitingVerificationData,
      setLoading
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-2 py-4 mx-20 w-full">
      <AppSidebar currentTab={currentTab} /> {/* Pass current tab to sidebar */}
      <div className="w-full max-w-4xl mx-auto">
        <Tabs
          defaultValue="verified?"
          className="container py mx-auto items-center"
          onValueChange={(value) => setCurrentTab(value)} // Update tab state on change
        >
          <TabsList>
            <TabsTrigger value="verified?">
              {" "}
              ({awaitingVerificationData.length}) Awaiting verification
            </TabsTrigger>
            <TabsTrigger value="unverified">
              ({awaitingUserActionData.length}) Customer action required
            </TabsTrigger>
            <TabsTrigger value="not-done">
              {" "}
              ({unsentData.length}) Unsent
            </TabsTrigger>
            <TabsTrigger value="pending">
              ({pendingData.length}) Pending
            </TabsTrigger>
            <TabsTrigger value="done">({sentData.length}) Sent</TabsTrigger>
          </TabsList>
          <TabsContent value="verified?">
            <div className="container mx-auto">
              {loading ? (
                <Skeleton />
              ) : (
                <DataTable columns={columns} data={awaitingVerificationData} />
              )}
            </div>
          </TabsContent>
          <TabsContent value="unverified">
            <div className="container mx-auto">
              {loading ? (
                <Skeleton />
              ) : (
                <DataTable columns={columns} data={awaitingUserActionData} />
              )}
            </div>
          </TabsContent>
          <TabsContent value="not-done">
            <div className="container mx-auto">
              {loading ? (
                <Skeleton />
              ) : (
                <DataTable columns={columns} data={unsentData} />
              )}
            </div>
          </TabsContent>
          <TabsContent value="pending">
            <div className="container mx-auto">
              {loading ? (
                <Skeleton />
              ) : (
                <DataTable columns={columns} data={pendingData} />
              )}
            </div>
          </TabsContent>
          <TabsContent value="done">
            <div className="container mx-auto">
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
