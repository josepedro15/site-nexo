import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  highlight?: boolean;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  className,
  highlight = false,
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        "relative h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group overflow-hidden border-slate-100 bg-white",
        highlight ? "shadow-lg ring-1 ring-blue-100" : "shadow-sm",
        className
      )}
    >
      <CardHeader>
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors",
          highlight ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
        )}>
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-xl mb-2 text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-slate-500 text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
