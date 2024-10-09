import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/theme-utils";
import { ColorModeScript } from "@chakra-ui/color-mode";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { SocketContextProvider } from "./context/SocketContext.jsx";

// Chakra UI initailisation start->
const styles = {
  global: (props) => ({
    body: {
      color: mode("#2d3748", "#e2e8f0")(props),
      bg: mode("#ffffff", "#1a1b26")(props),
      backgroundImage: mode(
        "radial-gradient(#d1d5db 0.75px, transparent 0.75px)",
        "radial-gradient(#404040 0.75px, transparent 0.75px)"
      )(props),
      backgroundSize: "16px 16px",
      backgroundPosition: "0 0",
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  brand: {
    50: "#f5f3ff",
    100: "#ede9fe",
    200: "#ddd6fe",
    300: "#c4b5fd",
    400: "#a78bfa",
    500: "#8b5cf6",
    600: "#7c3aed",
    700: "#6d28d9",
    800: "#5b21b6",
    900: "#4c1d95",
  },
  gray: {
    50: "#f8fafc",
    100: "#f0f0f5",
    200: "#e2e8f0",
    300: "#cbd5e0",
    400: "#a0aec0",
    500: "#718096",
    600: "#4a5568",
    700: "#2d3748",
    800: "#1a1b26",
    900: "#171923",
  },
  accent: {
    light: "#7aa2f7", // Soft blue
    dark: "#bb9af7", // Soft purple
  },
  text: {
    light: "#2d3748", // Dark gray for light mode
    dark: "#e2e8f0", // Light gray for dark mode
  },
};

const theme = extendTheme({ config, styles, colors });
// Chakra UI initialisation end <-

createRoot(document.getElementById("root")).render(
  // React StrictMode renders every component twice on development
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <SocketContextProvider>
            <App />
          </SocketContextProvider>
        </ChakraProvider>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);
