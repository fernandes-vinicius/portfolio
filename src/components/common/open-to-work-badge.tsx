import { MapPinIcon } from "@/components/common/icons";
import { Badge } from "@/components/ui/badge";

export function OpenToWorkBadge() {
  return (
    <div
      className="group mb-8 flex justify-center"
      style={{
        animation: "hero-fade-up 0.75s 0s cubic-bezier(0.22,1,0.36,1) both",
      }}
    >
      <Badge
        variant="outline"
        className="h-auto gap-2.5 bg-background px-4 py-2 shadow-sm"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-muted-foreground">
          Available for new opportunities
        </span>
        <span className="flex items-center gap-1 text-muted-foreground opacity-75">
          <MapPinIcon size={10} />
          Brazil
        </span>
      </Badge>
    </div>
  );
}
