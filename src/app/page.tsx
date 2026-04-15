import { Button } from "@/components/ui/button";
import { client } from "@/lib/sanity/client";
import { PROFILE_QUERY } from "@/lib/sanity/queries";
import type { Profile } from "@/lib/sanity/types";

const options = { next: { revalidate: 30 } };

export default async function Page() {
  const profile = await client.fetch<Profile>(PROFILE_QUERY, {}, options);

  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">{profile.title}</h1>
          <p>You may now add components and start building.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  );
}
