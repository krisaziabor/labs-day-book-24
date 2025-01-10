"use client";

import React, { useState, useEffect } from "react";
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
import { getAlertDialogGroupDescription } from "../../utils/getAlertDialogGroupDescription";
import { updateFulfillmentStatus } from "../../utils/updateStatus";
// import { sendEmail } from "../../utils/sendEmail";
import { useSelectedRows } from "../selected-rows-provider";

interface ChangeStatusDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChangeStatusesDialog: React.FC<ChangeStatusDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const { selectedRows } = useSelectedRows();
  const [rowsToProcess, setRowsToProcess] = useState(selectedRows);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Update rowsToProcess when the dialog is opened
    if (isOpen) {
      setRowsToProcess([...selectedRows]); // Clone to ensure latest state
    }
  }, [isOpen, selectedRows]);

  const isInputValid = inputValue.toLowerCase() === "change status";

  const handleConfirm = async () => {
    for (const row of rowsToProcess) {
      const preorder = row.original;
      await updateFulfillmentStatus(
        preorder.id,
        preorder.fulfilled,
        preorder.pending
      );
      // await sendEmail(preorder.email, preorder.first_name);
    }
    onClose(); // Close the dialog after confirmation
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {rowsToProcess.length > 0
              ? `Update status for ${rowsToProcess.length} customer(s)`
              : "No customers selected"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {rowsToProcess.length > 0
              ? getAlertDialogGroupDescription(rowsToProcess[0].original)
              : "Please select customers to give status updates to before proceeding."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        {rowsToProcess.length > 0 && (
          <div className="py-4">
            <Input
              placeholder="Type 'change status' to confirm"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        )}
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          {rowsToProcess.length > 0 && (<AlertDialogAction disabled={!isInputValid} onClick={handleConfirm}>
            Confirm
          </AlertDialogAction>)}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
