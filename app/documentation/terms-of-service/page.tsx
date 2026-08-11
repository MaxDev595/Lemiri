import { DocView } from "../DocView";
import { getDoc } from "../docsContent";

export default function TermsOfServicePage() {
  const doc = getDoc("terms-of-service");
  if (!doc) return null;
  return <DocView doc={doc} />;
}
