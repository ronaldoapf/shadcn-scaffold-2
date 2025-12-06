import { ThemeProvider } from "./contexts/theme-provider";
import { AppRouter } from "./routes/app-router";

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AppRouter />
    </ThemeProvider>
  )
}