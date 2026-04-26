interface TagProps {
  children: React.ReactNode;
}

const Tag = ({ children }: TagProps) => (
  <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:border-primary/40 transition-colors">
    {children}
  </span>
);

export default Tag;
