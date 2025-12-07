import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./contexts/theme-provider";
import { AppRouter } from "./routes/app-router";
import { queryClient } from "./api/queryClient";

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <AppRouter />
      </QueryClientProvider>
    </ThemeProvider>
  )
}