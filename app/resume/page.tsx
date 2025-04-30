export const metadata = {
  title: "resume",
  description: "resume",
};


export default function Resume() {
  return (
    <div className=" h-[68vh] md:h-[78vh] lg:h-[92vh]">
      <iframe
        src="https://avhimaz.github.io/resume/resume.pdf"
        title="Resume PDF"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
}

