import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/terms-of-service" element={<TermsPage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
    </Routes>
  );
}
