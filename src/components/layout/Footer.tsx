import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-foreground mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-full border-2 border-foreground flex items-center justify-center">
                <span className="text-white font-heading font-extrabold text-lg">
                  MJ
                </span>
              </div>
              <span className="font-heading font-bold">Mingju Wu</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Multi-disciplinary Designer creating value through people-centered design
              across urban, digital, and multimedia disciplines.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Projects
              </Link>
              <Link
                href="/portfolio"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                About
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              <span className="text-muted-foreground text-sm">
                Mingju.Wu2003@outlook.com
              </span>
              <span className="text-muted-foreground text-sm">
                +852-5547 0469
              </span>
              <span className="text-muted-foreground text-sm">
                Hongkong
              </span>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Mingju Wu. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <span>Design & Built with Play</span>
            <span className="inline-block w-2 h-2 bg-secondary rounded-full" />
            <span>Urban + Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
