import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

import portrait from "../assets/portrait.jpg";
import { socialLinks } from "../components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aaditya Kamble — Portfolio" },
      {
        name: "description",
        content: "Get in touch with Aaditya Kamble for collaborations, opportunities, or just to say hello.",
      },
      { property: "og:title", content: "Contact Aaditya Kamble — Portfolio" },
      {
        property: "og:description",
        content: "Get in touch with Aaditya Kamble for collaborations, opportunities, or just to say hello.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});


function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <FloatingShapes />

      <main className="relative z-10">
        <section className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-20 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-5 font-body text-sm font-semibold uppercase tracking-widest text-primary">
                AADITYA KAMBLE / CONTACT
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Let&apos;s Connect
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Whether you&apos;d like to learn more about my work, verify my professional background, or simply connect for a chat, I&apos;d love to hear from you. Please feel free to reach out using the form below, send me an email, or connect with me across any of my social media channels.
              </p>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
              <div className="absolute -inset-4 -z-10 rounded-[42%_58%_65%_35%/45%_40%_60%_55%] bg-primary float-slow" />
              <img
                src={portrait}
                alt="Portrait of Aaditya Kamble"
                width={420}
                height={420}
                className="aspect-square w-full rounded-[32%_68%_58%_42%/48%_42%_58%_52%] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
            <div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Send a message</h2>
              <ContactForm />
            </div>
            <div className="lg:pt-2">
              <h3 className="font-display text-2xl font-bold mb-6">Direct Email</h3>
              <div className="flex flex-col gap-5">
                <a href="mailto:aadityakamble18@gmail.com" className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">aadityakamble18@gmail.com</span>
                </a>
                <a href="mailto:aadityakamble18@outlook.com" className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">aadityakamble18@outlook.com</span>
                </a>
                <a href="mailto:b22mt024@alumni.iitj.ac.in" className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary">
                  <Mail className="h-5 w-5" />
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">b22mt024@alumni.iitj.ac.in</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Elsewhere</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Find me online</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:border-primary hover:text-primary"
                >
                  <span className="font-medium">{link.label}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FloatingShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[8%] top-[22%] h-16 w-16 rounded-[40%_60%_60%_40%/50%_50%_50%_50%] bg-primary/20 float-slow" />
      <div className="absolute right-[10%] top-[50%] h-20 w-20 rounded-[65%_35%_45%_55%/40%_55%_45%_60%] bg-red-muted/20 drift-x" />
      <div className="absolute bottom-[15%] left-[35%] h-10 w-10 rounded-full bg-primary/20 float-medium" />
    </div>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);
    
    const formData = new FormData(e.currentTarget);
    // TODO: Replace with your actual Web3Forms Access Key
    try {
      const response = await fetch("https://formsubmit.co/ajax/aakamble018@gmail.com", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Something went wrong.", {
          description: data.message || "Please try again later.",
        });
        console.error("Form error:", data);
      }
    } catch (error) {
      toast.error("Network error.", {
        description: "Please check your connection and try again.",
      });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-6 max-w-xl">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="John Doe" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="john@example.com" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="_subject" required placeholder="What is this regarding?" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="How can I help you?"
          className="min-h-[120px]"
        />
      </div>
      {/* Honeypot to prevent spam */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={isSubmitting} className="w-fit">
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Send className="mr-2 h-4 w-4" />
          )}
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        {isSuccess && (
          <p className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-500 animate-in fade-in slide-in-from-left-2 duration-300">
            <CheckCircle2 className="h-4 w-4" />
            Message sent!
          </p>
        )}
      </div>
    </form>
  );
}

