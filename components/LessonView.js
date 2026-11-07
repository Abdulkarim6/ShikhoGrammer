import { Text } from "./Text";

const ICONS = { diff: "⚖️ ", note: "📌 ", rule: "📐 " };

function Section({ s }) {
  return (
    <section className={s.variant ? `box ${s.variant}` : ""}>
      <h2>
        {ICONS[s.variant]}
        <Text t={s.heading} />
      </h2>
      {s.intro && <p className="sec-intro"><Text t={s.intro} /></p>}
      {s.table && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>{s.table.head.map((h, i) => <th key={i}><Text t={h} /></th>)}</tr>
            </thead>
            <tbody>
              {s.table.rows.map((row, i) => (
                <tr key={i}>{row.map((c, j) => <td key={j}><Text t={c} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {s.points && (
        <ul>{s.points.map((p, i) => <li key={i}><Text t={p} /></li>)}</ul>
      )}
    </section>
  );
}

// Notes are always shown last; `children` sits between the main sections and the notes.
export default function LessonView({ lesson, children }) {
  const main = lesson.sections.filter((s) => s.variant !== "note");
  const notes = lesson.sections.filter((s) => s.variant === "note");
  return (
    <article className="lesson">
      <h1>
        {lesson.icon} {lesson.title} <small>({lesson.bn})</small>
      </h1>
      <p className="intro"><Text t={lesson.intro} /></p>
      {main.map((s, i) => <Section key={i} s={s} />)}
      {children}
      {notes.map((s, i) => <Section key={i} s={s} />)}
    </article>
  );
}
