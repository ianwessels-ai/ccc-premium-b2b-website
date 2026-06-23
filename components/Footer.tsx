import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-black text-navy">CCC</h3>
          <p className="mt-4 max-w-md text-sm leading-6 text-bodyText">
            A premium business community that strengthens workplace culture,
            team connection, and professional relationships through
            cricket-inspired corporate experiences.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-navy">Explore</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link href="/experiences">Experiences</Link>
            <Link href="/networking">Networking</Link>
            <Link href="/tournaments">Tournaments</Link>
          </div>
        </div>
        <div>
          <div>
  <h4 className="font-bold text-navy">Contact</h4>

  <p className="mt-4 text-sm text-bodyText">
    North Holland, Netherlands
    </p>
  <p className="mt-4 text-sm text-bodyText">
  KVK: To be added
</p>
</div>
        </div>
      </div>
      <div className="border-t border-slate-100 px-6 py-6 text-center text-xs text-bodyText">
  <div className="mb-3 flex flex-wrap justify-center gap-4">
    <Link href="/privacy-policy" className="hover:text-navy">
      Privacy Policy
    </Link>
    <Link href="/terms" className="hover:text-navy">
      Terms & Conditions
    </Link>
    <Link href="/contact" className="hover:text-navy">
      Contact
    </Link>
  </div>

  <p>
    © {new Date().getFullYear()} Corporate Cricket Collective™. All rights reserved.
  </p>
</div>
    </footer>
  );
}