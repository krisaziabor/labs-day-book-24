import React from "react";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function NavMenu() {
    return(
        <NavigationMenu className="container py-10 mx-auto items-center">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Group actions</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="flex flex-col p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    Manage groups of pre-orders here.
                                  </div>
                                  <p className="text-sm leading-tight text-muted-forrground">
                                    Here you can manage multiple pre-orders at once. If you want to just manage one pre-order, you can do that using the ... menu on the right side of the table.
                                  </p>
                                </a>
                            </NavigationMenuLink>
                          </li>
                          <ListItem title="Update customers">
                            Send select customers an email message if there is a delay or any update you want to send them.
                          </ListItem>
                          <ListItem title="Mark as pending">
                            Mark a pre-order as pending if you they are next in line to be sent out. This sends them an automated message you can customize.
                          </ListItem>
                          <ListItem title="Mark as sent">
                            Mark a pre-order as sent if you have sent out the book. Only do this once the customer has received their book.
                          </ListItem>
                          <ListItem title="Mark as unsent">
                            Mark a pre-order as unsent if you have not sent out the book yet. This will remove them from the sent list.
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"