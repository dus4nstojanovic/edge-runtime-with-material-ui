import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image
        src="/sample-image.jpg"
        alt="Sample image"
        width={250}
        height={350}
        priority
      />
    </main>
  );
}
