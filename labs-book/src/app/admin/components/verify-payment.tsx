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
import { updateVerificationStatus } from "../utils/updateVerification";
import { Preorder } from "./columns";
import { sendFlagEmail } from "../utils/sendEmail";


interface ChangeStatusDialogProps {
  preorder: Preorder;
  isOpen: boolean;
  onClose: () => void;
}

export const VerifyPaymentDialog: React.FC<ChangeStatusDialogProps> = ({
  preorder,
  isOpen,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [flaggingDescription, setFlaggingDescription] = useState("");
  const isInputValid = inputValue.toLowerCase() === "update status";
  const isFlaggingValid = flaggingDescription.trim() !== "";

  const handleConfirm = async () => {
    const wasPreviouslyChecked = preorder.verified;
    let route = "";
    if (wasPreviouslyChecked === false) {
      route = "awaiting-user-action";
    } else {
      route = "awaiting-verification";
    }

    await updateVerificationStatus(preorder.id, 1, route);
    onClose(); // Close the dialog after confirmation
  };

  const handleRejection = async () => {
    const wasPreviouslyChecked = preorder.verified;
    let route = "";
    if (wasPreviouslyChecked === false) {
      route = "awaiting-user-action";
    } else {
      route = "awaiting-verification";
    }

    await updateVerificationStatus(preorder.id, 0, route);
    await sendFlagEmail(preorder.email, preorder.first_name, flaggingDescription);
    onClose(); // Close the dialog after confirmation
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Verify or flag {preorder.first_name}&apos;s payment details
          </AlertDialogTitle>
          <AlertDialogDescription>
            If at the time of checking the payment status, the payment can be verified, press &apos;Verify&apos;
            If not, press &apos;Flag&apos;. Flagging an order will send the
            customer an email asking them for further action listing the reason you provide below.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Specify reason for flagging"
            value={flaggingDescription}
            onChange={(e) => setFlaggingDescription(e.target.value)}
          />
          <Input
            placeholder="Type 'update status' to confirm"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={!isInputValid || !isFlaggingValid}
            onClick={handleRejection}
          >
            Flag
          </AlertDialogAction>
          <AlertDialogAction disabled={!isInputValid} onClick={handleConfirm}>
            Yes
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
