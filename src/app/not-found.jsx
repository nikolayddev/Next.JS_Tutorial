import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>NotFound</h2>
      <p>Sorry the page does not exist!</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}