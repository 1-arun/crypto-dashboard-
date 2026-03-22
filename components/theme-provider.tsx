"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface CustomThemeProviderProps extends React.ComponentProps<
  typeof NextThemesProvider
> {
  children: React.ReactNode;
}

export function ThemeProvider({
  children,
  ...props
}: CustomThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
