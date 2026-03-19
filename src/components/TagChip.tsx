type TagChipProps = {
  tag: string;
};

export default function TagChip({ tag }: TagChipProps) {
  return (
    <span
      className="inline-flex rounded-full bg-cream px-3 py-1 text-sm text-obsidian"
    >
      {tag}
    </span>
  );
}

