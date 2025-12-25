import { Header } from "@/components/header";
import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/niwoerner",
    icon: IconBrandGithub,
    handle: "@niwoerner",
  },
  {
    name: "X",
    href: "https://x.com/niwoerner",
    icon: IconBrandX,
    handle: "@niwoerner",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/nicolas-woerner",
    icon: IconBrandLinkedin,
    handle: "nicolas-woerner",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="py-10">
            <h1 className="text-2xl font-bold tracking-tight mb-8">Contact</h1>

            <div className="space-y-4">
              {/* Email */}
              <a href="mailto:contact@niwoerner.com" className="block group">
                <Card className="transition-colors hover:bg-accent/50">
                  <CardContent className="flex items-center gap-4">
                    <IconMail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        Email
                      </p>
                      <p className="text-sm text-muted-foreground">
                        contact@niwoerner.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* Social links */}
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <Card className="transition-colors hover:bg-accent/50">
                    <CardContent className="flex items-center gap-4">
                      <link.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {link.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {link.handle}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
