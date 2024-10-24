import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar, Player } from "@/components/sections";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aurale",
  description: "A music streaming platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={cn("min-h-screen bg-dark-200 font-mono antialiased", fontSans.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="h-screen flex flex-col p-2 gap-1">
            <Navbar />
            <ResizablePanelGroup
              direction="horizontal"
              className="min-h-[200px] rounded-lg"
            >
              <ResizablePanel
                defaultSize={20}
                minSize={5}
                maxSize={30}
                className="hidden md:block"
              >
                <div className="flex h-full items-center justify-center mx-1 rounded-lg bg-dark-400">
                  <span className="font-semibold ">Menu</span>
                </div>
              </ResizablePanel>
              <ResizableHandle className="hover:bg-dark-500 my-4 w-[1px] hidden md:block cursor-grab" />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center mx-1 rounded-lg bg-dark-400">
                  <ScrollArea className="h-full w-full rounded-lg bg-dark-400">
                    {children}
                    <ScrollBar orientation="horizontal"/>
                  </ScrollArea>
                </div>
              </ResizablePanel>
              <ResizableHandle className="hover:bg-dark-500 my-4 w-[1px] hidden md:block" />
              <ResizablePanel
                defaultSize={20}
                maxSize={20}
                className="hidden md:block"
              >
                <div className="flex h-full items-center justify-center mx-1 rounded-lg bg-dark-400">
                  Sidebar
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
            <Player />
          </div>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
