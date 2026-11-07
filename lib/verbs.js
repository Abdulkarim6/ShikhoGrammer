// V1 | V2 | V3 | V4 (V-ing) | Bengali meaning
const raw = `be|was/were|been|being|হওয়া
go|went|gone|going|যাওয়া
come|came|come|coming|আসা
do|did|done|doing|করা
have|had|had|having|আছে / থাকা
make|made|made|making|তৈরি করা
take|took|taken|taking|নেওয়া
give|gave|given|giving|দেওয়া
get|got|got|getting|পাওয়া
see|saw|seen|seeing|দেখা
know|knew|known|knowing|জানা
say|said|said|saying|বলা
tell|told|told|telling|জানানো
speak|spoke|spoken|speaking|কথা বলা
write|wrote|written|writing|লেখা
read|read|read|reading|পড়া
eat|ate|eaten|eating|খাওয়া
drink|drank|drunk|drinking|পান করা
sleep|slept|slept|sleeping|ঘুমানো
sit|sat|sat|sitting|বসা
stand|stood|stood|standing|দাঁড়ানো
run|ran|run|running|দৌড়ানো
swim|swam|swum|swimming|সাঁতার কাটা
fly|flew|flown|flying|ওড়া
sing|sang|sung|singing|গান গাওয়া
begin|began|begun|beginning|শুরু করা
break|broke|broken|breaking|ভাঙা
bring|brought|brought|bringing|আনা
buy|bought|bought|buying|কেনা
sell|sold|sold|selling|বিক্রি করা
build|built|built|building|নির্মাণ করা
catch|caught|caught|catching|ধরা
choose|chose|chosen|choosing|বেছে নেওয়া
cut|cut|cut|cutting|কাটা
draw|drew|drawn|drawing|আঁকা
drive|drove|driven|driving|চালানো
fall|fell|fallen|falling|পড়ে যাওয়া
feel|felt|felt|feeling|অনুভব করা
find|found|found|finding|খুঁজে পাওয়া
forget|forgot|forgotten|forgetting|ভুলে যাওয়া
grow|grew|grown|growing|বেড়ে ওঠা
hear|heard|heard|hearing|শোনা
hit|hit|hit|hitting|আঘাত করা
hold|held|held|holding|ধরে রাখা
keep|kept|kept|keeping|রাখা
lead|led|led|leading|নেতৃত্ব দেওয়া
learn|learnt/learned|learnt/learned|learning|শেখা
leave|left|left|leaving|ছেড়ে যাওয়া
lend|lent|lent|lending|ধার দেওয়া
let|let|let|letting|অনুমতি দেওয়া
lose|lost|lost|losing|হারানো
mean|meant|meant|meaning|বোঝানো
meet|met|met|meeting|দেখা করা
pay|paid|paid|paying|মূল্য পরিশোধ করা
put|put|put|putting|রাখা
ride|rode|ridden|riding|চড়া
rise|rose|risen|rising|ওঠা
send|sent|sent|sending|পাঠানো
spend|spent|spent|spending|খরচ করা
teach|taught|taught|teaching|শেখানো
think|thought|thought|thinking|ভাবা
throw|threw|thrown|throwing|ছোড়া
understand|understood|understood|understanding|বোঝা
wake|woke|woken|waking|জাগা
wear|wore|worn|wearing|পরা
win|won|won|winning|জেতা
play|played|played|playing|খেলা
work|worked|worked|working|কাজ করা
study|studied|studied|studying|অধ্যয়ন করা
help|helped|helped|helping|সাহায্য করা`;

export const verbs = raw.split("\n").map((line) => {
  const [v1, v2, v3, v4, bn] = line.split("|");
  return { v1, v2, v3, v4, bn };
});
