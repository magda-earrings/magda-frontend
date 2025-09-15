export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-primary-100">
      <main className="min-h-screen">{children}</main>
    </div>
  );
}
