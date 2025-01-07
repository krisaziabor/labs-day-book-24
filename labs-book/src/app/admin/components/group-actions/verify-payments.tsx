"use client";

import React, { useEffect, useState } from "react";
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
import { updateVerificationStatus } from "../../utils/updateVerification";
import { useSelectedRows } from "../selected-rows-provider";

export const VerifyPaymentsDialog: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { selectedRows } = useSelectedRows();
  const [rowsToProcess, setRowsToProcess] = useState(selectedRows);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Update rowsToProcess when the dialog is opened
    if (isOpen) {
      setRowsToProcess([...selectedRows]); // Clone to ensure latest state
    }
  }, [isOpen, selectedRows]);

  const isInputValid = inputValue.toLowerCase() === "verify payment";

  const handleConfirm = async () => {
    for (const row of rowsToProcess) {
      const preorder = row.original;
      const wasPreviouslyChecked = preorder.verified;
      const route = wasPreviouslyChecked ? "awaiting-verification" : "awaiting-user-action";

      await updateVerificationStatus(preorder.id, 1, route);
    }
    onClose();
  };

  const handleRejection = async () => {
    for (const row of rowsToProcess) {
      const preorder = row.original;
      const wasPreviouslyChecked = preorder.verified;
      const route = wasPreviouslyChecked ? "awaiting-verification" : "awaiting-user-action";

      await updateVerificationStatus(preorder.id, 0, route);
    }
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {rowsToProcess.length > 0
              ? `Verify or flag ${rowsToProcess.length} payment(s)`
              : "No payments selected"}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {rowsToProcess.length > 0
              ? "If the payment was not verified, click 'Flag'. If the payment was verified, click 'Yes'."
              : "Please select payments to verify or flag before proceeding."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        {rowsToProcess.length > 0 && (
          <div className="py-4">
            <Input
              placeholder="Type 'verify payment' to confirm"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        )}
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          {rowsToProcess.length > 0 && (
            <>
              <AlertDialogAction
                disabled={!isInputValid}
                onClick={handleRejection}
              >
                Flag
              </AlertDialogAction>
              <AlertDialogAction
                disabled={!isInputValid}
                onClick={handleConfirm}
              >
                Yes
              </AlertDialogAction>
            </>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};