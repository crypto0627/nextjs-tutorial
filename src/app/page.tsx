import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
    <Link href="/ssr">ssr</Link>
    <Link href="/ssg/1">ssg</Link>
    <Link href="/isr/1">isr</Link>
    <Link href="/csr">csr</Link>
    </div>
  );
}
