export default {
  botInfo: {
    name: "WILSON WM",
    owner: "Wilson WM",
    prefix: ".",
    mode: "public",
    version: "v1.0.0",
    commandsCount: 500, // approximate count
    date: new Date().toLocaleDateString("en-GB"),
    time: new Date().toLocaleTimeString("en-GB"),
    platform: "linux",
    developer: "Wilson WM | Daxman",
    nation: "Tanzania"
  },
  session: {
    name: "WILSON-WM",
    pairEnabled: true,
    sessionFile: "./session.json"
  },
  apiKeys: {
    openai: "YOUR_OPENAI_KEY_HERE",
    gemini: "YOUR_GEMINI_KEY_HERE",
    gpt: "YOUR_GPT_KEY_HERE",
    bing: "YOUR_BING_KEY_HERE"
  },
  features: {
    owner: ["owner", "dev", "support", "developer", "deployer", "poll", "script"],
    general: [
      "alive", "anti-delete", "antitag", "telegramsc", "deploy", "calc", "time",
      "tempmail", "broadcast", "guessage", "guesscountry", "guessgender",
      "url", "menu3", "code", "areact", "vv", "poll", "repo", "ping", "desc",
      "runtime", "test", "uptime", "ss", "url2", "vcf", "getallmembers", "channel",
      "group1", "update", "vision", "leonard", "hack2", "problem", "wallpaper1"
    ],
    group: [
      "quote", "kickall", "onlyadmin", "welcome", "goodbye", "antipromote",
      "antidemote", "add", "disap-off", "disap", "req", "disap90", "reject",
      "disap7", "disap1", "approve", "vcf10", "tagall", "invite", "promote",
      "demote", "remove", "info", "antilink", "antibot", "group", "gname",
      "gdesc", "revoke", "gpp", "hidetag", "automute", "autounmute", "fkick",
      "nsfw", "antiword", "antilink-all", "tagadmin", "warn"
    ],
    menu: ["lena", "menu", "menu2", "list"],
    vip: ["leonardtech"],
    mods: ["tgs", "crew", "left", "join", "jid", "block", "unblock", "ban",
      "bangroup", "sudo", "save", "mention", "spam", "reboot"
    ],
    user: ["fact", "quotes", "del"],
    search: ["define", "lyrics", "google", "imdb", "img", "stickersearch", "weather"],
    fun: ["hack", "ranime", "fancy", "profile", "quote", "rank", "toprank"],
    conversion: ["emomix", "sticker", "scrop", "take", "write", "photo", "trt", "url"],
    moderation: ["antimention"],
    system: ["mentionListener"],
    download: ["apk", "gitclone", "tiktok-dl", "image-dl", "instagram", "insta-story",
      "video-dl", "twitter-dl", "mediafire", "fb", "fb2", "igdl", "fbdl2", "tiktok",
      "fbdl"
    ],
    audioEdit: ["deep", "bass", "reverse", "slow", "smooth", "tempo", "nightcore"],
    godFirst: ["bible"],
    vipMenu: ["bugmenu"],
    imageEdit: ["shit", "wasted", "wanted", "trigger", "trash", "rip", "sepia",
      "rainbow", "hitler", "invert", "jail", "affect", "beautiful", "blur",
      "circle", "facepalm", "greyscale", "joke"
    ],
    games: ["riddle", "guessflag", "chifumi", "quizz"],
    ai: ["bing", "brainshop", "leo", "gemini", "gpt7", "generate", "extract",
      "ilama", "beautify", "gta", "lulcat", "sadcat", "nokia", "unforgivable",
      "1917", "cartoon", "underwater", "watercolor", "gfx", "gfx2", "gfx3",
      "gfx4", "gfx5", "gfx6", "pooh", "oogway", "drake", "biden", "drip",
      "clown", "ad", "blur", "meme", "pet", "alert", "caution", "text2prompt"
    ],
    herokuClient: ["anticall", "readstatus", "antidelete", "downloadstatus",
      "startmessage", "readmessage", "pm-permit", "chatbot", "greet",
      "antivv", "publicmode", "autorecord", "autotyping", "alwaysonline",
      "privatemode", "autolikestatus", "chatbot", "settings"
    ],
    reaction: ["bully", "cuddle", "cry", "hug", "awoo", "kiss", "lick", "pat",
      "smug", "bonk", "yeet", "blush", "smile", "wave", "highfive",
      "handhold", "nom", "bite", "glomp", "slap", "kill", "kick",
      "happy", "wink", "poke", "dance", "cringe"
    ],
    settings: ["anticall", "autoreact", "autoreadstatus", "privatemode",
      "autorecord", "autotyping", "alwaysonline"
    ]
  }
};
