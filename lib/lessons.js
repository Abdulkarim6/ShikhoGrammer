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
            [["Exclamation", "বিস্ময়সূচক"], ["said → exclaimed with joy / sorrow / surprise; connector: that.", "said → exclaimed with joy / sorrow / surprise; connector: that।"],
              [`He said, "Hurrah! We won!" → He exclaimed with joy that they had won.`, `সে বলল, "হুররে! আমরা জিতেছি!" → সে আনন্দে বলল যে তারা জিতেছিল।`]],
          ],
        },
      },
      {
        heading: ["Tense change (reporting verb in the past)", "Tense পরিবর্তন (reporting verb অতীত হলে)"],
        table: {
          head: ["Direct → Indirect", "Example · উদাহরণ"],
          rows: [
            ["Present Indefinite → Past Indefinite", [`He said, "I play." → He said that he played.`, `সে বলল, "আমি খেলি।" → সে বলল যে সে খেলত।`]],
            ["Present Continuous → Past Continuous", [`He said, "I am playing." → He said that he was playing.`, `সে বলল, "আমি খেলছি।" → সে বলল যে সে খেলছিল।`]],
            ["Present Perfect → Past Perfect", [`He said, "I have played." → He said that he had played.`, `সে বলল, "আমি খেলেছি।" → সে বলল যে সে খেলেছিল।`]],
            ["Past Indefinite → Past Perfect", [`He said, "I played." → He said that he had played.`, `সে বলল, "আমি খেললাম।" → সে বলল যে সে খেলেছিল।`]],
            ["will / can / may → would / could / might", [`He said, "I will play." → He said that he would play.`, `সে বলল, "আমি খেলব।" → সে বলল যে সে খেলবে।`]],
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
        heading: NOTES,
        variant: "note",
        points: [
          [`If the speech is a universal truth, the tense does not change: He said that the sun rises in the east.`, `উক্তি চিরন্তন সত্য হলে Tense বদলায় না: He said that the sun rises in the east. (সে বলল যে সূর্য পূর্ব দিকে ওঠে।)`],
          ["If the reporting verb is in the present or future tense, the tense of the speech does not change.", "Reporting verb Present বা Future Tense-এ থাকলে উক্তির Tense বদলায় না।"],
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
