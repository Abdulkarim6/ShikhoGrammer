import Link from "next/link";
import LessonView from "../../components/LessonView";
import { getLesson } from "../../lib/lessons";
import { tenses, groups } from "../../lib/tenses";
import { Text } from "../../components/Text";

export const metadata = { title: "Tense | ShikhoGrammer" };

const GROUP_BN = { Present: "বর্তমান কাল", Past: "অতীত কাল", Future: "ভবিষ্যৎ কাল" };

export default function TensePage() {
  return (
    <LessonView lesson={getLesson("tense")}>
      <h2 className="section-title">
        <Text t={["Learn each tense in detail", "প্রতিটি Tense বিস্তারিত শেখো"]} />
      </h2>
      <p className="intro">
        <Text t={["Every tense has a rule, 5 sentence types, differences and notes.", "প্রতিটি Tense-এ আছে নিয়ম, ৫ ধরনের বাক্য, পার্থক্য ও নোট।"]} />
      </p>
      {groups.map((g) => (
        <div key={g}>
          <h3 className="group-title">{g} Tense <span className="bn-inline">{GROUP_BN[g]}</span></h3>
          <div className="grid">
            {tenses.filter((t) => t.group === g).map((t) => (
              <Link key={t.slug} href={`/tense/${t.slug}`} className="card">
                <h3>{t.title}</h3>
                <small>{t.bn}</small>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </LessonView>
  );
}
