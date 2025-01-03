"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { getAlertDialogDescription } from "../utils/getAlertDialogDescription";
import { updateFulfillmentStatus } from "../utils/updateStatus";
import { Preorder } from "./columns";

interface ChangeStatusDialogProps {
  preorder: Preorder;
  isOpen: boolean;
  onClose: () => void;
}

export const ChangeStatusDialog: React.FC<ChangeStatusDialogProps> = ({
  preorder,
  isOpen,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState("");
  const isInputValid = inputValue.toLowerCase() === "change status";

  const handleConfirm = async () => {
    await updateFulfillmentStatus(preorder.id, preorder.fulfilled, preorder.pending);
    onClose(); // Close the dialog after confirmation
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {getAlertDialogDescription(preorder)}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="py-4">
          <Input
            placeholder="Type 'change status' to confirm"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={!isInputValid}
            onClick={handleConfirm}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};