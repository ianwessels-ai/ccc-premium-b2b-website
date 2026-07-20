import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-2xl font-black">
              Corporate Cricket Collective™
            </p>

            <p className="mt-4 max-w-md text-slate-400">
              More Than A Game. A Stronger Workplace.
            </p>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Premium corporate cricket experiences designed to strengthen
              teams, build workplace culture and create unforgettable memories.
            </p>
          </div>

          <div>
            <p className="font-black uppercase tracking-wide text-amber-400">
              Quick Links
            </p>

            <div className="mt-5 grid gap-3 text-slate-400">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/#experiences" className="hover:text-white">
                Experiences
              </Link>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>

          <div>
            <p className="font-black uppercase tracking-wide text-amber-400">
              Contact
            </p>

            <div className="mt-5 grid gap-3 text-slate-400">
              <a
                href="mailto:hello@corporatecricketcollective.com"
                className="hover:text-white"
              >
                ian_wessels@icloud.com
              </a>

              <p>Amsterdam, The Netherlands</p>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/corporatecricketcollective?igsh=ZzNpb3JhM3d2bzB2&ut-m_source=qr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-sm text-slate-500">
          © 2026 Corporate Cricket Collective™. All rights reserved.
        </div>
      </div>
    </footer>
  );
}