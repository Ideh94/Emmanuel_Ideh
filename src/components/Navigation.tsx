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
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-6 py-4 lg:px-10">
        <Link href="/" aria-label="Emmanuel Ideh home" className="font-heading text-lg font-medium tracking-wide text-navy">EI</Link>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-xs font-medium text-near-black hover:text-navy sm:text-sm">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
