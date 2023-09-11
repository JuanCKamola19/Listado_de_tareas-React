import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: props.colorMode === "dark" ? "gray.800" : "white",
                color: props.colorMode === "dark" ? "white" : "gray.800",
            },
        }),
    },
});

export default Theme;