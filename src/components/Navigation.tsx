import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  return (
    <nav className="border-b border-navy/10">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-heading text-lg font-medium text-navy">EI</Link>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-sm font-medium text-near-black hover:text-navy">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
