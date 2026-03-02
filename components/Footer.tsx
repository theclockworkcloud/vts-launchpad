import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-navy/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="Veritable Technology Solutions"
            width={36}
            height={36}
            className="w-9"
          />
          <span className="text-sm text-navy/40 font-light">
            &copy; 2026 Veritable Technology Solutions
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-navy/40 font-light">
          <span>Adelaide, South Australia</span>
          <span className="hidden sm:inline text-navy/15">|</span>
          <a href="#" className="hover:text-primary transition-colors duration-200">
            Privacy
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-200">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
