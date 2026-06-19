export const SectionWrapper: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({
  children,
  className = "",
  id,
}) => (
  <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  </section>
);
