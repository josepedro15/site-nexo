import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  highlight?: boolean;
  compact?: boolean;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
  highlight = false,
  compact = false,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden border-slate-100 bg-white",
        highlight ? "shadow-lg ring-1 ring-primary/30" : "shadow-sm",
        className
      )}
    >
      <CardHeader className={compact ? "p-4 pb-0" : undefined}>
        <div className={cn(
          "rounded-xl flex items-center justify-center transition-colors shrink-0",
          compact ? "w-10 h-10 mb-3" : "w-12 h-12 mb-4",
          highlight ? "bg-primary text-white shadow-lg shadow-primary/30" : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
        )}>
          <Icon className={compact ? "w-5 h-5" : "w-6 h-6"} />
        </div>
        <CardTitle className={cn("text-slate-900", compact ? "text-lg mb-1" : "text-xl mb-2")}>{title}</CardTitle>
      </CardHeader>
      <CardContent className={compact ? "p-4 pt-0" : undefined}>
        <CardDescription className={cn("text-slate-500 leading-relaxed", compact ? "text-sm" : "text-base")}>
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
