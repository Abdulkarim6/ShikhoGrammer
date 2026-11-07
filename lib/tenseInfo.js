// Bengali description, rule, uses, notes and difference for each tense.
// usesBn lines up with `uses` in tenses.js. Notes and diff are [English, Bengali].
export const tenseInfo = {
  "present-indefinite": {
    descBn: "যে কাজ নিয়মিত ঘটে বা চিরন্তন সত্য, তা বোঝাতে Present Indefinite Tense ব্যবহৃত হয়।",
    usesBn: ["অভ্যাস ও নিয়মিত কাজ: সে প্রতিদিন ফুটবল খেলে।", "চিরন্তন সত্য: সূর্য পূর্ব দিকে ওঠে।"],
    rule: "Subject-এর পর verb-এর V1 বসে; he/she/it বা একবচন noun থাকলে V1-এর সাথে s/es যুক্ত হয়। Negative-এ do/does + not এবং প্রশ্নে Do/Does Subject-এর আগে বসে; তখন verb আবার V1 হয়ে যায়।",
    notes: [
      ["After does, the verb takes no s/es.", "does-এর পরে verb-এর সাথে s/es যুক্ত হয় না।"],
      ["Time words: always, usually, often, every day.", "সময়সূচক শব্দ: always, usually, often, every day।"],
    ],
    diff: ["vs Present Continuous: Indefinite = regular or always true; Continuous = happening now. (He reads daily. / He is reading now.)",
      "Present Continuous-এর সাথে পার্থক্য: Indefinite-এ কাজ নিয়মিত বা সবসময় সত্য; Continuous-এ কাজ এখন চলছে। (সে প্রতিদিন পড়ে। / সে এখন পড়ছে।)"],
  },
  "present-continuous": {
    descBn: "যে কাজ এখন ঘটছে বা এই সময়ের আশেপাশে চলছে, তা বোঝাতে Present Continuous ব্যবহৃত হয়।",
    usesBn: ["চলমান কাজ: সে এখন একটি বই পড়ছে।", "অস্থায়ী বা পরিকল্পিত কাজ: আমি আগামীকাল ভ্রমণে যাচ্ছি।"],
    rule: "Subject-এর পর am/is/are বসে এবং verb-এর সাথে ing যুক্ত হয়। I-এর সাথে am, he/she/it-এর সাথে is, we/you/they-এর সাথে are বসে। Negative-এ am/is/are-এর পর not বসে; প্রশ্নে am/is/are Subject-এর আগে যায়।",
    notes: [
      ["know, like, want, believe are not normally used in continuous form.", "know, like, want, believe-এর মতো verb সাধারণত Continuous form-এ হয় না।"],
      ["Spelling: run → running, make → making.", "বানান: run → running, make → making (e বাদ যায়)।"],
    ],
    diff: ["vs Present Perfect: Continuous = still in progress; Perfect = completed. (He is writing. / He has written.)",
      "Present Perfect-এর সাথে পার্থক্য: Continuous-এ কাজ চলমান; Perfect-এ কাজ সম্পন্ন। (সে লিখছে। / সে লিখেছে।)"],
  },
  "present-perfect": {
    descBn: "যে কাজ সম্প্রতি শেষ হয়েছে এবং যার ফল এখনও বর্তমানে প্রভাব ফেলছে, তা বোঝাতে Present Perfect ব্যবহৃত হয়।",
    usesBn: ["সদ্য সম্পন্ন কাজ: সে একটি চিঠি লিখেছে।", "অভিজ্ঞতা: আমি কক্সবাজার ঘুরে এসেছি।"],
    rule: "Subject-এর পর has/have এবং verb-এর V3 বসে। he/she/it বা একবচন noun-এর সাথে has, বাকিদের সাথে have বসে। Negative-এ has/have-এর পর not বসে; প্রশ্নে has/have Subject-এর আগে যায়।",
    notes: [
      ["Do not use a definite past time (yesterday, last year) with Present Perfect.", "yesterday, last year-এর মতো নির্দিষ্ট অতীত সময় Present Perfect-এর সাথে বসে না।"],
      ["Time words: already, just, yet, ever, never, so far.", "সময়সূচক শব্দ: already, just, yet, ever, never, so far।"],
    ],
    diff: ["vs Past Indefinite: Present Perfect has no definite time and the result matters now; Past Indefinite has a definite past time. (I have eaten. / I ate at 2 pm.)",
      "Past Indefinite-এর সাথে পার্থক্য: Present Perfect-এ নির্দিষ্ট সময় থাকে না, ফল বর্তমানে গুরুত্বপূর্ণ; Past Indefinite-এ নির্দিষ্ট অতীত সময় থাকে। (আমি খেয়েছি। / আমি দুপুর ২টায় খেয়েছিলাম।)"],
  },
  "present-perfect-continuous": {
    descBn: "যে কাজ অতীতে শুরু হয়ে এখনও চলছে, তা বোঝাতে Present Perfect Continuous ব্যবহৃত হয়।",
    usesBn: ["for (সময়কাল) ও since (শুরুর সময়) এর সাথে ব্যবহৃত হয়।", "তারা সকাল থেকে অপেক্ষা করছে।"],
    rule: "Subject-এর পর has/have been এবং verb-এর সাথে ing বসে। Negative-এ has/have-এর পর not বসে; প্রশ্নে has/have Subject-এর আগে যায়।",
    notes: [
      ["for = length of time, since = starting point.", "for-এর পরে সময়ের পরিমাণ (two hours), since-এর পরে শুরুর সময় (morning) বসে।"],
      ["Not used with state verbs like know or like.", "know, like-এর মতো state verb-এর সাথে ব্যবহৃত হয় না।"],
    ],
    diff: ["vs Present Perfect: Perfect stresses completion; Perfect Continuous stresses how long. (He has written a letter. / He has been writing for an hour.)",
      "Present Perfect-এর সাথে পার্থক্য: Perfect-এ কাজ শেষ হওয়ার ওপর জোর; Perfect Continuous-এ কতক্ষণ ধরে চলছে তার ওপর জোর। (সে একটি চিঠি লিখেছে। / সে এক ঘণ্টা ধরে লিখছে।)"],
  },
  "past-indefinite": {
    descBn: "যে কাজ অতীতে নির্দিষ্ট সময়ে ঘটে শেষ হয়ে গেছে, তা বোঝাতে Past Indefinite ব্যবহৃত হয়।",
    usesBn: ["শেষ হওয়া কাজ: সে গতকাল স্কুলে গিয়েছিল।", "অতীত অভ্যাস: আমরা প্রতি সন্ধ্যায় এখানে খেলতাম।"],
    rule: "Subject-এর পর verb-এর V2 বসে। Negative-এ did not এবং প্রশ্নে Did Subject-এর আগে বসে; তখন verb আবার V1 হয়ে যায়।",
    notes: [
      ["After did / did not always use V1: did not go (not did not went).", "did / did not-এর পরে সবসময় V1 হয়: did not go (did not went নয়)।"],
      ["Time words: yesterday, last week, ago, in 2020.", "সময়সূচক শব্দ: yesterday, last week, ago, in 2020।"],
    ],
    diff: ["vs Past Continuous: Indefinite = action finished; Continuous = action in progress at a past moment. (I wrote a letter. / I was writing a letter at 5.)",
      "Past Continuous-এর সাথে পার্থক্য: Indefinite-এ কাজ শেষ; Continuous-এ অতীতের নির্দিষ্ট মুহূর্তে কাজ চলছিল। (আমি চিঠি লিখলাম। / আমি ৫টায় চিঠি লিখছিলাম।)"],
  },
  "past-continuous": {
    descBn: "যে কাজ অতীতের কোনো নির্দিষ্ট সময়ে চলছিল, তা বোঝাতে Past Continuous ব্যবহৃত হয়।",
    usesBn: ["অতীতের নির্দিষ্ট সময়ে চলমান কাজ: তারা রাত ৮টায় টিভি দেখছিল।", "বাধাপ্রাপ্ত কাজ: বৃষ্টি শুরু হলে আমি হাঁটছিলাম।"],
    rule: "Subject-এর পর was/were এবং verb-এর সাথে ing বসে। I/he/she/it-এর সাথে was, we/you/they-এর সাথে were বসে। Negative-এ was/were-এর পর not; প্রশ্নে was/were Subject-এর আগে যায়।",
    notes: [
      ["Use when + Past Indefinite for the interrupting action.", "বাধা দানকারী কাজে when + Past Indefinite ব্যবহার করা হয়।"],
      ["While joins two continuous past actions.", "দুটি চলমান অতীত কাজ যুক্ত করতে while ব্যবহৃত হয়।"],
    ],
    diff: ["vs Past Perfect Continuous: Past Continuous = in progress at a past moment; Past Perfect Continuous = had been going on for some time before it. (He was working at 5. / He had been working for three hours.)",
      "Past Perfect Continuous-এর সাথে পার্থক্য: Past Continuous-এ নির্দিষ্ট অতীত মুহূর্তে কাজ চলছিল; Past Perfect Continuous-এ তার আগে থেকে কিছু সময় ধরে কাজ চলছিল। (সে ৫টায় কাজ করছিল। / সে তিন ঘণ্টা ধরে কাজ করছিল।)"],
  },
  "past-perfect": {
    descBn: "অতীতের দুটি কাজের মধ্যে যেটি আগে শেষ হয়েছে, তা বোঝাতে Past Perfect ব্যবহৃত হয়।",
    usesBn: ["আগে ঘটা কাজ: ডাক্তার আসার আগেই রোগী মারা গিয়েছিল।", "before, after, already, by the time-এর সাথে ব্যবহৃত হয়।"],
    rule: "Subject-এর পর had এবং verb-এর V3 বসে। সব Subject-এর সাথে had বসে। Negative-এ had-এর পর not; প্রশ্নে Had Subject-এর আগে যায়।",
    notes: [
      ["Earlier action = Past Perfect, later action = Past Indefinite.", "আগের কাজে Past Perfect, পরের কাজে Past Indefinite বসে।"],
      ["After had, the verb is always V3.", "had-এর পরে verb সবসময় V3 হয়।"],
    ],
    diff: ["vs Past Indefinite: Past Perfect = the earlier action; Past Indefinite = the later one. (The train had left before I reached.)",
      "Past Indefinite-এর সাথে পার্থক্য: Past Perfect আগের কাজ; Past Indefinite পরের কাজ। (আমি পৌঁছানোর আগেই ট্রেন ছেড়ে গিয়েছিল।)"],
  },
  "past-perfect-continuous": {
    descBn: "অতীতের কোনো মুহূর্তের আগে থেকে যে কাজ কিছু সময় ধরে চলছিল, তা বোঝাতে Past Perfect Continuous ব্যবহৃত হয়।",
    usesBn: ["for ও since-এর সাথে ব্যবহৃত হয়।", "আমি পৌঁছানোর সময় সে তিন ঘণ্টা ধরে কাজ করছিল।"],
    rule: "Subject-এর পর had been এবং verb-এর সাথে ing বসে। Negative-এ had-এর পর not; প্রশ্নে Had Subject-এর আগে যায়।",
    notes: [
      ["There is always a past reference point (when I arrived).", "সবসময় একটি অতীত রেফারেন্স মুহূর্ত থাকে (when I arrived)।"],
      ["Duration is shown with for or since.", "সময়কাল for বা since দিয়ে বোঝানো হয়।"],
    ],
    diff: ["vs Past Perfect: Perfect stresses completion; Perfect Continuous stresses duration. (She had finished her work. / She had been working for hours.)",
      "Past Perfect-এর সাথে পার্থক্য: Perfect-এ কাজ শেষ হওয়ার ওপর জোর; Perfect Continuous-এ কাজের সময়কালের ওপর জোর। (সে তার কাজ শেষ করেছিল। / সে কয়েক ঘণ্টা ধরে কাজ করছিল।)"],
  },
  "future-indefinite": {
    descBn: "যে কাজ ভবিষ্যতে ঘটবে, তা বোঝাতে Future Indefinite ব্যবহৃত হয়।",
    usesBn: ["পূর্বাভাস ও পরিকল্পনা: সে আগামী মাসে কক্সবাজারে যাবে।", "প্রতিশ্রুতি: আমি তোমাকে সাহায্য করব।"],
    rule: "Subject-এর পর will/shall এবং verb-এর V1 বসে। I/we-এর সাথে shall, বাকিদের সাথে will বসে (বর্তমানে will-ই বেশি প্রচলিত)। Negative-এ will/shall-এর পর not; প্রশ্নে Will/Shall Subject-এর আগে যায়।",
    notes: [
      ["After will/shall, always use V1.", "will/shall-এর পরে সবসময় V1 হয়।"],
      ["Time words: tomorrow, next week, soon.", "সময়সূচক শব্দ: tomorrow, next week, soon।"],
    ],
    diff: ["vs Future Continuous: Indefinite = action will happen; Continuous = action will be in progress at a future time. (I will call you. / I will be sleeping at 10.)",
      "Future Continuous-এর সাথে পার্থক্য: Indefinite-এ কাজ ঘটবে; Continuous-এ ভবিষ্যতের নির্দিষ্ট সময়ে কাজ চলতে থাকবে। (আমি তোমাকে ফোন করব। / রাত ১০টায় আমি ঘুমিয়ে থাকব।)"],
  },
  "future-continuous": {
    descBn: "ভবিষ্যতের কোনো নির্দিষ্ট সময়ে যে কাজ চলতে থাকবে, তা বোঝাতে Future Continuous ব্যবহৃত হয়।",
    usesBn: ["ভবিষ্যতে চলমান কাজ: আমরা বিকাল ৫টায় অপেক্ষা করতে থাকব।", "আনুষ্ঠানিক ইংরেজিতে I/we-এর সাথে shall ব্যবহৃত হয়।"],
    rule: "Subject-এর পর will/shall be এবং verb-এর সাথে ing বসে। Negative-এ will/shall-এর পর not; প্রশ্নে Will/Shall Subject-এর আগে যায়।",
    notes: [
      ["The structure is will be + V-ing; 'be' must not be dropped.", "গঠন will be + V-ing; 'be' বাদ দেওয়া যাবে না।"],
      ["A future time (at 5 pm) is usually mentioned.", "সাধারণত ভবিষ্যতের একটি নির্দিষ্ট সময় (at 5 pm) উল্লেখ থাকে।"],
    ],
    diff: ["vs Future Perfect: Continuous = still in progress then; Perfect = already completed by then. (He will be working at 5. / He will have worked by 5.)",
      "Future Perfect-এর সাথে পার্থক্য: Continuous-এ তখনও কাজ চলতে থাকবে; Perfect-এ তখন কাজ শেষ হয়ে যাবে। (সে ৫টায় কাজ করতে থাকবে। / সে ৫টার মধ্যে কাজ শেষ করে ফেলবে।)"],
  },
  "future-perfect": {
    descBn: "ভবিষ্যতের কোনো নির্দিষ্ট সময়ের আগে যে কাজ শেষ হয়ে যাবে, তা বোঝাতে Future Perfect ব্যবহৃত হয়।",
    usesBn: ["ভবিষ্যৎ সময়ের মধ্যে সম্পন্ন কাজ: সে বিকাল ৫টার মধ্যে কাজটি শেষ করে ফেলবে।", "by, by the time, before-এর সাথে ব্যবহৃত হয়।"],
    rule: "Subject-এর পর will/shall have এবং verb-এর V3 বসে। Negative-এ will/shall-এর পর not; প্রশ্নে Will/Shall Subject-এর আগে যায়।",
    notes: [
      ["After have, the verb is always V3.", "have-এর পরে verb সবসময় V3 হয়।"],
      ["'by' + a future time is the usual clue.", "'by' + ভবিষ্যৎ সময় এর সাধারণ ইঙ্গিত।"],
    ],
    diff: ["vs Future Indefinite: Future Perfect = completed before a future time; Future Indefinite = simply will happen. (He will do it. / He will have done it by 5.)",
      "Future Indefinite-এর সাথে পার্থক্য: Future Perfect-এ নির্দিষ্ট ভবিষ্যৎ সময়ের আগেই কাজ শেষ; Future Indefinite-এ শুধু কাজটি ঘটবে। (সে এটি করবে। / সে ৫টার মধ্যে এটি করে ফেলবে।)"],
  },
  "future-perfect-continuous": {
    descBn: "ভবিষ্যতের কোনো সময় পর্যন্ত একটি কাজ কতক্ষণ ধরে চলতে থাকবে তা বোঝাতে Future Perfect Continuous ব্যবহৃত হয়। দৈনন্দিন ইংরেজিতে এটি কম ব্যবহৃত হয়।",
    usesBn: ["ভবিষ্যৎ সময় পর্যন্ত সময়কাল: সে এখানে পাঁচ বছর ধরে কাজ করতে থাকবে।", "সবসময় for + সময়কালের সাথে ব্যবহৃত হয়।"],
    rule: "Subject-এর পর will/shall have been এবং verb-এর সাথে ing বসে। Negative-এ will/shall-এর পর not; প্রশ্নে Will/Shall Subject-এর আগে যায়।",
    notes: [
      ["It needs two time ideas: a duration (for five years) and a future point (by next month).", "দুটি সময়ের ধারণা লাগে: সময়কাল (for five years) এবং ভবিষ্যৎ মুহূর্ত (by next month)।"],
      ["It is rarely used; Future Perfect is often enough.", "খুব কম ব্যবহৃত হয়; অনেক সময় Future Perfect-ই যথেষ্ট।"],
    ],
    diff: ["vs Future Perfect: Perfect stresses completion; Perfect Continuous stresses duration. (He will have finished it. / He will have been working for five years.)",
      "Future Perfect-এর সাথে পার্থক্য: Perfect-এ কাজ শেষ হওয়ার ওপর জোর; Perfect Continuous-এ সময়কালের ওপর জোর। (সে এটি শেষ করে ফেলবে। / সে পাঁচ বছর ধরে কাজ করতে থাকবে।)"],
  },
};
