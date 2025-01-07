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
      <div className="block md:hidden lg:hidden xl:hidden">
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="text-center">
            <p className="text-xl font-semibold pb-2">DAY BOOK 2024 ADMIN DASHBOARD</p>
            <p className="text-xl font-semibold pb-2">FOR INTERNAL USE @ DESIGN AT YALE</p>
            <p className="text-sm">This website is for desktop use only.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
