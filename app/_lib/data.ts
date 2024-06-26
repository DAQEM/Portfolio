import {
    ASPNET,
    BrandingSites,
    CSharp,
    ContentMods,
    DiscordBots,
    Group,
    Individual,
    Java,
    LibraryMods,
    Microservices,
    Minecraft,
    NextJS,
    PHP,
    React,
    SvelteKit,
    TypeScript,
    UtilityMods,
} from "./constants";

export const projects: Project[] = [
    {
        title: "Netmon",
        slug: "netmon",
        description:
            "Netmon is a network monitoring tool that uses a protocol called SNMP to monitor network devices. It allows you to monitor your network devices on things like CPU usage, memory usage, bandwidth usage, and disk space. It visualizes this data in graphs in a nice dashboard. It has a separate admin interface for things like managing devices and users. If you want to use the demo, use the following credentials: Username: demo, Password: P@ssw0rd!.",
        logo: "/images/projects/netmon.png",
        images: ["/images/projects/netmon.png"],
        link: "https://netmon.daqem.com",
        tags: [
            CSharp,
            ASPNET,
            TypeScript,
            SvelteKit,
            Individual,
            Microservices,
        ],
        source: "https://github.com/DAQEM/Netmon",
    },
    {
        title: "Cloud AI Scanner",
        slug: "cloud-ai-scanner",
        description:
            "Cloud AI Scanner is an AI detection tool for cloud services. It allows you to scan AI service providers like Open AI and Google Cloud for AI services. It visualizes this data in a nice dashboard. This product was made to make it easier for companies to comply with the EU AI Act.",
        logo: "/images/projects/cais.png",
        images: ["/images/projects/cais.png"],
        tags: [CSharp, ASPNET, TypeScript, SvelteKit, Group, Microservices],
        source: "https://github.com/DAQEM/CloudAIScanner",
    },
    {
        title: "DeskMate",
        slug: "deskmate",
        description:
            "DeskMate is a office workspace management tool that me and my group created. It allows you to manage and reserve your office workspace. This product was made for large companies so employees can reserve their workspace in the office.",
        logo: "/images/projects/deskmate.png",
        images: ["/images/projects/deskmate.png"],
        tags: [CSharp, ASPNET, Group],
        source: "https://github.com/DAQEM/DeskMate",
    },
    {
        title: "RecipeFinder",
        slug: "recipefinder",
        description:
            "RecipeFinder is a recipe search engine that I created. It allows you to search for recipes based on ingredients.",
        logo: "/images/projects/recipe-finder.svg",
        images: ["/images/projects/recipe-finder.svg"],
        tags: [CSharp, ASPNET, Individual],
        source: "https://github.com/DAQEM/RecipeFinder",
    },
    {
        title: "Smart Medicine",
        slug: "smart-medicine",
        description:
            "Smart Medicine is a project by Ericsson that I worked on. We had to create multiple plates that would track temperature, humidity, light, vibrations and battery levels. I had to create a web application the plates would send data to. The web application would visualize this data in graphs and manage the thresholds for the plates.",
        logo: "/images/projects/smart-medicine.png",
        images: ["/images/projects/smart-medicine.png"],
        tags: [CSharp, ASPNET, TypeScript, React, NextJS, Group, Microservices],
    },
    {
        title: "Pictrify",
        slug: "pictrify",
        description:
            "Picrify is a project I made the learn the basics of microservices and PHP. I never finished the project but it was a great learning experience.",
        logo: "/images/projects/pictrify.png",
        images: ["/images/projects/pictrify.png"],
        tags: [
            CSharp,
            PHP,
            TypeScript,
            ASPNET,
            SvelteKit,
            Individual,
            Microservices,
        ],
        source: "https://github.com/DAQEM/Pictrify",
    },
    {
        title: "Arc Lib",
        slug: "arc-lib",
        description:
            "Arc Lib is a Minecraft modding library created for my Jobs+ mod but is now used by many of my other mods. It allows players to create actions with rewards and conditions (ARC). These actions can be made using a simple JSON format. And can then be used by mods like Jobs+ to give experience points for completing the action, such as mining a block.",
        logo: "/images/projects/arc-lib.png",
        images: ["/images/projects/arc-lib.png"],
        tags: [Minecraft, Java, LibraryMods],
        link: "https://www.curseforge.com/minecraft/mc-mods/arc",
        source: "https://github.com/DAQEM/ArcLib",
    },
    {
        title: "Item Restrictions",
        slug: "item-restrictions",
        description:
            "Item Restrictions is a Minecraft library created for my Jobs+ mod but is now used by many other developers. It allows players to create restrictions for items. These restrictions can be made using a simple JSON format. And can then be used by mods like Jobs+ to restrict players from using or crafting certain items.",
        logo: "/images/projects/item-restrictions.png",
        images: ["/images/projects/item-restrictions.png"],
        tags: [Minecraft, Java, LibraryMods],
        link: "https://www.curseforge.com/minecraft/mc-mods/item-restrictions",
        source: "https://github.com/DAQEM/ItemRestrictions",
    },
    {
        title: "Jobs+",
        slug: "jobsplus",
        description:
            "Jobs+ is a Minecraft mod where players can have jobs in Minecraft. For example, Miner, Farmer, and Hunter. Players can level up their jobs by completing certain tasks related to the job. Every time they level up their job, they get a coin to spend on power-ups to make their job easier. Other developers can create jobs for Jobs+ using a simple JSON format.",
        logo: "/images/projects/jobsplus.png",
        images: ["/images/projects/jobsplus.png"],
        tags: [Minecraft, Java, ContentMods],
        link: "https://www.curseforge.com/minecraft/mc-mods/jobs-remastered",
        source: "https://github.com/DAQEM/JobsPlusRemastered",
    },
    {
        title: "Jobs+ Tools",
        slug: "jobsplus-tools",
        description:
            "Jobs+ Tools is a Minecraft mod that adds tools for every job in the default version of the Jobs+ mod. For example, the Miner job gets a Hammer that can mine multiple blocks at once. The Farmer job gets a Harvester that can harvest multiple crops at once.",
        logo: "/images/projects/jobsplus-tools.png",
        images: ["/images/projects/jobsplus-tools.png"],
        tags: [Minecraft, Java, ContentMods],
        link: "https://www.curseforge.com/minecraft/mc-mods/jobsplustools",
        source: "https://github.com/DAQEM/JobsPlusTools",
    },
    {
        title: "UI Lib",
        slug: "ui-lib",
        description:
            "UI Lib is a Minecraft modding library created to make it easier to create user interfaces in Minecraft. The Minecraft GUI system was very hard to work with for new developers. So I created a library that makes it easier to create user interfaces in Minecraft with a component system and click, scroll and drag functionality. It comes with pre-made components like buttons, texture components, text components, and scrollable components.",
        logo: "/images/projects/ui-lib.png",
        images: ["/images/projects/ui-lib.png"],
        tags: [Minecraft, Java, LibraryMods],
        link: "https://www.curseforge.com/minecraft/mc-mods/ui",
        source: "https://github.com/DAQEM/UILib",
    },
    {
        title: "X-Life",
        slug: "x-life",
        description:
            "X-Life is a Minecraft mod I remade from the original X-Life SMP series on YouTube because a lot of people wanted to play it. It is a hardcore Minecraft mod where you have 10 lifes and 1 heart. If you die, you lose a life but gain a heart. If you lose all your lifes, it is game over for you.",
        logo: "/images/projects/x-life.png",
        images: ["/images/projects/x-life.png"],
        tags: [Minecraft, Java, ContentMods],
        link: "https://www.curseforge.com/minecraft/mc-mods/x-life-health-mod",
        source: "https://github.com/DAQEM/XLifeMod",
    },
    {
        title: "Afterlife",
        slug: "afterlife",
        description:
            "Afterlife is a Minecraft mod where you have 10 lives. Every life, you have a different origin from the Origins mod. If you die, you lose a life and get assigned to a new origin. If you lose all your lifes, it is game over for you.",
        logo: "/images/projects/afterlife.png",
        images: ["/images/projects/afterlife.png"],
        tags: [Minecraft, Java, ContentMods],
        link: "https://www.curseforge.com/minecraft/mc-mods/afterlife",
    },
    {
        title: "GriefLogger",
        slug: "grieflogger",
        description:
            "GriefLogger is a Minecraft mod I created to log griefing in Minecraft. It logs every block that is placed or broken by a player. It also logs every chest that is opened by a player and every item that is taken from or added to a chest. It logs this data in a MySQL or by default, a SQLite database.",
        logo: "/images/projects/grieflogger.png",
        images: ["/images/projects/grieflogger.png"],
        tags: [Minecraft, Java, UtilityMods],
        link: "https://www.curseforge.com/minecraft/mc-mods/grieflogger",
        source: "https://github.com/DAQEM/GriefLogger",
    },
    {
        title: "This Website",
        slug: "portfolio",
        description:
            "This is the website you are currently on. I created this website to showcase my projects and to get in touch with me.",
        logo: "/images/projects/portfolio.png",
        images: ["/images/projects/portfolio.png"],
        tags: [TypeScript, React, NextJS],
        source: "https://github.com/DAQEM/Portfolio",
    },
    {
        title: "DAQEM.com",
        slug: "daqem-com",
        description:
            "DAQEM.com is a website I created for my Minecraft mods. It showcases all my mods and has a blog where I post updates about my mods.",
        logo: "/images/projects/daqem-com.png",
        images: ["/images/projects/daqem-com.png"],
        tags: [TypeScript, SvelteKit, BrandingSites],
        link: "https://daqem.com",
    },
    {
        title: "LittleField Bot",
        slug: "littlefield-bot",
        description:
            "LittleField Bot is a Discord bot I created for a supply chain management game called LittleField. We played this game at school for the orientation phase of the 4th semester. The bot would give updates about the cash balance. It also had commands to generate graphs of the cash balance, inventory, and machine utilization and queue length.",
        logo: "/images/projects/littlefield-bot.jpg",
        images: ["/images/projects/littlefield-bot.jpg"],
        tags: [DiscordBots],
        source: "https://github.com/DAQEM/LittleFieldDiscordBot",
    },
];
