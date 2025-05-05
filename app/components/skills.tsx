const Skills = () => {
  const technologies = [
    { name: "next.js", image: "/icons/nextjs.png" },
    { name: "typescript", image: "/icons/typescript.png" },
    { name: "rust", image: "/icons/rust.png" },
    { name: "solana", image: "/icons/solana.png" },
    { name: "anchor", image: "/icons/anchor.png" },
  ];

  return (
    <div>
      <div className="mb-4">generally i be with:</div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="rounded-lg text-center px-4 py-2 border border-transparent border-zinc-200 dark:border-zinc-700 text-sm font-medium cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center gap-2"
          >
            <img src={tech.image} alt={tech.name} className="custom-skill-icon" />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .custom-skill-icon {
          width: 20px;
          height: 20px;
          object-fit: contain;
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Skills;

