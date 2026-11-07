// Every text is either a plain string or [English, Bengali].
const NOTES = ["Important Notes", "গুরুত্বপূর্ণ নোট"];
const DIFF = ["Difference", "পার্থক্য"];
const TH = ["Type · ধরন", "Structure · গঠন", "Example · উদাহরণ"];
const I = ["Indefinite", "সাধারণ"];
const C = ["Continuous", "ঘটমান"];
const P = ["Perfect", "পুরাঘটিত"];
const PC = ["Perfect Continuous", "পুরাঘটিত ঘটমান"];

export const lessons = [
  /* ------------------------------ TENSE ------------------------------ */
  {
    slug: "tense",
    custom: true,
    title: "Tense",
    bn: "কাল",
    icon: "⏳",
    intro: [
      "Tense shows the time of an action. English has 3 times (present, past, future) and 4 forms each, making 12 tenses.",
      "Tense (কাল) দ্বারা কাজ সম্পাদনের সময় বোঝায়। ইংরেজিতে তিনটি সময় (বর্তমান, অতীত, ভবিষ্যৎ) এবং প্রতিটির চারটি রূপ, মোট ১২টি Tense।",
    ],
    sections: [
      {
        heading: ["Present Tense", "বর্তমান কাল"],
        table: { head: TH, rows: [
          [I, "Sub + V1 (s/es) + Obj", ["He plays cricket.", "সে ক্রিকেট খেলে।"]],
          [C, "Sub + am/is/are + V-ing + Obj", ["He is playing cricket.", "সে ক্রিকেট খেলছে।"]],
          [P, "Sub + has/have + V3 + Obj", ["He has played cricket.", "সে ক্রিকেট খেলেছে।"]],
          [PC, "Sub + has/have been + V-ing + Obj", ["He has been playing for an hour.", "সে এক ঘণ্টা ধরে খেলছে।"]],
        ] },
      },
      {
        heading: ["Past Tense", "অতীত কাল"],
        table: { head: TH, rows: [
          [I, "Sub + V2 + Obj", ["He played cricket.", "সে ক্রিকেট খেলল।"]],
          [C, "Sub + was/were + V-ing + Obj", ["He was playing cricket.", "সে ক্রিকেট খেলছিল।"]],
          [P, "Sub + had + V3 + Obj", ["He had played cricket.", "সে ক্রিকেট খেলা শেষ করেছিল।"]],
          [PC, "Sub + had been + V-ing + Obj", ["He had been playing for an hour.", "সে এক ঘণ্টা ধরে খেলছিল।"]],
        ] },
      },
      {
        heading: ["Future Tense", "ভবিষ্যৎ কাল"],
        table: { head: TH, rows: [
          [I, "Sub + will/shall + V1 + Obj", ["He will play cricket.", "সে ক্রিকেট খেলবে।"]],
          [C, "Sub + will/shall be + V-ing + Obj", ["He will be playing cricket.", "সে ক্রিকেট খেলতে থাকবে।"]],
          [P, "Sub + will/shall have + V3 + Obj", ["He will have played cricket.", "সে ক্রিকেট খেলে ফেলবে।"]],
          [PC, "Sub + will/shall have been + V-ing + Obj", ["He will have been playing for an hour.", "সে এক ঘণ্টা ধরে খেলতে থাকবে।"]],
        ] },
      },
      {
        heading: ["Difference between related tenses", "সম্পর্কিত Tense-এর পার্থক্য"],
        variant: "diff",
        table: {
          head: ["Tenses · কাল", "Difference · পার্থক্য", "Example · উদাহরণ"],
          rows: [
            ["Present Indefinite vs Present Continuous",
              ["Indefinite = habit or truth; Continuous = happening now.", "Indefinite-এ অভ্যাস বা সত্য বোঝায়; Continuous-এ এখন যা ঘটছে তা বোঝায়।"],
              [`He reads daily. / He is reading now.`, "সে প্রতিদিন পড়ে। / সে এখন পড়ছে।"]],
            ["Present Perfect vs Past Indefinite",
              ["Perfect has no definite time and the result matters now; Past Indefinite has a definite past time.", "Perfect-এ নির্দিষ্ট সময় থাকে না, ফল বর্তমানে প্রাসঙ্গিক; Past Indefinite-এ নির্দিষ্ট অতীত সময় থাকে।"],
              ["I have eaten. / I ate at 2 pm.", "আমি খেয়েছি। / আমি দুপুর ২টায় খেয়েছিলাম।"]],
            ["Present Perfect vs Present Perfect Continuous",
              ["Perfect stresses completion; Perfect Continuous stresses how long.", "Perfect-এ কাজ শেষ হওয়ার ওপর জোর; Perfect Continuous-এ কতক্ষণ ধরে চলছে তার ওপর জোর।"],
              ["He has written a letter. / He has been writing for an hour.", "সে একটি চিঠি লিখেছে। / সে এক ঘণ্টা ধরে লিখছে।"]],
            ["Past Indefinite vs Past Continuous",
              ["Indefinite = action finished; Continuous = action in progress at a past moment.", "Indefinite-এ কাজ শেষ; Continuous-এ অতীতের নির্দিষ্ট মুহূর্তে কাজ চলছিল।"],
              ["I wrote a letter. / I was writing a letter at 5.", "আমি চিঠি লিখলাম। / আমি ৫টায় চিঠি লিখছিলাম।"]],
            ["Past Indefinite vs Past Perfect",
              ["Past Perfect = the earlier action; Past Indefinite = the later action.", "Past Perfect আগের কাজ; Past Indefinite পরের কাজ।"],
              ["The train had left when I reached.", "আমি পৌঁছানোর আগেই ট্রেন ছেড়ে গিয়েছিল।"]],
          ],
        },
      },
      {
        heading: NOTES,
        variant: "note",
        points: [
          ["Time words: always, usually, every day → Present Indefinite; now → Continuous; already, just, yet, ever → Perfect; for, since → Perfect Continuous.",
            "সময়সূচক শব্দ: always, usually, every day → Present Indefinite; now → Continuous; already, just, yet, ever → Perfect; for, since → Perfect Continuous।"],
          ["State verbs (know, like, want, believe) are not normally used in continuous tenses.",
            "know, like, want, believe-এর মতো state verb সাধারণত Continuous Tense-এ ব্যবহৃত হয় না।"],
          ["Add -s/-es to the verb only with he/she/it/singular nouns in Present Indefinite.",
            "Present Indefinite-এ he/she/it বা একবচন noun-এর সাথেই verb-এ s/es যুক্ত হয়।"],
          ["After will/shall always use V1. After did/does/do always use V1.",
            "will/shall-এর পরে সবসময় V1 বসে। did/does/do-এর পরেও সবসময় V1 বসে।"],
        ],
      },
    ],
  },

  /* ------------------------- ACTIVE TO PASSIVE ------------------------- */
  {
    slug: "active-to-passive",
    title: "Active to Passive",
    bn: "Active থেকে Passive",
    icon: "🔁",
    intro: [
      "Voice shows whether the subject does the action (Active) or receives it (Passive). To change Active to Passive, the object becomes the subject and the verb takes a 'be + V3' form.",
      "Voice (বাচ্য) দেখায় Subject কাজটি করছে (Active) নাকি কাজটি Subject-এর ওপর ঘটছে (Passive)। Active থেকে Passive করতে Object-কে Subject করা হয় এবং verb 'be + V3' রূপ নেয়।",
    ],
    sections: [
      {
        heading: ["What is Voice?", "Voice কী?"],
        table: {
          head: ["Voice · বাচ্য", "Meaning · অর্থ", "Example · উদাহরণ"],
          rows: [
            ["Active", ["Subject does the action", "Subject নিজে কাজ করে"], ["Rahim writes a letter.", "রহিম একটি চিঠি লেখে।"]],
            ["Passive", ["Subject receives the action", "Subject-এর ওপর কাজ ঘটে"], ["A letter is written by Rahim.", "রহিম দ্বারা একটি চিঠি লেখা হয়।"]],
          ],
        },
      },
      {
        heading: ["Steps to change", "পরিবর্তনের ধাপ"],
        points: [
          ["Step 1: Find the subject, verb and object.", "ধাপ ১: Subject, Verb ও Object চিহ্নিত করো।"],
          ["Step 2: Put the object in the subject's place.", "ধাপ ২: Object-কে Subject-এর জায়গায় বসাও।"],
          ["Step 3: Change the verb to the passive form (be + V3) according to the tense.", "ধাপ ৩: Tense অনুযায়ী verb-কে Passive রূপে (be + V3) পরিবর্তন করো।"],
          ["Step 4: Put 'by' + the old subject at the end.", "ধাপ ৪: শেষে 'by' + আগের Subject বসাও।"],
        ],
      },
      {
        heading: ["Rules by Tense", "Tense অনুযায়ী নিয়ম"],
        table: {
          head: ["Tense · কাল", "Passive structure · গঠন", "Active → Passive · উদাহরণ"],
          rows: [
            [["Present Indefinite", "সাধারণ বর্তমান"], "Obj + am/is/are + V3", ["Rahim writes a letter. → A letter is written by Rahim.", "রহিম একটি চিঠি লেখে। → রহিম দ্বারা একটি চিঠি লেখা হয়।"]],
            [["Present Continuous", "ঘটমান বর্তমান"], "Obj + am/is/are being + V3", ["Rahim is writing a letter. → A letter is being written by Rahim.", "রহিম একটি চিঠি লিখছে। → রহিম দ্বারা একটি চিঠি লেখা হচ্ছে।"]],
            [["Present Perfect", "পুরাঘটিত বর্তমান"], "Obj + has/have been + V3", ["Rahim has written a letter. → A letter has been written by Rahim.", "রহিম একটি চিঠি লিখেছে। → রহিম দ্বারা একটি চিঠি লেখা হয়েছে।"]],
            [["Past Indefinite", "সাধারণ অতীত"], "Obj + was/were + V3", ["Rahim wrote a letter. → A letter was written by Rahim.", "রহিম একটি চিঠি লিখেছিল। → রহিম দ্বারা একটি চিঠি লেখা হয়েছিল।"]],
            [["Past Continuous", "ঘটমান অতীত"], "Obj + was/were being + V3", ["Rahim was writing a letter. → A letter was being written by Rahim.", "রহিম একটি চিঠি লিখছিল। → রহিম দ্বারা একটি চিঠি লেখা হচ্ছিল।"]],
            [["Past Perfect", "পুরাঘটিত অতীত"], "Obj + had been + V3", ["Rahim had written a letter. → A letter had been written by Rahim.", "রহিম একটি চিঠি লিখে ফেলেছিল। → রহিম দ্বারা একটি চিঠি লেখা হয়ে গিয়েছিল।"]],
            [["Future Indefinite", "সাধারণ ভবিষ্যৎ"], "Obj + will be + V3", ["Rahim will write a letter. → A letter will be written by Rahim.", "রহিম একটি চিঠি লিখবে। → রহিম দ্বারা একটি চিঠি লেখা হবে।"]],
            [["Future Perfect", "পুরাঘটিত ভবিষ্যৎ"], "Obj + will have been + V3", ["Rahim will have written a letter. → A letter will have been written by Rahim.", "রহিম একটি চিঠি লিখে ফেলবে। → রহিম দ্বারা একটি চিঠি লেখা হয়ে যাবে।"]],
            [["Modals (can/may/must)", "Modal verb"], "Obj + modal + be + V3", ["You must obey the rules. → The rules must be obeyed by you.", "তোমাকে অবশ্যই নিয়ম মানতে হবে। → নিয়মগুলো তোমার দ্বারা অবশ্যই মানা উচিত।"]],
          ],
        },
      },
      {
        heading: ["Other sentence types", "অন্যান্য বাক্যের ধরন"],
        table: {
          head: ["Type · ধরন", "Rule · নিয়ম", "Example · উদাহরণ"],
          rows: [
            [["Interrogative", "প্রশ্নবোধক"], ["Begin with am/is/are/was/were etc., then the new subject + V3.", "am/is/are/was/were ইত্যাদি দিয়ে শুরু করে নতুন Subject + V3 বসাও।"],
              ["Does Rahim write a letter? → Is a letter written by Rahim?", "রহিম কি চিঠি লেখে? → রহিম দ্বারা কি চিঠি লেখা হয়?"]],
            [["Wh- question", "Wh-প্রশ্ন"], ["Who becomes 'by whom'; the rest follows the tense rule.", "Who হয়ে যায় 'by whom'; বাকি অংশ Tense-এর নিয়ম মেনে চলে।"],
              ["Who wrote the letter? → By whom was the letter written?", "কে চিঠিটি লিখেছিল? → চিঠিটি কার দ্বারা লেখা হয়েছিল?"]],
            [["Imperative", "আদেশসূচক"], ["Use 'Let + object + be + V3'.", "'Let + object + be + V3' ব্যবহার করো।"],
              ["Close the door. → Let the door be closed.", "দরজাটি বন্ধ করো। → দরজাটি বন্ধ করা হোক।"]],
          ],
        },
      },
      {
        heading: ["Pronoun changes", "Pronoun-এর পরিবর্তন"],
        table: {
          head: ["Subject (Active)", "Object (Passive)", "বাংলা"],
          rows: [
            ["I", "me", "আমি → আমাকে"], ["we", "us", "আমরা → আমাদের"], ["he", "him", "সে (ছেলে) → তাকে"],
            ["she", "her", "সে (মেয়ে) → তাকে"], ["they", "them", "তারা → তাদের"], ["you", "you", "তুমি → তোমাকে"],
          ],
        },
      },
      {
        heading: ["Active vs Passive", "Active ও Passive-এর পার্থক্য"],
        variant: "diff",
        table: {
          head: ["Point · বিষয়", "Active", "Passive"],
          rows: [
            [["Focus", "জোর"], ["Doer of the action", "যে কাজ করে"], ["Receiver of the action", "কাজ যার ওপর ঘটে"]],
            [["Subject", "Subject"], ["Does the action", "নিজে কাজ করে"], ["Receives the action", "কাজ গ্রহণ করে"]],
            [["Verb form", "Verb-এর রূপ"], ["Main verb in its tense form", "Tense অনুযায়ী main verb"], "be + V3"],
            [["Use", "ব্যবহার"], ["When the doer is known and important", "কর্তা জানা ও গুরুত্বপূর্ণ হলে"], ["When the doer is unknown or unimportant", "কর্তা অজানা বা গুরুত্বহীন হলে"]],
          ],
        },
      },
      {
        heading: NOTES,
        variant: "note",
        points: [
          ["Perfect Continuous tenses normally have no passive form.", "Perfect Continuous Tense-এর সাধারণত Passive হয় না।"],
          ["Drop 'by + agent' when the doer is unknown or unimportant: 'The window was broken.'", "কর্তা অজানা বা গুরুত্বহীন হলে 'by + agent' বাদ দেওয়া যায়: 'The window was broken.' (জানালাটি ভাঙা হয়েছিল।)"],
          ["Intransitive verbs (go, come, sleep) have no object, so they cannot be made passive.", "Intransitive verb (go, come, sleep)-এর Object থাকে না, তাই এদের Passive করা যায় না।"],
          ["Some verbs take a preposition other than 'by': be known to, be filled with, be surprised at.", "কিছু verb-এর পরে 'by' ছাড়া অন্য preposition বসে: be known to, be filled with, be surprised at।"],
        ],
      },
    ],
  },

  /* ------------------------------ NARRATION ------------------------------ */
  {
    slug: "narration",
    title: "Narration",
    bn: "Direct থেকে Indirect",
    icon: "💬",
    intro: [
      "Narration (Direct and Indirect Speech) reports what someone said. Direct speech quotes the exact words; indirect speech reports their meaning without quotation marks.",
      "Narration (Direct ও Indirect Speech) দ্বারা কেউ কী বলেছে তা প্রকাশ করা হয়। Direct Speech-এ বক্তার হুবহু কথা উদ্ধৃতি চিহ্নের ভেতরে থাকে; Indirect Speech-এ উদ্ধৃতি চিহ্ন ছাড়া কথার ভাবার্থ প্রকাশ করা হয়।",
    ],
    sections: [
      {
        heading: ["Parts of a sentence", "বাক্যের অংশ"],
        table: {
          head: ["Part · অংশ", "Meaning · অর্থ", "Example · উদাহরণ"],
          rows: [
            ["Reporting verb", ["The speaker's verb (said, said to)", "বক্তার ক্রিয়া (said, said to)"], ["He said", "সে বলল"]],
            ["Reported speech", ["The words inside the quotation marks", "উদ্ধৃতি চিহ্নের ভেতরের কথা"], [`"I am busy."`, `"আমি ব্যস্ত।"`]],
          ],
        },
      },
      {
        heading: ["Steps to change", "পরিবর্তনের ধাপ"],
        points: [
          ["Step 1: Remove the comma and quotation marks and add a connector (that / if / whether / to).", "ধাপ ১: কমা ও উদ্ধৃতি চিহ্ন তুলে দিয়ে connector (that / if / whether / to) বসাও।"],
          ["Step 2: Change the reporting verb to suit the sentence type.", "ধাপ ২: বাক্যের ধরন অনুযায়ী reporting verb পরিবর্তন করো।"],
          ["Step 3: Change the person of the pronouns.", "ধাপ ৩: Pronoun-এর person পরিবর্তন করো।"],
          ["Step 4: Change the tense and the time/place words.", "ধাপ ৪: Tense এবং সময়/স্থান নির্দেশক শব্দ পরিবর্তন করো।"],
        ],
      },
      {
        heading: ["Sentence types", "বাক্যের ধরন"],
        table: {
          head: ["Type · ধরন", "Rule · নিয়ম", "Example · উদাহরণ"],
          rows: [
            [["Statement", "বর্ণনামূলক"], ["said → said; said to → told; connector: that", "said থাকলে said, said to থাকলে told হয়; connector: that"],
              [`He said, "I am busy." → He said that he was busy.`, `সে বলল, "আমি ব্যস্ত।" → সে বলল যে সে ব্যস্ত ছিল।`]],
            [["Yes/No question", "হ্যাঁ/না প্রশ্ন"], ["said to → asked; connector: if / whether; remove the question mark; use normal word order.", "said to → asked; connector: if / whether; প্রশ্নচিহ্ন বাদ; বাক্যের স্বাভাবিক গঠন।"],
              [`She said to me, "Do you play?" → She asked me if I played.`, `সে আমাকে বলল, "তুমি কি খেলো?" → সে আমাকে জিজ্ঞেস করল আমি খেলি কি না।`]],
            [["Wh- question", "Wh-প্রশ্ন"], ["said to → asked; the wh-word itself is the connector.", "said to → asked; wh-শব্দটিই connector হিসেবে থাকে।"],
              [`He said to me, "Where do you live?" → He asked me where I lived.`, `সে আমাকে বলল, "তুমি কোথায় থাকো?" → সে আমাকে জিজ্ঞেস করল আমি কোথায় থাকি।`]],
            [["Command / Request", "আদেশ / অনুরোধ"], ["said to → ordered / advised / requested; then to + V1.", "said to → ordered / advised / requested; তারপর to + V1 বসে।"],
              [`He said to me, "Sit down." → He ordered me to sit down.`, `সে আমাকে বলল, "বসো।" → সে আমাকে বসতে আদেশ করল।`]],
            [["Negative command", "না-বোধক আদেশ"], ["said to → ordered / advised / forbade; then not to + V1 (Do not is removed).", "said to → ordered / advised / forbade; তারপর not to + V1 বসে (Do not বাদ যায়)।"],
              [`The teacher said to the boys, "Do not make a noise." → The teacher ordered the boys not to make a noise.`, `শিক্ষক ছেলেদের বললেন, "গোলমাল করো না।" → শিক্ষক ছেলেদের গোলমাল না করতে আদেশ করলেন।`]],
            [["Optative (prayer / wish)", "ইচ্ছা / প্রার্থনা"], ["said → prayed / wished; remove 'May'; connector: that; use might ('Had I...!' becomes 'had been').", "said → prayed / wished; 'May' বাদ; connector: that; might বসে ('Had I...!' হলে had been বসে)।"],
              [`He said to me, "May you be happy." → He prayed that I might be happy.`, `সে আমাকে বলল, "তুমি সুখী হও।" → সে প্রার্থনা করল যেন আমি সুখী হই।`]],
            [["Exclamation", "বিস্ময়সূচক"], ["said → exclaimed with joy / sorrow / surprise; remove the interjection (Hurrah, Alas); How/What → very/great; connector: that.", "said → exclaimed with joy / sorrow / surprise; Hurrah, Alas-এর মতো শব্দ বাদ; How/What → very/great; connector: that।"],
              [`The girl said, "How beautiful the bird is!" → The girl exclaimed with joy that the bird was very beautiful.`, `মেয়েটি বলল, "পাখিটি কী সুন্দর!" → মেয়েটি আনন্দে বলল যে পাখিটি খুবই সুন্দর ছিল।`]],
          ],
        },
      },
            {
        heading: ["Which word decides? The reporting verb", "কোন শব্দ নির্ধারণ করে? Reporting verb"],
        intro: [
          "Look at the reporting verb first. Only a past-tense reporting verb changes the tense of the speech.",
          "আগে reporting verb দেখো। শুধু অতীত Tense-এর reporting verb হলেই উক্তির Tense বদলায়।",
        ],
        table: {
          head: ["Reporting verb · Reporting verb", "Tense of the speech · উক্তির Tense", "Example · উদাহরণ"],
          rows: [
            [["Past (said, said to, told, asked, replied, ordered)", "অতীত (said, said to, told, asked, replied, ordered)"],
              ["Changes: one step back", "পরিবর্তন হয়: এক ধাপ পেছনে"],
              [`He said, "I am ill." → He said that he was ill.`, `সে বলল, "আমি অসুস্থ।" → সে বলল যে সে অসুস্থ ছিল।`]],
            [["Present (say, says, tell, tells)", "বর্তমান (say, says, tell, tells)"],
              ["No change", "পরিবর্তন হয় না"],
              [`He says, "I am ill." → He says that he is ill.`, `সে বলে, "আমি অসুস্থ।" → সে বলে যে সে অসুস্থ।`]],
            [["Present Perfect (has said, have told)", "Present Perfect (has said, have told)"],
              ["No change", "পরিবর্তন হয় না"],
              [`He has said, "I am ill." → He has said that he is ill.`, `সে বলেছে, "আমি অসুস্থ।" → সে বলেছে যে সে অসুস্থ।`]],
            [["Future (will say, will tell)", "ভবিষ্যৎ (will say, will tell)"],
              ["No change", "পরিবর্তন হয় না"],
              [`He will say, "I am ill." → He will say that he is ill.`, `সে বলবে, "আমি অসুস্থ।" → সে বলবে যে সে অসুস্থ।`]],
          ],
        },
      },
      {
        heading: ["How far to backshift (reporting verb in the past)", "কতটা Backshift হবে (reporting verb অতীত হলে)"],
        intro: [
          "Move the tense exactly one step back. Never go two steps back, and Past Perfect stays as it is.",
          "Tense শুধু এক ধাপ পিছিয়ে যায়। দুই ধাপ নয়, আর Past Perfect অপরিবর্তিত থাকে।",
        ],
        table: {
          head: ["Direct → Indirect (one step)", "Example · উদাহরণ"],
          rows: [
            ["Present Indefinite → Past Indefinite", [`He said, "I play." → He said that he played.`, `সে বলল, "আমি খেলি।" → সে বলল যে সে খেলত।`]],
            ["Present Continuous → Past Continuous", [`He said, "I am playing." → He said that he was playing.`, `সে বলল, "আমি খেলছি।" → সে বলল যে সে খেলছিল।`]],
            ["Present Perfect → Past Perfect", [`He said, "I have played." → He said that he had played.`, `সে বলল, "আমি খেলেছি।" → সে বলল যে সে খেলেছিল।`]],
            ["Present Perfect Continuous → Past Perfect Continuous", [`He said, "I have been playing for an hour." → He said that he had been playing for an hour.`, `সে বলল, "আমি এক ঘণ্টা ধরে খেলছি।" → সে বলল যে সে এক ঘণ্টা ধরে খেলছিল।`]],
            ["Past Indefinite → Past Perfect", [`He said, "I played." → He said that he had played.`, `সে বলল, "আমি খেললাম।" → সে বলল যে সে খেলেছিল।`]],
            ["Past Continuous → Past Perfect Continuous", [`He said, "I was playing." → He said that he had been playing.`, `সে বলল, "আমি খেলছিলাম।" → সে বলল যে সে খেলছিল।`]],
            ["Past Perfect → Past Perfect (no further change)", [`He said, "I had played." → He said that he had played.`, `সে বলল, "আমি খেলে ফেলেছিলাম।" → সে বলল যে সে খেলে ফেলেছিল।`]],
            ["will → would", [`He said, "I will play." → He said that he would play.`, `সে বলল, "আমি খেলব।" → সে বলল যে সে খেলবে।`]],
            ["shall → would / should", [`He said, "I shall go." → He said that he would go.`, `সে বলল, "আমি যাব।" → সে বলল যে সে যাবে।`]],
            ["can → could", [`He said, "I can swim." → He said that he could swim.`, `সে বলল, "আমি সাঁতার কাটতে পারি।" → সে বলল যে সে সাঁতার কাটতে পারত।`]],
            ["may → might", [`He said, "I may come." → He said that he might come.`, `সে বলল, "আমি আসতে পারি।" → সে বলল যে সে আসতে পারে।`]],
            ["must → had to (obligation)", [`He said, "I must go." → He said that he had to go.`, `সে বলল, "আমাকে যেতেই হবে।" → সে বলল যে তাকে যেতেই হত।`]],
          ],
        },
      },
      {
        heading: ["When the tense does NOT change (even with a past reporting verb)", "কখন Tense বদলায় না (reporting verb অতীত হলেও)"],
        variant: "diff",
        table: {
          head: ["Case · ক্ষেত্র", "How to recognise · চেনার উপায়", "Example · উদাহরণ"],
          rows: [
            [["Universal truth", "চিরন্তন সত্য"],
              ["Scientific facts, general truths, proverbs", "বৈজ্ঞানিক তথ্য, সাধারণ সত্য, প্রবাদ"],
              [`The teacher said, "The earth moves round the sun." → The teacher said that the earth moves round the sun.`, `শিক্ষক বললেন, "পৃথিবী সূর্যের চারপাশে ঘোরে।" → শিক্ষক বললেন যে পৃথিবী সূর্যের চারপাশে ঘোরে।`]],
            [["Habit or still-true fact", "অভ্যাস বা এখনও সত্য ঘটনা"],
              ["The fact is still true when it is reported (optional)", "রিপোর্টের সময়ও ঘটনাটি সত্য থাকলে (ঐচ্ছিক)"],
              [`He said, "I live in Dhaka." → He said that he lives in Dhaka.`, `সে বলল, "আমি ঢাকায় থাকি।" → সে বলল যে সে ঢাকায় থাকে।`]],
            [["Past Perfect / Past Perfect Continuous", "Past Perfect / Past Perfect Continuous"],
              ["The verb has 'had + V3' or 'had been + V-ing'; it is already the furthest past", "Verb-এ 'had + V3' বা 'had been + V-ing' থাকলে; এটি আগে থেকেই সবচেয়ে পেছনের Tense"],
              [`He said, "I had finished the work." → He said that he had finished the work.`, `সে বলল, "আমি কাজটি শেষ করে ফেলেছিলাম।" → সে বলল যে সে কাজটি শেষ করে ফেলেছিল।`]],
            [["would, could, should, might, ought to, used to", "would, could, should, might, ought to, used to"],
              ["The verb already contains one of these", "Verb-এ আগে থেকেই এগুলোর একটি থাকলে"],
              [`She said, "I could swim." → She said that she could swim.`, `সে বলল, "আমি সাঁতার কাটতে পারতাম।" → সে বলল যে সে সাঁতার কাটতে পারত।`]],
            [["Unreal past (if, wish, as if)", "কাল্পনিক অতীত (if, wish, as if)"],
              ["The past form shows an imaginary situation", "Past form কোনো কাল্পনিক অবস্থা বোঝায়"],
              [`He said, "I wish I were a bird." → He said that he wished he were a bird.`, `সে বলল, "আমি যদি পাখি হতাম!" → সে বলল যে সে যদি পাখি হতো!`]],
          ],
        },
      },
      {
        heading: ["Time & place words", "সময় ও স্থান নির্দেশক শব্দ"],
        table: {
          head: ["Direct", "Indirect", "বাংলা"],
          rows: [
            ["now", "then", "এখন → তখন"], ["today", "that day", "আজ → সেদিন"], ["tomorrow", "the next day", "আগামীকাল → পরের দিন"],
            ["yesterday", "the previous day", "গতকাল → আগের দিন"], ["here", "there", "এখানে → সেখানে"], ["this", "that", "এটি → ওটি"], ["ago", "before", "আগে → পূর্বে"],
            ["last year", "the previous year", "গত বছর → আগের বছর"],
            ["next year", "the following year", "আগামী বছর → পরের বছর"],
            ["last night", "the previous night", "গত রাত → আগের রাত"],
          ],
        },
      },
      {
        heading: ["Change of person", "Person পরিবর্তনের নিয়ম"],
        table: {
          head: ["Person · পুরুষ", "Rule · নিয়ম", "Example · উদাহরণ"],
          rows: [
            [["First person", "উত্তম পুরুষ"], ["Follows the subject of the reporting verb.", "Reporting verb-এর Subject অনুসারে হয়।"],
              [`He said, "I am happy." → He said that he was happy.`, `সে বলল, "আমি খুশি।" → সে বলল যে সে খুশি ছিল।`]],
            [["Second person", "মধ্যম পুরুষ"], ["Follows the object of the reporting verb.", "Reporting verb-এর Object অনুসারে হয়।"],
              [`He said to me, "You are late." → He told me that I was late.`, `সে আমাকে বলল, "তুমি দেরি করেছ।" → সে আমাকে বলল যে আমি দেরি করেছি।`]],
            [["Third person", "নাম পুরুষ"], ["Does not change.", "পরিবর্তন হয় না।"],
              [`She said, "He is kind." → She said that he was kind.`, `সে বলল, "সে দয়ালু।" → সে বলল যে সে দয়ালু ছিল।`]],
          ],
        },
      },
      {
        heading: ["Direct vs Indirect", "Direct ও Indirect-এর পার্থক্য"],
        variant: "diff",
        table: {
          head: ["Point · বিষয়", "Direct", "Indirect"],
          rows: [
            [["Quotation marks", "উদ্ধৃতি চিহ্ন"], ["Used", "ব্যবহৃত হয়"], ["Not used", "ব্যবহৃত হয় না"]],
            [["Words", "কথা"], ["Exact words of the speaker", "বক্তার হুবহু কথা"], ["Meaning of the speaker's words", "বক্তার কথার ভাবার্থ"]],
            [["Connector", "সংযোজক"], ["Only a comma", "শুধু কমা"], ["that, if, whether, to", "that, if, whether, to"]],
            [["Tense", "কাল"], ["Not changed", "পরিবর্তিত হয় না"], ["Changes by rule", "নিয়ম অনুযায়ী পরিবর্তিত হয়"]],
          ],
        },
      },
            {
        heading: ["Practice examples", "অনুশীলনী উদাহরণ"],
        table: {
          head: ["No · নং", "Direct → Indirect · উদাহরণ", "What changed · কী বদলাল"],
          rows: [
            ["1", [`He said, "I eat rice." → He said that he ate rice.`, `সে বলল, "আমি ভাত খাই।" → সে বলল যে সে ভাত খেত।`], "V1 → V2 (Present Indefinite → Past Indefinite)"],
            ["2", [`Rony said, "I am reading the book." → Rony said that he was reading the book.`, `রনি বলল, "আমি বইটি পড়ছি।" → রনি বলল যে সে বইটি পড়ছিল।`], "am/is/are → was/were (Continuous)"],
            ["3", [`They said, "We have done the work." → They said that they had done the work.`, `তারা বলল, "আমরা কাজটি করেছি।" → তারা বলল যে তারা কাজটি করেছিল।`], "have/has → had (Perfect)"],
            ["4", [`He said to me, "I will help you." → He told me that he would help me.`, `সে আমাকে বলল, "আমি তোমাকে সাহায্য করব।" → সে আমাকে বলল যে সে আমাকে সাহায্য করবে।`], "said to → told; will → would; I → he; you → me"],
            ["5", [`The girl said, "I can do the sum." → The girl said that she could do the sum.`, `মেয়েটি বলল, "আমি অঙ্কটি করতে পারি।" → মেয়েটি বলল যে সে অঙ্কটি করতে পারত।`], "can → could; I → she"],
            ["6", [`Mother said to me, "You may go to school." → Mother told me that I might go to school.`, `মা আমাকে বললেন, "তুমি স্কুলে যেতে পারো।" → মা আমাকে বললেন যে আমি স্কুলে যেতে পারি।`], "said to → told; may → might; you → I"],
            ["7", [`Karim said, "I bought a book last year." → Karim said that he had bought a book the previous year.`, `করিম বলল, "আমি গত বছর একটি বই কিনেছিলাম।" → করিম বলল যে সে আগের বছর একটি বই কিনেছিল।`], "V2 → had + V3; last year → the previous year"],
            ["8", [`He said, "I will come today." → He said that he would come that day.`, `সে বলল, "আমি আজ আসব।" → সে বলল যে সে সেদিন আসবে।`], "will → would; today → that day"],
            ["9", [`Rony said to me, "I bought a pen yesterday." → Rony told me that he had bought a pen the previous day.`, `রনি আমাকে বলল, "আমি গতকাল একটি কলম কিনেছি।" → রনি আমাকে বলল যে সে আগের দিন একটি কলম কিনেছিল।`], "V2 → had + V3; yesterday → the previous day"],
            ["10", [`They said, "We are playing now." → They said that they were playing then.`, `তারা বলল, "আমরা এখন খেলছি।" → তারা বলল যে তারা তখন খেলছিল।`], "are → were; now → then"],
            ["11", [`He said to me, "Are you hungry?" → He asked me if I was hungry.`, `সে আমাকে বলল, "তুমি কি ক্ষুধার্ত?" → সে আমাকে জিজ্ঞেস করল আমি ক্ষুধার্ত কি না।`], "Yes/No প্রশ্ন তাই if; are → was; ? বাদ"],
            ["12", [`Father said to me, "Will you go there?" → Father asked me if I would go there.`, `বাবা আমাকে বললেন, "তুমি কি সেখানে যাবে?" → বাবা আমাকে জিজ্ঞেস করলেন আমি সেখানে যাব কি না।`], "will → would; ? বাদ; if বসল"],
            ["13", [`The teacher said to the student, "What is your name?" → The teacher asked the student what his name was.`, `শিক্ষক ছাত্রটিকে বললেন, "তোমার নাম কী?" → শিক্ষক ছাত্রটিকে জিজ্ঞেস করলেন তার নাম কী ছিল।`], "Wh-শব্দই linker; is → was; Subject আগে, verb পরে বসল"],
            ["14", [`He said to me, "Do you like football?" → He asked me if I liked football.`, `সে আমাকে বলল, "তুমি কি ফুটবল পছন্দ করো?" → সে আমাকে জিজ্ঞেস করল আমি ফুটবল পছন্দ করি কি না।`], "Do বাদ; like → liked; if বসল"],
            ["15", [`Father said to Rony, "Did you go there?" → Father asked Rony if he had gone there.`, `বাবা রনিকে বললেন, "তুমি কি সেখানে গিয়েছিলে?" → বাবা রনিকে জিজ্ঞেস করলেন সে সেখানে গিয়েছিল কি না।`], "Past Indefinite → Past Perfect (had gone)"],
            ["16", [`The girl said to me, "Where do you live now?" → The girl asked me where I lived then.`, `মেয়েটি আমাকে বলল, "তুমি এখন কোথায় থাকো?" → মেয়েটি আমাকে জিজ্ঞেস করল আমি তখন কোথায় থাকতাম।`], "Wh-শব্দ linker; live → lived; now → then"],
            ["17", [`Father said to me, "Do not tell a lie." → Father advised me not to tell a lie.`, `বাবা আমাকে বললেন, "মিথ্যা বলো না।" → বাবা আমাকে মিথ্যা না বলতে উপদেশ দিলেন।`], "said to → advised; Do not → not to + V1"],
            ["18", [`He said to me, "May you live long." → He prayed that I might live long.`, `সে আমাকে বলল, "তুমি দীর্ঘজীবী হও।" → সে প্রার্থনা করল যেন আমি দীর্ঘজীবী হই।`], "said to → prayed; May বাদ; that + might (prayed me নয়)"],
            ["19", [`The teacher said, "May Allah bless you." → The teacher prayed that Allah might bless me.`, `শিক্ষক বললেন, "আল্লাহ তোমাকে আশীর্বাদ করুন।" → শিক্ষক প্রার্থনা করলেন যেন আল্লাহ আমাকে আশীর্বাদ করেন।`], "said → prayed; May → might; you → me"],
            ["20", [`Karim said, "Had I been a king!" → Karim wished that he had been a king.`, `করিম বলল, "আমি যদি রাজা হতাম!" → করিম বলল যে সে যদি রাজা হতো।`], "said → wished; Had I been → he had been"],
            ["21", [`The boy said, "Hurrah! We have won the game." → The boy exclaimed with joy that they had won the game.`, `ছেলেটি বলল, "হুররে! আমরা খেলায় জিতেছি।" → ছেলেটি আনন্দে বলল যে তারা খেলায় জিতেছিল।`], "Hurrah বাদ; exclaimed with joy; have won → had won"],
            ["22", [`He said, "Alas! My father is dead." → He exclaimed with sorrow that his father was dead.`, `সে বলল, "হায়! আমার বাবা মারা গেছেন।" → সে দুঃখে বলল যে তার বাবা মারা গিয়েছিলেন।`], "Alas বাদ; exclaimed with sorrow; is → was"],
            ["23", [`The girl said, "How beautiful the bird is!" → The girl exclaimed with joy that the bird was very beautiful.`, `মেয়েটি বলল, "পাখিটি কী সুন্দর!" → মেয়েটি আনন্দে বলল যে পাখিটি খুবই সুন্দর ছিল।`], "How → very; is → was"],
            ["24", [`The man said, "What a fool I am!" → The man exclaimed with sorrow that he was a great fool.`, `লোকটি বলল, "আমি কী বোকা!" → লোকটি দুঃখে বলল যে সে একজন বড় বোকা ছিল।`], "What a → a great; am → was"],
          ],
        },
      },
      {
        heading: NOTES,
        variant: "note",
        points: [
          ["Check the reporting verb first: the tense changes only when it is in the past tense.", "আগে reporting verb দেখো: সেটি অতীত Tense-এ থাকলেই কেবল Tense বদলায়।"],
          ["Backshift is only one step: Present → Past, Past → Past Perfect. Past Perfect never changes.", "Backshift শুধু এক ধাপ: Present → Past, Past → Past Perfect। Past Perfect কখনও বদলায় না।"],
          ["Pronouns change by the person rule even when the tense stays the same.", "Tense না বদলালেও Pronoun person-এর নিয়ম অনুযায়ী বদলায়।"],
          ["Time and place words change only when the report is made at a different time or place from the original speech.", "মূল উক্তির সময় বা স্থান থেকে রিপোর্টের সময় বা স্থান আলাদা হলেই কেবল time/place শব্দ বদলায়।"],
          ["In questions, remove the question mark and write in normal (assertive) word order.", "প্রশ্নবোধক বাক্যে প্রশ্নচিহ্ন তুলে দিয়ে বাক্যকে স্বাভাবিক (assertive) গঠনে লিখতে হয়।"],
          ["Choose the reporting verb by meaning: ordered, requested, advised, forbade.", "অর্থ অনুযায়ী reporting verb বাছাই করো: ordered, requested, advised, forbade।"],
        ],
      },
    ],
  },

  /* ------------------------------ ARTICLES ------------------------------ */
  {
    slug: "articles",
    title: "Articles",
    bn: "Article",
    icon: "🅰️",
    intro: [
      "Articles (a, an, the) come before nouns. 'A/An' are indefinite (any one); 'The' is definite (a specific one).",
      "Article (a, an, the) noun-এর আগে বসে। 'A/An' অনির্দিষ্ট (যেকোনো একটি) এবং 'The' নির্দিষ্ট (বিশেষ একটি) বোঝায়।",
    ],
    sections: [
      {
        heading: ["When to use", "কখন ব্যবহার করবে"],
        table: {
          head: ["Article", "Use · ব্যবহার", "Example · উদাহরণ"],
          rows: [
            ["a", ["Before a consonant sound", "ব্যঞ্জনধ্বনির আগে"], ["a book, a university, a one-taka note", "একটি বই, একটি বিশ্ববিদ্যালয়, একটি এক টাকার নোট"]],
            ["an", ["Before a vowel sound", "স্বরধ্বনির আগে"], ["an apple, an hour, an honest man", "একটি আপেল, এক ঘণ্টা, একজন সৎ লোক"]],
            ["the", ["Specific or already mentioned things", "নির্দিষ্ট বা আগে উল্লেখ করা জিনিস"], ["I saw a dog. The dog was big.", "আমি একটি কুকুর দেখলাম। কুকুরটি বড় ছিল।"]],
            ["the", ["Unique things, rivers, seas, mountain ranges", "অদ্বিতীয় বস্তু, নদী, সাগর, পর্বতমালা"], ["the sun, the Padma, the Himalayas", "সূর্য, পদ্মা নদী, হিমালয়"]],
            ["the", ["Superlatives and ordinals", "Superlative ও ক্রমবাচক সংখ্যা"], ["the best student, the first day", "সেরা ছাত্র, প্রথম দিন"]],
          ],
        },
      },
      {
        heading: ["When to omit", "কখন ব্যবহার করবে না"],
        points: [
          ["Plural or uncountable nouns in general: 'Water is essential.'", "সাধারণ অর্থে বহুবচন বা অগণনীয় noun-এর আগে article বসে না: 'Water is essential.' (পানি অপরিহার্য।)"],
          ["Languages and subjects: 'I study English.'", "ভাষা ও বিষয়ের নামের আগে বসে না: 'I study English.' (আমি ইংরেজি পড়ি।)"],
          ["Meals and most proper nouns: 'We had lunch.' 'Dhaka is big.'", "খাবারের বেলা ও অধিকাংশ নামবাচক noun-এর আগে বসে না: 'We had lunch.' (আমরা দুপুরের খাবার খেলাম।) 'Dhaka is big.' (ঢাকা বড় শহর।)"],
        ],
      },
      {
        heading: ["a / an vs the", "a / an ও the-এর পার্থক্য"],
        variant: "diff",
        table: {
          head: ["Point · বিষয়", "a / an", "the"],
          rows: [
            [["Meaning", "অর্থ"], ["Any one, not specific", "যেকোনো একটি, অনির্দিষ্ট"], ["A particular one", "নির্দিষ্ট একটি"]],
            [["Mention", "উল্লেখ"], ["First mention", "প্রথমবার উল্লেখ"], ["Already known or mentioned", "আগে জানা বা উল্লেখ করা"]],
            [["Number", "বচন"], ["Singular countable nouns only", "শুধু একবচন গণনীয় noun"], ["Singular, plural and uncountable", "একবচন, বহুবচন ও অগণনীয়"]],
            [["Example", "উদাহরণ"], ["I need a pen.", "আমার একটি কলম দরকার।"], ["Give me the pen.", "কলমটি আমাকে দাও।"]],
          ],
        },
      },
      {
        heading: NOTES,
        variant: "note",
        points: [
          ["a or an depends on the sound, not the spelling: a university, an hour.", "a বা an ধ্বনির ওপর নির্ভর করে, বানানের ওপর নয়: a university (ইউ = ব্যঞ্জনধ্বনি), an hour (h নিরব)।"],
          ["Use 'the' with superlatives: the tallest boy.", "Superlative-এর আগে 'the' বসে: the tallest boy (সবচেয়ে লম্বা ছেলে)।"],
          ["Use 'a/an' for professions: She is a doctor.", "পেশা বোঝাতে 'a/an' বসে: She is a doctor. (সে একজন ডাক্তার।)"],
          ["Do not use 'a/an' before plural or uncountable nouns.", "বহুবচন বা অগণনীয় noun-এর আগে 'a/an' বসে না।"],
        ],
      },
    ],
  },

  /* ---------------------------- PREPOSITIONS ---------------------------- */
  {
    slug: "prepositions",
    title: "Prepositions",
    bn: "Preposition",
    icon: "📍",
    intro: [
      "Prepositions show the relation of a noun or pronoun to another word, usually place, time or direction.",
      "Preposition noun বা pronoun-এর সাথে বাক্যের অন্য শব্দের সম্পর্ক বোঝায়, সাধারণত স্থান, সময় বা দিক।",
    ],
    sections: [
      {
        heading: ["In / On / At", "In / On / At"],
        table: {
          head: ["Preposition", "Time · সময়", "Place · স্থান"],
          rows: [
            ["at", ["at 5 pm, at noon, at night", "বিকাল ৫টায়, দুপুরে, রাতে"], ["at the door, at school, at the station", "দরজায়, স্কুলে, স্টেশনে"]],
            ["on", ["on Friday, on 21 February", "শুক্রবারে, ২১ ফেব্রুয়ারিতে"], ["on the table, on the wall, on the road", "টেবিলের ওপর, দেয়ালে, রাস্তায়"]],
            ["in", ["in June, in 2026, in the morning", "জুন মাসে, ২০২৬ সালে, সকালে"], ["in the room, in Dhaka, in Bangladesh", "ঘরে, ঢাকায়, বাংলাদেশে"]],
          ],
        },
      },
      {
        heading: ["Common appropriate prepositions", "প্রচলিত Appropriate Preposition"],
        table: {
          head: ["Word", "Preposition", "Example · উদাহরণ"],
          rows: [
            ["afraid", "of", ["She is afraid of dogs.", "সে কুকুরকে ভয় পায়।"]],
            ["good", "at", ["He is good at math.", "সে অঙ্কে ভালো।"]],
            ["depend", "on", ["It depends on you.", "এটি তোমার ওপর নির্ভর করে।"]],
            ["interested", "in", ["I am interested in coding.", "আমি কোডিংয়ে আগ্রহী।"]],
            ["married", "to", ["She is married to a doctor.", "সে একজন ডাক্তারের সাথে বিবাহিত।"]],
            ["different", "from", ["This is different from that.", "এটি ওটি থেকে আলাদা।"]],
          ],
        },
      },
      {
        heading: ["Similar prepositions compared", "সদৃশ Preposition-এর পার্থক্য"],
        variant: "diff",
        table: {
          head: ["Preposition", "Meaning · অর্থ", "Example · উদাহরণ"],
          rows: [
            ["at", ["A specific point", "নির্দিষ্ট একটি বিন্দু বা স্থান"], ["I am at the bus stop.", "আমি বাস স্টপে আছি।"]],
            ["on", ["On a surface", "কোনো তলের ওপর"], ["The book is on the table.", "বইটি টেবিলের ওপর আছে।"]],
            ["in", ["Inside an enclosed space or large area", "ঘেরা জায়গা বা বড় এলাকার ভেতরে"], ["The book is in the bag.", "বইটি ব্যাগের ভেতরে আছে।"]],
            ["between", ["Two persons or things", "দুইজন বা দুটি জিনিসের মধ্যে"], ["Divide it between the two boys.", "এটি দুই ছেলের মধ্যে ভাগ করো।"]],
            ["among", ["More than two", "দুইয়ের বেশির মধ্যে"], ["Divide it among the boys.", "এটি ছেলেদের মধ্যে ভাগ করো।"]],
          ],
        },
      },
      {
        heading: NOTES,
        variant: "note",
        points: [
          ["A preposition is followed by a noun, pronoun or gerund (V-ing): He is good at swimming.", "Preposition-এর পরে noun, pronoun বা gerund (V-ing) বসে: He is good at swimming. (সে সাঁতারে ভালো।)"],
          ["Use object-form pronouns after a preposition: with him, for me.", "Preposition-এর পরে pronoun-এর object রূপ বসে: with him, for me।"],
          ["Appropriate prepositions must be memorised with the word; there is no single rule.", "Appropriate preposition শব্দের সাথে মুখস্থ করতে হয়; এর কোনো একক নিয়ম নেই।"],
          ["No preposition before: yesterday, today, tomorrow, next, last.", "yesterday, today, tomorrow, next, last-এর আগে preposition বসে না।"],
        ],
      },
    ],
  },

  /* ------------------------------- VERBS ------------------------------- */
  {
    slug: "verbs",
    custom: true,
    title: "Verbs",
    bn: "গুরুত্বপূর্ণ Verb",
    icon: "📘",
    intro: [
      "A verb is a word that shows an action or a state. Every verb has four forms: V1, V2, V3 and V4.",
      "Verb হলো যে শব্দ কোনো কাজ বা অবস্থা বোঝায়। প্রতিটি verb-এর চারটি রূপ আছে: V1, V2, V3 ও V4।",
    ],
    sections: [
      {
        heading: ["The four forms", "চারটি রূপ"],
        table: {
          head: ["Form · রূপ", "Name · নাম", "Used in · ব্যবহার", "Example · উদাহরণ"],
          rows: [
            ["V1", ["Base form", "মূল রূপ"], ["Present Indefinite, Future, after do/did/will", "Present Indefinite, Future এবং do/did/will-এর পরে"], ["I go to school.", "আমি স্কুলে যাই।"]],
            ["V2", ["Past form", "অতীত রূপ"], "Past Indefinite", ["I went to school.", "আমি স্কুলে গিয়েছিলাম।"]],
            ["V3", ["Past participle", "অতীত কৃদন্ত"], ["Perfect tenses and Passive voice", "Perfect Tense ও Passive Voice"], ["I have gone to school.", "আমি স্কুলে গিয়েছি।"]],
            ["V4", "Present participle (V-ing)", ["Continuous tenses", "Continuous Tense"], ["I am going to school.", "আমি স্কুলে যাচ্ছি।"]],
          ],
        },
      },
      {
        heading: ["Regular vs Irregular verbs", "Regular ও Irregular Verb-এর পার্থক্য"],
        variant: "diff",
        table: {
          head: ["Point · বিষয়", "Regular", "Irregular"],
          rows: [
            [["V2 / V3 form", "V2 / V3 রূপ"], ["Add -ed to V1", "V1-এর সাথে -ed যুক্ত হয়"], ["Changes in its own way", "নিজস্ব নিয়মে পরিবর্তিত হয়"]],
            [["Example", "উদাহরণ"], "play – played – played (খেলা)", "go – went – gone (যাওয়া)"],
            [["Learning", "শেখার উপায়"], ["One rule is enough", "একটি নিয়মই যথেষ্ট"], ["Must be memorised", "মুখস্থ করতে হয়"]],
          ],
        },
      },
      {
        heading: NOTES,
        variant: "note",
        points: [
          ["-ing spelling: make → making (drop e), run → running (double the consonant), lie → lying.", "-ing যোগের বানান: make → making (e বাদ যায়), run → running (শেষ ব্যঞ্জন দ্বিত্ব), lie → lying।"],
          ["-ed spelling: study → studied (y → ied), stop → stopped.", "-ed যোগের বানান: study → studied (y → ied), stop → stopped।"],
          ["'read' is spelt the same in V1, V2 and V3, but V2 and V3 are pronounced 'red'.", "'read'-এর V1, V2, V3 বানান একই, কিন্তু V2 ও V3-এর উচ্চারণ 'red'।"],
          ["Some verbs have two accepted forms: learn – learnt/learned.", "কিছু verb-এর দুটি গ্রহণযোগ্য রূপ আছে: learn – learnt/learned।"],
          ["Here V4 means V-ing. Some books use V4 for V1 + s/es.", "এখানে V4 মানে V-ing। কিছু বইয়ে V4 মানে V1 + s/es।"],
        ],
      },
    ],
  },
];

export const getLesson = (slug) => lessons.find((l) => l.slug === slug);
