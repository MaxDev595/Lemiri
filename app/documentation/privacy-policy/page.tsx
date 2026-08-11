import { DocView } from "../DocView";
import { getDoc } from "../docsContent";

export default function PrivacyPolicyPage() {
  const doc = getDoc("privacy-policy");
  if (!doc) return null;
  return <DocView doc={doc} />;
}
