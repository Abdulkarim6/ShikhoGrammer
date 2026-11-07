import Link from "next/link";
import { lessons } from "../lib/lessons";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>
          Shikho<span>Grammer</span>
        </h1>
        <p>Simple, rule-based English grammar with examples, differences and notes.</p>
        <p className="bn">সহজ নিয়মে ইংরেজি Grammar শেখো — উদাহরণ, পার্থক্য ও নোটসহ বাংলা ব্যাখ্যা।</p>
        <Link href="/tense" className="btn">Start with Tense · শুরু করো →</Link>
      </section>

      <section className="grid">
        {lessons.map((l) => (
          <Link key={l.slug} href={`/${l.slug}`} className="card">
            <div className="icon">{l.icon}</div>
            <h3>{l.title}</h3>
            <small>{l.bn}</small>
            <p>{l.intro[0]}</p>
            <p className="bn">{l.intro[1]}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
