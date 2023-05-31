import { Box } from "@chakra-ui/react";
import CounterAppTwo from "./components/CounterAppTwo";

export default function App() {
  return (
    <Box margin="1.2rem">
      <Box>APP-2</Box>
      <Box>
        <CounterAppTwo />
      </Box>
    </Box>
  );
}
