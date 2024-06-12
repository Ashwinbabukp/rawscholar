import { FrappeProvider } from "frappe-react-sdk";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Check from "./pages/Check";

function App() {
  return (
    <FrappeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hi</h1>} />
          <Route path="/check" element={<Check />} />
        </Routes>
      </BrowserRouter>
    </FrappeProvider>
  );
}

export default App;
