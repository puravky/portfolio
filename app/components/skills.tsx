const Skills = () => {
  const technologies = [
    "next.js",
    "typescript",
    "javascript",
    "solana/web3.js",
    "rust",
    "anchor",
    "node",
    "express",
    "mongodb",
    "prisma",
    "docker",
    "git",
    "cpp",
  ];

  return (
    <div>
      <div className="mb-4">techstack i use : </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="border dark:border-gray-600 min-w-[4rem] px-4 py-2 flex items-center justify-center rounded-md text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
