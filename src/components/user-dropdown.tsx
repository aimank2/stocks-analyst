"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import NavItems from "./nav-items";

const UserDropdown = () => {
  const router = useRouter();
  const handleSignOut = () => {
    router.push("/sign-in");
  };
  const user = { name: "Aiman", email: "kandakjiai@gmail.com" };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="flex flex-center gap-3 hover:bg-yellow-500 text-gray-400"
        >
          <Avatar className="size-8">
            <AvatarFallback className="bg-yellow-500 font-bold text-yellow-900 text-sm">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <p className="font-medium text-gray-400 text-base">{user.name}</p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="text-gray-400">
        <DropdownMenuLabel>
          <div className="relative flex items-center gap-3 py-2">
            <Avatar className="size-8">
              <AvatarFallback className="bg-yellow-500 font-bold text-yellow-900 text-sm">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="font-medium text-gray-400 text-base">
                {user.name}
              </span>
              <span className="font-medium text-gray-500 text-base">
                {user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <nav className="sm:hidden">
          <NavItems />
        </nav>
        <DropdownMenuSeparator className="sm:block bg-gray-600 hodden" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="focus:bg-transparent font-medium text-gray-100 focus:text-yellow-500 transition-colors cursor-pointer text0md"
        >
          <LogOut className="mr-2 size-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
