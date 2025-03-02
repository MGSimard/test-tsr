import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <main>
      <h1>Main</h1>
      <ul>
        <li>Outlet as index.tsx</li>
        <li>autoCodeSplitting true</li>
        <li>RouterProvider defaultPendingMinMs untouched (500 default)</li>
        <li>Setting defaultPendingMinMs to 0 would render in ~250-300ms</li>
        <li>Basically, disable TanStackRouteVite autoCodeSplitting in vite.config.js if you don't need it</li>
        <li>
          In a perfect world some turbogenius makes it so the immediately requested route on load isn't lazy-loaded at
          all even with autoCodeSplitting enabled
        </li>
      </ul>
    </main>
  );
}
