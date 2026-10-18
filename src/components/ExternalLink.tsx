type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ExternalLink({ href, children, className }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> (opens in a new tab) </span>
    </a>
  );
}
