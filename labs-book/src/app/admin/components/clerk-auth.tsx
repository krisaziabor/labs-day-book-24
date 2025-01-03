"use client";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";

export default function AuthWelcome() {
    return (
        <div>
        <ClerkProvider>
          <div className="container py-10 mx-auto items-center space-y-1">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <h1 className="text-sm font-medium leading-none">
              Hey! Glad you&apos;re here :) Let&apos;s send out some books!
            </h1>
            <h2 className="text-sm text-muted-foreground">
              This administrator dashboard displays all the pre-order requests
              from the main page. Here, you can view all records, find a
              customer&apos;s email address, send them an automated
              confirmation, and officially mark their order as fulfilled.
            </h2>
            <Separator />
          </div>
        </ClerkProvider>
      </div>
    )
}