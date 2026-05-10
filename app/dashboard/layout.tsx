"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  LayoutDashboard,
  ShoppingBag,
  BookOpen,
  NotebookPen,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      label: "Dashboard",
      href: ["/dashboard"],
      icon: LayoutDashboard,
    },
    {
      label: "Order",
      href: ["/dashboard/order"],
      icon: ShoppingBag,
    },
    {
      label: "Manage Course",
      href: ["/dashboard/courses", "/dashboard/playlist/:id"],
      icon: BookOpen,
    },
    {
      label: "Notes",
      href: ["/dashboard/notes"],
      icon: NotebookPen,
    },
  ];

  const handleLogout = async () => {};

  return (
    <div className="flex h-screen gap-4 overflow-hidden bg-slate-100 p-2">
      {/* Sidebar */}
      <TooltipProvider delayDuration={0}>
        <aside
          className={cn(
            "sticky top-0 flex flex-col rounded-3xl bg-linear-to-b from-slate-700 via-slate-900 to-black text-white shadow-2xl transition-all duration-300",
            "h-[calc(100vh-16px)]",
            collapsed ? "w-20" : "w-72",
          )}
        >
          {/* Toggle Button */}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="absolute top-5 -right-3 z-50 rounded-full bg-blue-600 p-2 text-white shadow-lg transition hover:bg-blue-700 cursor-pointer"
          >
            {collapsed ? (
              <PanelLeftOpen size={18} />
            ) : (
              <PanelLeftClose size={18} />
            )}
          </button>

          {/* Logo Section */}
          <div className="border-b border-white/10 p-6">
            {!collapsed ? (
              <h1 className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-2xl font-bold text-transparent">
                Student Panel
              </h1>
            ) : (
              <h1 className="text-center text-2xl font-bold text-primary">S</h1>
            )}
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-3 overflow-y-auto p-4">
            {menuItems.map((item) => {
              const Icon = item.icon;

              const isActive = item.href.some((path) => {
                if (path.includes("/:id")) {
                  return pathname.startsWith(path.split("/:id")[0]);
                }
                return pathname === path;
              });

              const linkContent = (
                <Link
                  href={item.href[0]}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200",
                    isActive
                      ? "icon-gradient text-white shadow-lg"
                      : "text-gray-300 hover:bg-white/10 hover:text-white",
                  )}
                >
                  <Icon size={18} />

                  {!collapsed && (
                    <span className="text-xs font-medium">{item.label}</span>
                  )}
                </Link>
              );

              if (!collapsed) {
                return <div key={item.label}>{linkContent}</div>;
              }

              return (
                <Tooltip key={item.label}>
                  <TooltipTrigger asChild>{linkContent}</TooltipTrigger>

                  <TooltipContent
                    side="right"
                    sideOffset={10}
                    className="border-slate-800 bg-black text-white"
                  >
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </nav>

          {/* Logout Section */}
          <div className="border-t border-white/10 p-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 transition-all hover:bg-red-500/20 hover:text-red-300 cursor-pointer text-xs"
                >
                  <LogOut size={18} />
                  {!collapsed && <span>Logout</span>}
                </button>
              </TooltipTrigger>
              {collapsed && (
                <TooltipContent
                  side="right"
                  sideOffset={10}
                  className="bg-black text-white border-slate-800"
                >
                  Logout
                </TooltipContent>
              )}
            </Tooltip>
          </div>
        </aside>
      </TooltipProvider>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-y-auto rounded-3xl bg-red-500">
        <div className="min-h-full bg-linear-to-b from-slate-700 via-slate-900 to-black p-10 text-white shadow-xl">
          {children}
        </div>
      </main>
    </div>
  );
}
