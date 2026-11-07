export const groups = ["Present", "Past", "Future"];

export const types = [
  { name: "Affirmative", bn: "হ্যাঁ-বোধক" },
  { name: "Negative", bn: "না-বোধক" },
  { name: "Interrogative", bn: "প্রশ্নবোধক" },
  { name: "Negative Interrogative", bn: "না-বোধক প্রশ্ন" },
  { name: "Wh-Interrogative", bn: "Wh-প্রশ্ন" },
];

const cap = (s) => s.split("/").map((w) => w[0].toUpperCase() + w.slice(1)).join("/");

// Builds the 5 structures from an auxiliary and the rest of the verb phrase
const std = (aux, rest) => [
  `Sub + ${aux} + ${rest} + Obj`,
  `Sub + ${aux} + not + ${rest} + Obj`,
  `${cap(aux)} + Sub + ${rest} + Obj?`,
  `${cap(aux)} + Sub + not + ${rest} + Obj?`,
  `Wh-word + ${aux} + Sub + ${rest}?`,
];

const mk = (slug, group, title, bn, desc, uses, structures, en, bnS) => ({
  slug, group, title, bn, desc, uses,
  forms: types.map((t, i) => ({
    type: t.name, typeBn: t.bn, structure: structures[i], en: en[i], bn: bnS[i],
  })),
});

