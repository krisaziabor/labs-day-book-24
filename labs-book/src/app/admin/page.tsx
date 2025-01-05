"use client";

import React, { useEffect, useState } from "react";
import "../globals.css";
import { Preorder, columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchData } from "./utils/fetchData";

const Admin = () => {
  const [unsentData, setunsentData] = useState<Preorder[]>([]);
  const [sentData, setsentData] = useState<Preorder[]>([]);
  const [pendingData, setpendingData] = useState<Preorder[]>([]);
  const [awaitingUserActionData, setawaitingUserActionData] = useState<Preorder[]>([]);
  const [awaitingVerificationData, setawaitingVerificationData] = useState<Preorder[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(`/admin/statuses/unsent/api`, setunsentData, setLoading);
    fetchData(`/admin/statuses/sent/api`, setsentData, setLoading);
    fetchData(`/admin/statuses/pending/api`, setpendingData, setLoading);
    fetchData(`/admin/statuses/awaiting-user-action/api`, setawaitingUserActionData, setLoading);
    fetchData(`/admin/statuses/awaiting-verification/api`, setawaitingVerificationData, setLoading);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen px-10 w-full">
      <div className="w-full max-w-4xl mx-auto">
      <Tabs
      defaultValue="not-done"
      className="container py mx-auto items-center"
      >
      <TabsList>
      <TabsTrigger value="verified?">Awaiting verification</TabsTrigger>
      <TabsTrigger value="unverified">Customer action required</TabsTrigger>
      <TabsTrigger value="not-done">Unsent</TabsTrigger>
      <TabsTrigger value="pending">Pending</TabsTrigger>
      <TabsTrigger value="done">Sent</TabsTrigger>
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
