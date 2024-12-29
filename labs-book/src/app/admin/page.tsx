"use client";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "../globals.css";
import PreorderList from "./components/preorderList";

export default function Admin() {
  return (
    <div>
        <div>
            <ClerkProvider>
            <html lang="en">
            <body>
                <SignedOut>
                <SignInButton />
                </SignedOut>
                <SignedIn>
                <UserButton />
                </SignedIn>
            </body>
            </html>
        </ClerkProvider>
        </div>
      <PreorderList />
    </div>
  );
}
