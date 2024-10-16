// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true;
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      { title: "Organisation", href: "/organization" },
      {
        title: "Installation",
        href: "/installation",
        items: [
          { title: "Laravel", href: "/laravel" },
          { title: "React", href: "/react" },
          { title: "Gatsby", href: "/gatsby" },
        ],
      },
    ],
  },
  {
    title: "MarieTeam Website",
    href: "/marieteam-web",
    noLink: true,
    items: [
      { title: "getSession", href: "/lorem-ipsum" },
    ],
  },
  {
    title: "MarieTeam Client",
    href: "/marieteam-client",
    noLink: true,
    items: [
      { title: "getSession", href: "/lorem-ipsum" },
    ],
  },
  {
    title: "MarieTeam Mobile",
    href: "/marieteam-mobile",
    noLink: true,
    items: [
      { title: "Introduction", href: "/lorem-ipsum" },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
