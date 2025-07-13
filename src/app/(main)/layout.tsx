import TokenChecker from "./TokenChecker";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#eee",
          padding: "1rem",
        }}
      >
        Header
      </header>

      <main
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TokenChecker>{children}</TokenChecker>
      </main>

      <footer
        style={{
          position: "sticky",
          bottom: 0,
          backgroundColor: "#eee",
          padding: "1rem",
        }}
      >
        Footer
      </footer>
    </div>
  );
}
