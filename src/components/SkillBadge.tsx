import { getSkillIcon } from "@/lib/icons";

export function SkillBadge({ name }: { name: string }) {
  const { Icon, color } = getSkillIcon(name);

  return (
    <span className="chip">
      <Icon aria-hidden className="h-4 w-4 shrink-0" style={{ color }} />
      <span>{name}</span>
    </span>
  );
}