export const tenses = [
  mk("present-indefinite", "Present", "Present Indefinite", "সাধারণ বর্তমান",
    "Used for things that happen regularly or are always true.",
    ["Habits and routines: He plays football every day.", "Universal truths: The sun rises in the east."],
    ["Sub + V1 (s/es) + Obj", "Sub + do/does + not + V1 + Obj", "Do/Does + Sub + V1 + Obj?", "Do/Does + Sub + not + V1 + Obj?", "Wh-word + do/does + Sub + V1?"],
    ["He plays football.", "He does not play football.", "Does he play football?", "Does he not play football?", "What does he play?"],
    ["সে ফুটবল খেলে।", "সে ফুটবল খেলে না।", "সে কি ফুটবল খেলে?", "সে কি ফুটবল খেলে না?", "সে কী খেলে?"]),

  mk("present-continuous", "Present", "Present Continuous", "ঘটমান বর্তমান",
    "Used for actions happening right now or around now.",
    ["Actions in progress: She is reading a book now.", "Temporary or planned actions: I am travelling tomorrow."],
    std("am/is/are", "V-ing"),
    ["She is reading a book.", "She is not reading a book.", "Is she reading a book?", "Is she not reading a book?", "What is she reading?"],
    ["সে একটি বই পড়ছে।", "সে একটি বই পড়ছে না।", "সে কি একটি বই পড়ছে?", "সে কি একটি বই পড়ছে না?", "সে কী পড়ছে?"]),

  mk("present-perfect", "Present", "Present Perfect", "পুরাঘটিত বর্তমান",
    "Used for actions finished recently whose result is still connected to now.",
    ["Recently completed actions: He has written a letter.", "Experience: I have visited Cox's Bazar."],
    std("has/have", "V3"),
    ["He has written a letter.", "He has not written a letter.", "Has he written a letter?", "Has he not written a letter?", "What has he written?"],
    ["সে একটি চিঠি লিখেছে।", "সে একটি চিঠি লেখেনি।", "সে কি একটি চিঠি লিখেছে?", "সে কি একটি চিঠি লেখেনি?", "সে কী লিখেছে?"]),

  mk("present-perfect-continuous", "Present", "Present Perfect Continuous", "পুরাঘটিত ঘটমান বর্তমান",
    "Used for actions that started in the past and are still continuing.",
    ["Use for + duration or since + starting point.", "They have been waiting since morning."],
    std("has/have", "been + V-ing"),
    ["They have been waiting for an hour.", "They have not been waiting for an hour.", "Have they been waiting for an hour?", "Have they not been waiting for an hour?", "How long have they been waiting?"],
    ["তারা এক ঘণ্টা ধরে অপেক্ষা করছে।", "তারা এক ঘণ্টা ধরে অপেক্ষা করছে না।", "তারা কি এক ঘণ্টা ধরে অপেক্ষা করছে?", "তারা কি এক ঘণ্টা ধরে অপেক্ষা করছে না?", "তারা কতক্ষণ ধরে অপেক্ষা করছে?"]),

  mk("past-indefinite", "Past", "Past Indefinite", "সাধারণ অতীত",
    "Used for actions that happened and finished at a definite time in the past.",
    ["Finished actions: He went to school yesterday.", "Past habits: We played here every evening."],
    ["Sub + V2 + Obj", "Sub + did not + V1 + Obj", "Did + Sub + V1 + Obj?", "Did + Sub + not + V1 + Obj?", "Wh-word + did + Sub + V1?"],
    ["He went to school.", "He did not go to school.", "Did he go to school?", "Did he not go to school?", "Where did he go?"],
    ["সে স্কুলে গিয়েছিল।", "সে স্কুলে যায়নি।", "সে কি স্কুলে গিয়েছিল?", "সে কি স্কুলে যায়নি?", "সে কোথায় গিয়েছিল?"]),

  mk("past-continuous", "Past", "Past Continuous", "ঘটমান অতীত",
    "Used for actions that were in progress at a moment in the past.",
    ["Action in progress at a past time: They were watching TV at 8 pm.", "Interrupted action: I was walking when it rained."],
    std("was/were", "V-ing"),
    ["They were watching TV.", "They were not watching TV.", "Were they watching TV?", "Were they not watching TV?", "What were they watching?"],
    ["তারা টিভি দেখছিল।", "তারা টিভি দেখছিল না।", "তারা কি টিভি দেখছিল?", "তারা কি টিভি দেখছিল না?", "তারা কী দেখছিল?"]),

  mk("past-perfect", "Past", "Past Perfect", "পুরাঘটিত অতীত",
    "Used for the earlier of two past actions.",
    ["Earlier past action: The patient had died before the doctor came.", "Often used with before, after, already, by the time."],
    std("had", "V3"),
    ["She had finished her work.", "She had not finished her work.", "Had she finished her work?", "Had she not finished her work?", "What had she finished?"],
    ["সে তার কাজ শেষ করেছিল।", "সে তার কাজ শেষ করেনি।", "সে কি তার কাজ শেষ করেছিল?", "সে কি তার কাজ শেষ করেনি?", "সে কী শেষ করেছিল?"]),

  mk("past-perfect-continuous", "Past", "Past Perfect Continuous", "পুরাঘটিত ঘটমান অতীত",
    "Used for an action that had been going on for some time before another past moment.",
    ["Use for + duration or since + starting point.", "He had been working for three hours when I arrived."],
    std("had", "been + V-ing"),
    ["He had been working for three hours.", "He had not been working for three hours.", "Had he been working for three hours?", "Had he not been working for three hours?", "How long had he been working?"],
    ["সে তিন ঘণ্টা ধরে কাজ করছিল।", "সে তিন ঘণ্টা ধরে কাজ করছিল না।", "সে কি তিন ঘণ্টা ধরে কাজ করছিল?", "সে কি তিন ঘণ্টা ধরে কাজ করছিল না?", "সে কতক্ষণ ধরে কাজ করছিল?"]),

  mk("future-indefinite", "Future", "Future Indefinite", "সাধারণ ভবিষ্যৎ",
    "Used for actions that will happen in the future.",
    ["Predictions and plans: She will visit Cox's Bazar next month.", "Promises: I will help you."],
    std("will/shall", "V1"),
    ["She will visit Cox's Bazar.", "She will not visit Cox's Bazar.", "Will she visit Cox's Bazar?", "Will she not visit Cox's Bazar?", "When will she visit Cox's Bazar?"],
    ["সে কক্সবাজারে যাবে।", "সে কক্সবাজারে যাবে না।", "সে কি কক্সবাজারে যাবে?", "সে কি কক্সবাজারে যাবে না?", "সে কখন কক্সবাজারে যাবে?"]),

  mk("future-continuous", "Future", "Future Continuous", "ঘটমান ভবিষ্যৎ",
    "Used for actions that will be in progress at a certain time in the future.",
    ["Action in progress at a future time: We will be waiting at 5 pm.", "Use shall with I/we in formal English."],
    std("will/shall", "be + V-ing"),
    ["We will be waiting for you.", "We will not be waiting for you.", "Will we be waiting for you?", "Will we not be waiting for you?", "Where will we be waiting for you?"],
    ["আমরা তোমার জন্য অপেক্ষা করতে থাকব।", "আমরা তোমার জন্য অপেক্ষা করতে থাকব না।", "আমরা কি তোমার জন্য অপেক্ষা করতে থাকব?", "আমরা কি তোমার জন্য অপেক্ষা করতে থাকব না?", "আমরা কোথায় তোমার জন্য অপেক্ষা করতে থাকব?"]),

  mk("future-perfect", "Future", "Future Perfect", "পুরাঘটিত ভবিষ্যৎ",
    "Used for actions that will be completed before a certain time in the future.",
    ["Completed by a future time: He will have finished the work by 5 pm.", "Often used with by, by the time, before."],
    std("will/shall", "have + V3"),
    ["He will have finished the work by 5 pm.", "He will not have finished the work by 5 pm.", "Will he have finished the work by 5 pm?", "Will he not have finished the work by 5 pm?", "What will he have finished by 5 pm?"],
    ["সে বিকাল ৫টার মধ্যে কাজটি শেষ করে ফেলবে।", "সে বিকাল ৫টার মধ্যে কাজটি শেষ করে ফেলবে না।", "সে কি বিকাল ৫টার মধ্যে কাজটি শেষ করে ফেলবে?", "সে কি বিকাল ৫টার মধ্যে কাজটি শেষ করে ফেলবে না?", "সে বিকাল ৫টার মধ্যে কী শেষ করে ফেলবে?"]),

  mk("future-perfect-continuous", "Future", "Future Perfect Continuous", "পুরাঘটিত ঘটমান ভবিষ্যৎ",
    "Used for how long an action will have been going on by a future time. Rare in everyday English.",
    ["Duration up to a future time: He will have been working here for five years.", "Always used with for + duration."],
    std("will/shall", "have been + V-ing"),
    ["He will have been working here for five years.", "He will not have been working here for five years.", "Will he have been working here for five years?", "Will he not have been working here for five years?", "How long will he have been working here?"],
    ["সে এখানে পাঁচ বছর ধরে কাজ করতে থাকবে।", "সে এখানে পাঁচ বছর ধরে কাজ করতে থাকবে না।", "সে কি এখানে পাঁচ বছর ধরে কাজ করতে থাকবে?", "সে কি এখানে পাঁচ বছর ধরে কাজ করতে থাকবে না?", "সে এখানে কতদিন ধরে কাজ করতে থাকবে?"]),
];

export const getTense = (slug) => tenses.find((t) => t.slug === slug);
