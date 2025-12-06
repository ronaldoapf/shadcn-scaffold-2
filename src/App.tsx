import { ThemeProvider } from "./contexts/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <h1>Hello World</h1>
    </ThemeProvider>
  )
}