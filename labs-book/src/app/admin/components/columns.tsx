"use client";
import React, { useState } from "react";

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ChangeStatusDialog } from "./change-status";
import { VerifyPaymentDialog } from "./verify-payment";

export type Preorder = {
    id: number;
    first_name: string;
    last_name: string;
    college: string;
    payment_method: string;
    pay_details: string | null;
    created_at: string;
    email: string;
    fulfilled: boolean;
    pending: boolean;
    verified: boolean;
};


function ActionCell({ preorder }: { preorder: Preorder }) {
  const [isChangeDialogOpen, setIsChangeDialogOpen] = useState(false);
  const [isVerifyDialogOpen, setIsVerifyDialogOpen] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          disabled={preorder.verified}
          onClick={(e) => {
            e.preventDefault(); // Prevent DropdownMenu from closing
            setIsVerifyDialogOpen(true);
          }}
        >
          Verify/flag payment
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={!preorder.verified}
          onClick={(e) => {
            e.preventDefault(); // Prevent DropdownMenu from closing
            setIsChangeDialogOpen(true);
          }}
        >
          Change fulfillment status
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(preorder.email ?? "")}
        >
          Copy customer email address
        </DropdownMenuItem>
      </DropdownMenuContent>
      <ChangeStatusDialog
          preorder={preorder}
          isOpen={isChangeDialogOpen}
          onClose={() => setIsChangeDialogOpen(false)}
          />
      <VerifyPaymentDialog
          preorder={preorder}
          isOpen={isVerifyDialogOpen}
          onClose={() => setIsVerifyDialogOpen(false)}
          />
    </DropdownMenu>
  );
}



export const columns: ColumnDef<Preorder>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="mr-2"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="mr-2"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
          className="p-0 border-0 hover:bg-transparent"
        >
          Order date
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const preorder = row.original;
      const date = new Date(preorder.created_at);
      return <div>{date.toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "first_name",
    header: "First name",
  },
  {
    accessorKey: "last_name",
    header: "Last name",
  },
  {
    accessorKey: "college",
    header: "Residential college",
  },
  {
    accessorKey: "payment_method",
    header: "Payment method",
  },
  {
    accessorKey: "pay_details",
    header: "Username/phone number",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const preorder = row.original;

      return <ActionCell preorder={preorder} />;
    },
  },
];
