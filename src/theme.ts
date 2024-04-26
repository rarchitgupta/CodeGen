import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
      heading: 'var(--font-mono)',
      body: 'var(--font-mono)',
    },
    colors: {
        main: {
            background: "#222831",
            operations: "#15181F"
        },
        text: {
            primary: "#FFFFFF"
        }
    }
});