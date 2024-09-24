import { Button, Container } from "@chakra-ui/react";
import { Routes } from "react-router-dom";

function App() {
  return (
    <Container maxW="620px">
      <Routes>
        <Route path = "/:username" element={<UserPage />}
      </Routes>
    </Container>
  );
}

export default App;
