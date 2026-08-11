import { DocView } from "../DocView";
import { getDoc } from "../docsContent";

export default function PersonalDataConsentPage() {
  const doc = getDoc("personal-data-consent");
  if (!doc) return null;
  return <DocView doc={doc} />;
}
