import { ModeToggle } from "@/components/theme-toggle";
import {Aperture} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import SearchBar from "./search-bar";
import Anchor from "./anchor";
import { SheetLeftbar } from "./docs-sidebar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import {GitHubLogoIcon} from "@radix-ui/react-icons";

export const NAVLINKS = [
  {
    title: "Docs",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "MarieTeam",
    href: "https://marieteam.vercel.app",
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-y bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center max-w-screen-2xl justify-between max-md:px-2 w-full">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-4">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <SearchBar />
            <div className="flex ml-2.5 sm:ml-0">
              <Link
                href="https://github.com/MrInspection"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <GitHubLogoIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Aperture className="size-5" />
      <h2 className="font-bold">Spectron</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary md:font-semibold font-medium"
            absolute
            className="flex items-center gap-1 dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
