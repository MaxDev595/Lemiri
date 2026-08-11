import { DocView } from "../DocView";
import { getDoc } from "../docsContent";

export default function PublicOfferPage() {
  const doc = getDoc("public-offer");
  if (!doc) return null;
  return <DocView doc={doc} />;
}
