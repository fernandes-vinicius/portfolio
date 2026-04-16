import { MapPinIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";

export function OpenToWorkBadge() {
  return (
    <div className="group mb-8 flex animate-[hero-fade-up_0.75s_cubic-bezier(0.22,1,0.36,1)_both] justify-center">
      <Badge variant="outline" className="h-auto gap-2.5 px-4 py-2">
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
        </span>
        <span className="text-foreground">Available for new opportunities</span>
        <span className="flex items-center gap-1 text-muted-foreground">
          <MapPinIcon size={10} />
          Brazil
        </span>
      </Badge>
    </div>
  );
}
