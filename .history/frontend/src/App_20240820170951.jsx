import { Button, Container } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
//rafce
function App() {
  return (
    <Container maxW="620px">
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username" element={<UserPage />} />
      </Routes>
    </Container>
  );
}

export default App;
