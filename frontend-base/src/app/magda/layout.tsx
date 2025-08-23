import { Navigator, UpperNavigator } from "@/components/Navigator/Index";

export default function MagdaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#EDEDF4]">
      <UpperNavigator />
      <main className="p-6">{children}</main>
      <Navigator />
    </div>
  );
}
