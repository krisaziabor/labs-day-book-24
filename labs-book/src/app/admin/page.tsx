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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(`/admin/unsent/api`, setunsentData, setLoading);
    fetchData(`/admin/sent/api`, setsentData, setLoading);
    fetchData(`/admin/pending/api`, setpendingData, setLoading);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-4xl mx-auto">
      <Tabs
      defaultValue="not-done"
      className="container py mx-auto items-center"
      >
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
