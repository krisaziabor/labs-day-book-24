"use client";

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Preorder = {
    id: number;
    first_name: string;
    last_name: string;
    college: string;
    payment_method: string;
    pay_details: string | null;
    created_at: string;
    fulfilled: boolean;
};

export const columns: ColumnDef<Preorder>[] = [
    {
        accessorKey: "fulfilled",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
                    >
                        Status
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
            )
        },
        cell: ({ row }) => {
            const preorder = row.original
            return <div>{preorder.fulfilled ? "Fulfilled" : "Not fulfilled"}</div>
        }
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
        accessorKey: "created_at",
        header: () => <div>Order date</div>,
        cell: ({ row }) => {
            const preorder = row.original
            const date = new Date(preorder.created_at)
            return <div>{date.toLocaleDateString()}</div>
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const preorder = row.original
     
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
                  onClick={() => navigator.clipboard.writeText(preorder.pay_details ?? "")}
                >
                  Copy username/phone number
                </DropdownMenuItem>
                <DropdownMenuItem>Mark order as fulfilled</DropdownMenuItem>
                <DropdownMenuItem>Email customer</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
]