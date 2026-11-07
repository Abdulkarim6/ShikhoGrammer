import { notFound } from "next/navigation";
import LessonView from "../../components/LessonView";
import { lessons, getLesson } from "../../lib/lessons";

export const dynamicParams = false;

// "custom" lessons (Tense, Verbs) have their own route folders
export function generateStaticParams() {
  return lessons.filter((l) => !l.custom).map((l) => ({ topic: l.slug }));
}

export function generateMetadata({ params }) {
  const lesson = getLesson(params.topic);
  return { title: lesson ? `${lesson.title} | ShikhoGrammer` : "ShikhoGrammer" };
}

export default function LessonPage({ params }) {
  const lesson = getLesson(params.topic);
  if (!lesson) notFound();
  return <LessonView lesson={lesson} />;
}
