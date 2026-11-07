import Link from "next/link";
import { notFound } from "next/navigation";
import { tenses } from "../../../lib/tenses";
import { tenseInfo } from "../../../lib/tenseInfo";
import { Text } from "../../../components/Text";

export const dynamicParams = false;

export function generateStaticParams() {
  return tenses.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }) {
  const t = tenses.find((x) => x.slug === params.slug);
  return { title: t ? `${t.title} | ShikhoGrammer` : "ShikhoGrammer" };
}

export default function TenseDetail({ params }) {
  const i = tenses.findIndex((x) => x.slug === params.slug);
  if (i < 0) notFound();
  const t = tenses[i];
  const info = tenseInfo[t.slug];
  const prev = tenses[i - 1];
  const next = tenses[i + 1];

  return (
    <article className="lesson">
      <p className="crumb"><Link href="/tense">← All tenses · সব Tense</Link></p>
      <h1>
        {t.title} <small>({t.bn})</small>
      </h1>
      <p className="intro"><Text t={[t.desc, info.descBn]} /></p>

      <section className="box rule">
        <h2>📐 <Text t={["Rule", "নিয়ম"]} /></h2>
        <p>{info.rule}</p>
      </section>

      <section>
        <h2><Text t={["Uses", "ব্যবহার"]} /></h2>
        <ul>
          {t.uses.map((u, n) => <li key={n}><Text t={[u, info.usesBn[n]]} /></li>)}
        </ul>
      </section>

      <section>
        <h2><Text t={["5 types of sentences", "৫ ধরনের বাক্য"]} /></h2>
        {t.forms.map((f, n) => (
          <div className="form-card" key={f.type}>
            <div className="form-head">
              <span className="num">{n + 1}</span>
              <strong>{f.type}</strong>
              <span className="bn-tag">{f.typeBn}</span>
            </div>
            <code className="structure">{f.structure}</code>
            <p className="en">{f.en}</p>
            <p className="bn-line">{f.bn}</p>
          </div>
        ))}
      </section>

      <section className="box diff">
        <h2>⚖️ <Text t={["Difference", "পার্থক্য"]} /></h2>
        <p><Text t={info.diff} /></p>
      </section>

      <section className="box note">
        <h2>📌 <Text t={["Important Notes", "গুরুত্বপূর্ণ নোট"]} /></h2>
        <ul>
          {info.notes.map((n, k) => <li key={k}><Text t={n} /></li>)}
        </ul>
      </section>

      <div className="pager">
        {prev ? <Link href={`/tense/${prev.slug}`}>← {prev.title}</Link> : <span />}
        {next ? <Link href={`/tense/${next.slug}`}>{next.title} →</Link> : <span />}
      </div>
    </article>
  );
}
