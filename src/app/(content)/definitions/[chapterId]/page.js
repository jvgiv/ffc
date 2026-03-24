import { notFound } from 'next/navigation';
import Link from 'next/link';
import chapters from '@/data/def';

export default async function ChapterPage({ params }) {
    const { chapterId } = await params;

  const id = parseInt(chapterId);

  const chapter = chapters.find((c) => c.id === id);

  if (!chapter) {
    notFound();
  }


  return (
    <div>
      <div className="mb-10">
        <span className="text-4xl">{chapter.num}</span>
        <h1 className="text-3xl font-bold mt-2">{chapter.title}</h1>
        <p className="mt-6 text-lg leading-relaxed">{chapter.focus}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Subdefinitions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chapter.terms.map((sub, index) => (
          <Link
            key={index}
            href={`/definitions/${chapter.id}/${sub[0]}`}   // chapter id + term code
            className="p-5 border rounded-xl hover:shadow-md transition flex items-center gap-3"
          >
            <span className="font-mono text-sm text-gray-500">{sub[0]}</span>
            <span className="font-medium">{sub[1]}</span>
            <span className="ml-auto text-sm text-gray-400">{sub[3]}</span>
            <span className="ml-auto text-sm text-gray-400">{sub[7]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}