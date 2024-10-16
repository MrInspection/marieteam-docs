import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { HeartIcon, TriangleIcon } from "lucide-react";

export function SiteFooter() {
  return (
      <footer className="py-6 md:px-8 md:py-0 border-t-2">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
              <p className="text-balance text-center text-sm font-medium leading-loose text-muted-foreground md:text-left">
                  ©️ {new Date().getFullYear()} Spectron Labs, All rights reserved. Built by <a
                  href={""}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium underline underline-offset-4"
              >
                  Moussa
              </a>.
              </p>
          </div>
      </footer>
  );
}

export function FooterButtons() {
    return (
        <>
            <Link
                href="https://vercel.com/templates/next.js/documentation-template"
                className={buttonVariants({variant: "outline", size: "sm"})}
            >
                <TriangleIcon className="h-[0.8rem] w-4 mr-2 text-primary fill-current"/>
                Deploy
            </Link>
            <Link
                href="https://github.com/sponsors/nisabmohd"
                className={buttonVariants({variant: "outline", size: "sm"})}
            >
                <HeartIcon className="h-4 w-4 mr-2 text-red-600 fill-current"/>
                Sponsor
            </Link>
        </>
    );
}
