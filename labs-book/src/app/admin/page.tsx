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

const Admin = () => {
  const [data, setData] = useState<Preorder[]>([]);
  const [loading, setLoading] = useState(true);


  const getData = async () => {
    try {
      const response = await fetch(`/admin/api`);
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching preorders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const { isLoaded, isSignedIn, user } = useUser()

  //   if (!isLoaded || !isSignedIn) {
  //     return null
  //   }

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
            <h1 className="">Hey! Glad you&apos;re here :) Let&apos;s send out some books! </h1>
            <h2>This administrator dashboard displays all the pre-order requests from the main page. Here, you can view all records, find a customer&apos;s email address, send them an automated confirmation, and officially mark their order as fulfilled. </h2>
          </div>
        </ClerkProvider>
      </div>
      <div className="container mx-auto py-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <DataTable columns={columns} data={data} />
        )}
      </div>
    </div>
  );
};

export default Admin;