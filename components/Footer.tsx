import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/alexchendev", icon: Github, label: "GitHub" },
  { href: "https://twitter.com/alexchendev", icon: Twitter, label: "Twitter" },
  { href: "https://linkedin.com/in/alexchendev", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:hello@alexchen.dev", icon: Mail, label: "Email" },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "/projects", label: "All Projects" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold gradient-text">Alex Chen</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full Stack Developer building beautiful, performant web applications with modern
              technologies.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-muted hover:bg-indigo-500/20 hover:text-indigo-400 transition-all duration-200 text-muted-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-indigo-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Available for freelance projects and full-time opportunities.
              </p>
              <a
                href="mailto:hello@alexchen.dev"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
              >
                hello@alexchen.dev
              </a>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> using Next.js &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
