import { LegalPageLayout } from "../components/legal/LegalPageLayout";
import { TermsOfServiceContent } from "../components/legal/TermsOfServiceContent";

export function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Service">
      <TermsOfServiceContent />
    </LegalPageLayout>
  );
}
