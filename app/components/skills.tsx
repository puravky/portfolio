const Skills = () => {
  const technologies = [
    "next.js",
    "typescript",
    "rust",
    "anchor",
    "mern",
    "prisma",
    "docker",
    "git",
    "linux",
    "testing",
  ];

  return (
    <div>
      <div className="mb-4">techstack i use : </div>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="rounded-lg text-center px-4 py-2 border border-transparent border-zinc-200  dark:border-zinc-700 text-sm font-medium cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
