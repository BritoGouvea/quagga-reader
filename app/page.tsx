import { reader } from "@/lib/barcode-reader";
// import { documents } from "@/lib/data";

export default async function page() {
  // const document = documents[0];
  reader();

  return <div></div>;
}
