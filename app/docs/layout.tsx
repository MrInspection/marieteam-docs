import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-10 container">
      <DocsSidebar key="leftbar" />
      <div className="flex-[5.25]">{children}</div>
    </div>
  );
}
