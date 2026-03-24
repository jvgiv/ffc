// app/definitions/[chapterId]/[subId]/page.js
import { notFound } from 'next/navigation';
import Link from 'next/link';
import chapters from '@/data/def';

export default async function Subpage({ params }) {
  const { chapterId, subId } = await params;

  console.log("Received → chapterId:", chapterId, " | subId:", subId);

  // Find chapter by the clean numeric id
  const chapter = chapters.find((c) => c.id === chapterId);
  if (!chapter) {
    console.error("Chapter not found for id:", chapterId);
    notFound();
  }

  // Find the term
  const sub = chapter.terms.find((t) => t[0] === subId);
  if (!sub) {
    console.error("Term not found:", subId);
    notFound();
  }

  const [number, title, pronunciation, partOfSpeech, definition, type, insight, time] = sub;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        href={`/definitions/${chapter.id}`}
        className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-8"
      >
        ← Back to {chapter.title}
      </Link>

      <div className="mb-8">
        <span className="text-5xl text-gray-300">{number}</span>
        <h1 className="text-4xl font-bold mt-2">{title}</h1>
        <p className="text-gray-500 mt-1">
          {pronunciation} • {partOfSpeech}
        </p>
      </div>

      <div className="prose max-w-none text-lg leading-relaxed">
        <p>{definition}</p>
      </div>

      {insight && (
        <div className="mt-10 p-6 bg-gray-50 border-l-4 border-gray-400 italic">
          {insight}
        </div>
      )}
    </div>
  );
}