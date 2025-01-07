import { cookies } from "next/headers";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { SelectedRowsProvider } from "./components/selected-rows-provider";
import { ClerkProvider } from "@clerk/nextjs";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <div>
      <ClerkProvider>
        <SelectedRowsProvider>
          <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar currentTab="defaultTab" />
            <main>{children}</main>
          </SidebarProvider>
        </SelectedRowsProvider>
      </ClerkProvider>
    </div>
  );
}
