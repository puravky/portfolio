import Image from "next/image";

const photos = [
  { className: "stamp-one", src: "/stamp-1.webp", alt: "Purav at a cafe" },
  { className: "stamp-two", src: "/stamp-2.webp", alt: "Purav in a modern interior" },
  { className: "stamp-three", src: "/stamp-3.webp", alt: "Purav seated outdoors" },
  { className: "stamp-four", src: "/stamp-4.webp", alt: "Purav outdoors at night" },
];

export function PhotoStamps() {
  return (
    <div className="stamp-cloud" aria-label="Photo stamps">
      {photos.map((photo) => (
        <div className={`stamp ${photo.className}`} key={photo.src}>
          <div className="stamp-photo">
            <Image src={photo.src} alt={photo.alt} fill sizes="170px" />
          </div>
        </div>
      ))}
    </div>
  );
}
