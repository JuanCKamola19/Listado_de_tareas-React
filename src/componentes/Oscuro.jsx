import React from "react";
import { useColorMode, Button } from "@chakra-ui/react";

function YourComponent() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Modo Oscuro" : "Modo Claro"}
      </Button>
    </>
  );
}

export default YourComponent;