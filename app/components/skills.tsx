const arr = [
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
  "cpp"
];

export const Skills = () => {
  return (
    <div>
      <div className="mb-4">techstack i use : </div>
      <div className="flex flex-wrap gap-2">
        {arr.map((tech, index) => (
          <div
            key={index}
            className="border border-1 min-w-[4rem] px-4 py-2 flex items-center justify-center rounded-md text-center cursor-pointer"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};
