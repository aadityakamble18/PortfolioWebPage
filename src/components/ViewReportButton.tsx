import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  FileText,
  ArrowUpRight,
  Sparkles,
  Presentation,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ViewReportButtonProps {
  reportUrl: string;
  projectTitle?: string;
  presentationUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ViewReportButton({
  reportUrl,
  projectTitle,
  presentationUrl,
  className = "inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-accent",
  children,
}: ViewReportButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className={className}>
          {children || (
            <>
              <FileText className="h-4 w-4" />
              View Report
              <ArrowUpRight className="h-4 w-4 ml-1 opacity-80" />
            </>
          )}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-border/80 bg-card p-6 shadow-2xl backdrop-blur-xl">
        <DialogHeader className="gap-2.5 text-left">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-sm">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <div>
            <DialogTitle className="font-display text-xl font-bold tracking-tight text-foreground">
              Notice: AI-Assisted Report
            </DialogTitle>
            {projectTitle && (
              <p className="text-xs text-muted-foreground mt-0.5 font-medium">
                {projectTitle}
              </p>
            )}
          </div>
        </DialogHeader>

        <p className="my-3 text-sm leading-relaxed text-muted-foreground text-left">
          This report was drafted and formatted with the assistance of AI using real experimental and project data. Alternatively, you can{" "}
          {presentationUrl ? (
            <a
              href={presentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
            >
              view the presentation (PPT)
            </a>
          ) : (
            <a
              href="/projects?tab=presentations"
              className="font-medium text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
            >
              view the presentation (PPT)
            </a>
          )}{" "}
          as it is not AI-generated, or{" "}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="font-medium text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
          >
            request the real report and raw data
          </Link>
          .
        </p>

        <DialogFooter className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:space-x-2">
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancel
            </Button>
          </DialogClose>
          {presentationUrl && (
            <Button variant="secondary" asChild className="cursor-pointer">
              <a
                href={presentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <Presentation className="h-4 w-4 mr-1.5 text-primary" />
                View PPT
              </a>
            </Button>
          )}
          <Button asChild className="cursor-pointer">
            <a
              href={reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Go to Report
              <ArrowUpRight className="h-4 w-4 ml-1" />
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
