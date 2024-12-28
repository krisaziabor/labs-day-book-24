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

const PreorderList = () => {
  const [greeting, setGreeting] = useState("");

  const displayPreorders = async () => {
    const response = await fetch(`/admin/api`);
    const text = await response.text();
    console.log(response)
    setGreeting(text);
  };

  useEffect(() => {
    displayPreorders();
  }, []);

  return (
    <div>
      <div>
        <h1>DAY Book 2024 Admin Page</h1>
        <h2>Preorders</h2>
        <p>{greeting}</p>
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
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>12/25/2024</TableCell>
              <TableCell>John</TableCell>
              <TableCell>Doe</TableCell>
              <TableCell>Benjamin Franklin</TableCell>
              <TableCell>Venmo</TableCell>
              <TableCell>johndoe</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PreorderList;
