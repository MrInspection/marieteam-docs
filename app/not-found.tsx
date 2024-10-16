import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";

export default function NotFound() {
  return (
      <main className="flex-grow flex items-center justify-center h-screen ">
          <div className="container mx-auto px-4">
              <div className="max-w-md mx-auto text-center">
                  <div className="text-sm mb-4">404</div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                      Page Not Found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                      Sorry, we couldn&apos;t find the page you&apos;re looking for.
                      This is perhaps a temporary issue, so please try again later.
                  </p>
                  <Link href="/" className={cn(buttonVariants())}>
                      Go back home
                  </Link>
              </div>
          </div>
      </main>
  );
}
