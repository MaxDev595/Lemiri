import { DocView } from "../DocView";
import { getDoc } from "../docsContent";

export default function RefundPolicyPage() {
  const doc = getDoc("refund-policy");
  if (!doc) return null;
  return <DocView doc={doc} />;
}
