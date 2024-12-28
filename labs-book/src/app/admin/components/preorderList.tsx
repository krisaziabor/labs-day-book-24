import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import React, { useEffect, useState } from "react";
  
  interface Preorder {
    id: number;
    first_name: string;
    last_name: string;
    college: string;
    payment_method: string;
    username: string | null;
    phone_number: string | null;
    created_at: string;
  }
  
  const PreorderList = () => {
    const [preorders, setPreorders] = useState<Preorder[]>([]);
  
    const displayPreorders = async () => {
      try {
        const response = await fetch(`/admin/api`);
        const data = await response.json();
        setPreorders(data);
      } catch (error) {
        console.error("Error fetching preorders:", error);
      }
    };
  
    useEffect(() => {
      displayPreorders();
    }, []);
  
    return (
      <div>
        <div>
          <h1>DAY Book 2024 Admin Page</h1>
          <h2>Preorders</h2>
        </div>
        <br />
        <div>
          <Table>
            <TableCaption>A list of our pre-orders.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">#</TableHead>
                <TableHead>Order date</TableHead>
                <TableHead>First name</TableHead>
                <TableHead>Last name</TableHead>
                <TableHead>Residential college</TableHead>
                <TableHead>Payment method</TableHead>
                <TableHead>Username/phone number</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {preorders.map((preorder) => (
                <TableRow key={preorder.id}>
                  <TableCell className="font-medium">{preorder.id}</TableCell>
                  <TableCell>
                    {new Date(preorder.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{preorder.first_name}</TableCell>
                  <TableCell>{preorder.last_name}</TableCell>
                  <TableCell>{preorder.college}</TableCell>
                  <TableCell>{preorder.payment_method}</TableCell>
                  <TableCell>
                    {preorder.username || preorder.phone_number || "N/A"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };
  
  export default PreorderList;