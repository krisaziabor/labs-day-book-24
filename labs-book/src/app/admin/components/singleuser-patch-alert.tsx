import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Preorder } from "./columns";
import "../../globals.css";

export function SingleUserPatchAlert({ preorder }: { preorder: Preorder }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide the alert after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (!isVisible) return null; // Render nothing if the alert is not visible

  return (
    <Alert>
      <AlertTitle>{preorder.first_name}&apos;s order has been updated!</AlertTitle>
      <AlertDescription>
        Page has been refreshed to reflect the changes.
      </AlertDescription>
    </Alert>
  );
}