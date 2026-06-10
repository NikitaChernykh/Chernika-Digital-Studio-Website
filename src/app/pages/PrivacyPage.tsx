import { LegalPageLayout } from "../components/legal/LegalPageLayout";
import { PrivacyPolicyContent } from "../components/legal/PrivacyPolicyContent";

export function PrivacyPage() {
  return (
    <LegalPageLayout title="Chernika Digital Services Privacy Policy">
      <PrivacyPolicyContent />
    </LegalPageLayout>
  );
}
