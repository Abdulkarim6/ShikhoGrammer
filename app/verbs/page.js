import LessonView from "../../components/LessonView";
import VerbTable from "../../components/VerbTable";
import { getLesson } from "../../lib/lessons";
import { Text } from "../../components/Text";

export const metadata = { title: "Verbs | ShikhoGrammer" };

export default function VerbsPage() {
  return (
    <LessonView lesson={getLesson("verbs")}>
      <section>
        <h2><Text t={["Important verbs list", "গুরুত্বপূর্ণ Verb-এর তালিকা"]} /></h2>
        <VerbTable />
      </section>
    </LessonView>
  );
}
