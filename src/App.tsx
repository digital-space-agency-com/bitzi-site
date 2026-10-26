import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ArticlePage, ComparePage, FaqPage, GuidesPage, Home, PrivacyPage } from "./components/Pages";
import { pageByPath, pages, type Page } from "./seo/pages";

function render(page: Page) {
  switch (page.kind) {
    case "home": return <Home page={page} />;
    case "faq": return <FaqPage page={page} />;
    case "privacy": return <PrivacyPage page={page} />;
    case "compare": return <ComparePage />;
    case "guides": return <GuidesPage />;
    case "article": return <ArticlePage page={page} />;
  }
}

function NotFound() {
  return (
    <main className="wrap">
      <h1>Page not found</h1>
      <p><a href="/">Back to Bitzi</a></p>
    </main>
  );
}

export function AppShell() {
  const { pathname } = useLocation();
  const norm = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const page = pageByPath(norm) ?? pageByPath(norm + "/");
  return (
    <Routes>
      {pages.map((p) => (
        <Route key={p.path} path={p.path} element={<Layout page={p}>{render(p)}</Layout>} />
      ))}
      <Route path="*" element={page ? <Layout page={page}>{render(page)}</Layout> : <NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
