/* All site copy and data. Pages read from this file, so text changes happen here. */

/* Logo: put the file in public/brand, then set src, for example "/brand/mwega-logo.png".
   mode "plate" is the full 3:2 artwork with the tagline. mode "plain" is a logo on its own. */
export const brand = { src: "/brand/mwega-logo.png", mode: "plate" };

export const siteConfig = {
  companyName: "Mwega",
  tagline: "Build better. Together.",
  description: "Mwega helps businesses and organisations turn data, technology and ideas into better decisions, smarter systems and sustainable growth.",
  location: "Nairobi, Kenya", // carried over from the current Comrades Market site
  // Contact details confirmed in October 2026. The street address is still to be added.
  email: "hello@mwega.com", phone: "0718 367 110", phoneHref: "tel:+254718367110", whatsapp: "https://wa.me/254718367110", address: "", linkedin: "https://www.linkedin.com/company/comradesmarketke", instagram: "https://www.instagram.com/comradesmarketke", facebook: "https://www.facebook.com/comradesmarketKE",
};

export const solutions = [
  { slug: "intelligence", name: "Mwega Intelligence", short: "Intelligence", verb: "Understand", role: "Understand the business", accent: "teal",
    tagline: "Turn data into decisions.",
    description: "We help organisations transform raw information into business intelligence that reveals what is happening, why it matters and what to do next.",
    services: ["Data analytics", "Business intelligence", "Dashboards", "Market research", "Customer insights", "Reporting"], cardCta: "Explore Intelligence",
    problem: "The numbers exist: in the till, the spreadsheet, the M-Pesa statement, the CRM. But nobody sees the whole picture, so decisions get made on instinct.",
    solution: "We bring your information together, clean it up and show you what is happening, why it matters and what to do next.",
    outcome: "Decisions you can explain, reports people read and a business you can see clearly.",
    heroTitle: "Turn your data into a business advantage.", heroLead: "Businesses generate enormous amounts of information. We help you understand it and use it.",
    introTitle: "You already hold the answers. They are just scattered.",
    intro: ["Sales records, customer lists, survey responses, member registers, finance exports. Most organisations already have what they need to make better decisions. It lives in too many places, and nobody has the time to read it.", "We pull it together and turn it into something a manager can use on Monday morning. You get an answer you can act on, not a thick report that sits unread."],
    servicesTitle: "What Intelligence covers",
    pageServices: [["Data Analytics", "Find the patterns in your sales, costs and operations, so you know what is driving results."], ["Business Intelligence", "One reliable view of the business, so everyone works from the same numbers."], ["Dashboards", "The handful of figures that matter, kept current and readable at a glance."], ["Market Research", "Evidence about your market and your competitors before you commit money to a decision."], ["Customer Analytics", "Who buys, who comes back and who is drifting away, so you know where to focus."], ["Reporting", "Reports that answer the question that was asked, on a schedule you can rely on."], ["Data Strategy", "A plan for what to collect, where it lives and who looks after it."]],
    connects: "Intelligence is where most work starts. What it shows decides what Digital should improve, what AI should automate and what Academy should teach.",
    cta: "Understand Your Data", topic: "Business Intelligence" },
  { slug: "digital", name: "Mwega Digital", short: "Digital", verb: "Improve", role: "Improve the business", accent: "violet",
    tagline: "Build better digital experiences.",
    description: "We help organisations improve the way they work, communicate with customers and deliver value through digital technology.",
    services: ["Websites", "Digital transformation", "Digital marketing", "Business systems", "Customer platforms", "Digital strategy"], cardCta: "Explore Digital",
    problem: "Work is spread across paper, WhatsApp threads and spreadsheets only one person understands. Customers wait, and things slip.",
    solution: "We start with how your business works today, then design the websites, systems and customer platforms that make it work better.",
    outcome: "Less manual work, faster service and a digital presence that brings in business.",
    heroTitle: "Build better digital experiences.", heroLead: "Websites, systems and customer platforms built around the way your business actually works.",
    introTitle: "Digital transformation is about the business, not the technology.",
    intro: ["Buying software is the easy part. Changing how work gets done is harder, and it is the part that pays.", "So we start with the process, the people and the customer. Then we choose technology that fits, including for the customers who only ever reach you on a phone."],
    servicesTitle: "What Digital covers",
    pageServices: [["Website development", "Fast, mobile-first websites that explain what you do and turn visitors into enquiries."], ["Digital transformation", "Move the work that slows you down out of paper and memory, into systems your team will use."], ["Digital strategy", "Decide what to build, what to buy and what to leave alone, in an order your budget can carry."], ["Digital marketing", "Reach the right customers and measure what each shilling brings back."], ["Business systems", "Sales, stock, finance and customer records connected, so information is entered once."], ["Customer platforms", "Portals and self-service tools that let customers and members help themselves."], ["Workflow optimisation", "Map how work moves today, remove the steps that add nothing and simplify the rest."]],
    connects: "Digital builds on Intelligence. We improve the parts of the business the data says matter most.",
    cta: "Transform Your Business", topic: "Digital Transformation" },
  { slug: "ai", name: "Mwega AI", short: "AI", verb: "Automate", role: "Automate the business", accent: "magenta",
    tagline: "Put AI to work.",
    description: "We help businesses identify practical opportunities to use AI, automate repetitive work and build smarter workflows.",
    services: ["AI strategy", "AI automation", "AI workflows", "Productivity systems", "AI implementation", "AI training"], cardCta: "Explore AI",
    problem: "Everyone is talking about AI. Few can point to the hour it would save their team this week.",
    solution: "We look at the work your team repeats every day, pick the places where AI will help and build it into the tools you already use.",
    outcome: "Time back for the work that needs people, with a person still in charge of what matters.",
    heroTitle: "AI that solves real business problems.", heroLead: "We help organisations identify where AI can save time, reduce costs, improve productivity and strengthen decision-making.",
    introTitle: "No hype. Useful work.",
    intro: ["AI is very good at some things and unreliable at others. We help you tell the difference.", "We start with a task your team already does every week, use the tools you already pay for where we can, and keep a person in charge of anything that matters."],
    servicesTitle: "What AI covers",
    pageServices: [["AI strategy", "Decide where AI belongs in your business, and where it does not."], ["AI workflow design", "Redesign a process so people and AI each do the part they are best at."], ["Automation", "Hand repetitive, rule-based tasks to software so your team can focus on judgement."], ["AI productivity", "Set your team up with assistants for writing, summarising, research and analysis."], ["AI knowledge systems", "Make your policies, documents and past work searchable in plain language."], ["AI-assisted reporting", "Draft routine reports from your data, then let a person check and sign off."], ["AI training", "Give your team the confidence to use AI well and the judgement to know its limits."]],
    connects: "AI works best in a business that knows its numbers and has clear processes. Intelligence and Digital get you there.",
    cta: "Put AI to Work", topic: "AI" },
  { slug: "academy", name: "Mwega Academy", short: "Academy", verb: "Develop", role: "Develop the people", accent: "gold",
    tagline: "Build the capability to grow.",
    description: "We equip teams, entrepreneurs and organisations with the knowledge and skills needed to use data, technology and AI effectively.",
    services: ["Business training", "AI training", "Data literacy", "Digital marketing", "Workshops", "Business clinics"], cardCta: "Explore Academy",
    problem: "New tools arrive faster than teams can learn them. Without the skills, the dashboard goes unread and the system goes unused.",
    solution: "Practical training built around your team's real work, so people leave able to do something they could not do before.",
    outcome: "A team that uses its tools with confidence and keeps improving after we have gone.",
    heroTitle: "Build the capability to grow.", heroLead: "Practical training that leaves your team able to use data, technology and AI in their real work.",
    introTitle: "Skills are what make the rest last.",
    intro: ["A dashboard only helps if someone reads it. A system only works if people use it. AI only saves time in the hands of someone who knows what to ask.", "Our training is hands-on and built on real numbers, with tools your team can keep using the next day."],
    servicesTitle: "Training areas",
    pageServices: [["AI for Business", "Use AI assistants for everyday work, safely and well."], ["Data Literacy", "Read, question and explain numbers with confidence."], ["Digital Marketing", "Reach the right customers and measure what works."], ["Business Analytics", "Turn records into answers using tools you already have."], ["Business Systems", "Set up the processes and records a growing business needs."], ["Research", "Ask good questions and gather evidence you can trust."], ["Productivity", "Work faster with better habits, templates and tools."], ["Entrepreneurship", "Positioning, pricing, sales and the fundamentals of running a business."]],
    connects: "Academy makes the rest last. Your team learns to read the data, run the systems and use the AI.",
    cta: "Book a Training Session", topic: "Training" },
];

export const getSolution = (slug) => solutions.find((s) => s.slug === slug);

export const navLinks = [["Home", "/"], ["Solutions", "/solutions"], ["Industries", "/industries"], ["About", "/about"], ["Insights", "/insights"], ["Resources", "/resources"]];

export const footerCols = [
  ["Solutions", solutions.map((s) => [s.name, "/solutions/" + s.slug])],
  ["Company", [["About", "/about"], ["Our Story", "/about#story"], ["Industries", "/industries"], ["Contact", "/contact"]]],
  ["Resources", [["Insights", "/insights"], ["Resources", "/resources"], ["Case Studies", "/case-studies"], ["Reports", "/resources?category=reports"]]],
];

export const socials = [["LinkedIn", "linkedin"], ["Instagram", "instagram"], ["Facebook", "facebook"], ["WhatsApp", "whatsapp"]];

export const flow = [["Data", "What you already have.", "teal"], ["Insight", "What it means.", "violet"], ["Action", "What to do about it.", "magenta"], ["Growth", "What changes as a result.", "gold"]];

export const processSteps = [
  ["Understand", "We understand your business, customers, data and challenges."],
  ["Design", "We identify the right strategy, tools and processes."],
  ["Build", "We create practical systems, solutions and capabilities."],
  ["Measure", "We track what is working and identify opportunities to improve."],
  ["Grow", "You use better information and systems to make better decisions."],
];

export const challenges = [
  { id: "data", statement: "I don't understand my data.", pillar: "intelligence", advice: "Start by understanding what your data is already telling you." },
  { id: "process", statement: "Inefficient processes are slowing us down.", pillar: "digital", advice: "Start by mapping how work moves today, then fix the step that costs you the most time.", then: "Once the process is clear, Mwega AI can take over the repetitive parts." },
  { id: "ai", statement: "I want to use AI.", pillar: "ai", advice: "Start with one task your team repeats every week and put AI to work on it.", then: "Mwega Academy gets your team ready to use it well." },
  { id: "grow", statement: "We need to grow.", pillar: "intelligence", advice: "Start by finding out which customers, products and channels are really driving growth.", then: "Then Mwega Digital helps you reach more of them." },
];

export const audiences = [
  ["smes", "SMEs", "Build better systems, understand your numbers and make smarter decisions."],
  ["startups", "Startups", "Build scalable foundations from the beginning."],
  ["saccos", "SACCOs & member organisations", "Understand your members and strengthen engagement."],
  ["ngos", "NGOs & development organisations", "Turn research and data into evidence for action."],
  ["corporates", "Corporates", "Improve operations, customer intelligence and digital capabilities."],
  ["associations", "Associations", "Strengthen member services, communication and organisational intelligence."],
];

export const industries = [
  { id: "smes", name: "SMEs", challenges: ["Records are scattered across notebooks, spreadsheets and phones.", "It is hard to tell which products, customers or channels actually make money.", "There is little time or budget for systems that do not pay back quickly."], approach: "We start small and practical: get your numbers in one place, fix the process that hurts most and build from there.", solutions: ["intelligence", "digital", "academy"] },
  { id: "startups", name: "Startups", challenges: ["Moving fast means decisions get made before the data is in.", "Early systems are patched together and hard to scale.", "Investors and partners ask for numbers you cannot easily produce."], approach: "We help you set up the right foundations early: clean data, simple systems and the few metrics that matter, so growth does not break them.", solutions: ["intelligence", "digital", "ai"] },
  { id: "saccos", name: "SACCOs", challenges: ["Member information sits in systems that do not talk to each other.", "It is hard to see which members are active, drifting or ready for a new product.", "Members expect to be served on their phones."], approach: "We help you understand your membership, improve how you communicate and serve members, and give your team the skills to use the data.", solutions: ["intelligence", "digital", "academy"] },
  { id: "ngos", name: "NGOs", challenges: ["Programme data is collected, then rarely used beyond the donor report.", "Reporting takes weeks of manual work.", "Teams are stretched and tools differ from project to project."], approach: "We help turn monitoring data and research into evidence your team can act on, and cut the time reporting takes.", solutions: ["intelligence", "ai", "academy"] },
  { id: "development", name: "Development Organisations", challenges: ["Evidence is needed across many partners, regions and programmes.", "Research findings take too long to reach the people making decisions.", "Data quality varies from one source to the next."], approach: "We design research, analysis and reporting that connects evidence to decisions, and we build the capability of local teams and partners.", solutions: ["intelligence", "academy", "digital"] },
  { id: "corporates", name: "Corporates", challenges: ["Plenty of data, spread across departments that each see a different picture.", "Customer insight arrives too late to shape decisions.", "AI and digital projects start but struggle to reach daily operations."], approach: "We work alongside your teams to connect data, sharpen customer intelligence and move digital and AI projects from pilot into everyday use.", solutions: ["intelligence", "ai", "digital"] },
  { id: "associations", name: "Associations", challenges: ["Member records are incomplete or out of date.", "It is hard to show members the value of belonging.", "Communication is one-way and hard to measure."], approach: "We help you understand your members, improve services and communication, and build the organisational intelligence to plan ahead.", solutions: ["intelligence", "digital", "academy"] },
];

export const caseStudies = [
  { slug: "bcdip-12-days-of-christmas", status: "published", pillar: "digital", client: "BCDIP", kind: "Campaign strategy", period: "December 2023", deliveredAs: "Comrades Market",
    title: "A December campaign with three audiences and one emotion",
    challenge: "BCDIP runs learning and networking for Kenya's built industry. Its yearly 12 Days of Christmas offer had to do three jobs at once: win back customers from earlier campaigns, convert mailing-list subscribers who had never bought, and reach new leads.",
    approach: "We gave each audience its own job, then built the whole campaign on a single emotion, joy, so that twelve days of posts read as one story.",
    solution: "Twelve daily pieces of short video, carousels and one-line posts across LinkedIn, Facebook and X, with the managing director's own LinkedIn presence carrying the campaign.",
    result: "Half of the campaign's customers were returning customers.",
    metrics: [["3", "audience segments"], ["3", "channels"], ["12", "daily pieces"], ["50%", "returning customers"]] },
  { slug: "business-clinic-first-edition", status: "published", pillar: "academy", client: "The Business Clinic, 1st Edition", kind: "Cohort training", period: "November 2024 to January 2025", deliveredAs: "Comrades Market",
    title: "Six weeks of business fundamentals for founders already in business",
    challenge: "Students and recent graduates were already running real businesses, with customers and cash coming in. They needed the fundamentals, in a format that respected how little time they had.",
    approach: "We kept it to six evenings with one fundamental each: product positioning, customer research, digital marketing, government compliance, sales and pitching, and financial literacy.",
    solution: "A six-week pilot cohort, with three sessions led by guest trainers and a recap email after every session so that missing an evening did not mean falling behind.",
    result: "Eighteen businesses from eleven industries took part and twelve founders earned a certificate of participation. The programme went on to a second edition.",
    metrics: [["18", "businesses"], ["11", "industries"], ["6", "live sessions"], ["12", "certificates"]] },
  { slug: "intelligence-case-study", status: "placeholder", pillar: "intelligence" },
  { slug: "ai-case-study", status: "placeholder", pillar: "ai" },
];

export const resourceCats = [["free-tools", "Free Tools"], ["premium-toolkits", "Premium Toolkits"], ["templates", "Templates"], ["reports", "Reports"], ["guides", "Guides"], ["ai-resources", "AI Resources"]];

export const homeResourceCats = [["Business Guides", "/resources?category=guides"], ["Data Tools", "/resources?category=free-tools"], ["AI Tools", "/resources?category=ai-resources"], ["Templates", "/resources?category=templates"], ["Reports", "/resources?category=reports"], ["Insights", "/insights"]];

export const resources = [
  { id: "toolkit", title: "SME Data & AI Toolkit", category: "premium-toolkits", access: "paid", price: "Ksh 3,500, one-time", // product facts and checkout link from the current site: confirm for Mwega
    description: "One workbook that connects your finance, operations, sales, marketing and compliance, with a prompt library for the AI assistant you already use.",
    points: ["Five linked sheets and one dashboard", "Prompt library for your AI assistant", "Compliance deadline tracker", "Works in Excel or Google Sheets"],
    cta: ["Get the Toolkit", "https://selar.com/782579po40"], note: "Checkout opens on Selar in a new tab." },
  { id: "checkup", title: "Business Data Checkup", category: "free-tools", access: "free", placeholder: true, description: "A short review of what you collect, where it lives and the first question worth answering.", cta: ["Get a Business Data Checkup", "/contact?topic=Business%20Intelligence"] },
  { id: "guide", title: "SME Data & AI Guide", category: "guides", access: "free", placeholder: true, description: "A plain-language guide to getting your business data in order before you bring in AI.", cta: ["Download the SME Data & AI Guide", "/contact?topic=Other"], note: "Download link to be added. For now this opens the enquiry form." },
  { id: "template", title: "Monthly business report template", category: "templates", access: "free", placeholder: true, description: "Placeholder. Template details to be added." },
  { id: "worksheet", title: "AI use-case worksheet", category: "ai-resources", access: "free", placeholder: true, description: "Placeholder. Resource details to be added." },
];

export const articleCats = ["Data", "AI", "Digital Transformation", "Business Growth", "Marketing", "Research"];

export const catAccent = { Data: "teal", AI: "magenta", "Digital Transformation": "violet", "Business Growth": "gold", Marketing: "violet", Research: "teal" };

export const articles = [ // sample cards only: no article has been written
  ["Data", "What your sales records already know about your customers"],
  ["AI", "Where AI saves a small team time, and where it does not"],
  ["Digital Transformation", "Digitising a process without buying new software"],
  ["Business Growth", "Finding out which customers are driving your growth"],
  ["Marketing", "Measuring what your marketing brings back"],
];

export const values = [
  ["Integrity", "We say what the data says, including when it is not what anyone hoped."],
  ["Practical Innovation", "New ideas earn their place by solving a real problem."],
  ["Continuous Learning", "We keep learning, and we leave your team knowing more than when we arrived."],
  ["Customer-Centred Thinking", "We start with your customers and your business, not with a tool."],
  ["Impact", "We measure our work by what changes for you."],
  ["Collaboration", "We build with you, not for you from a distance."],
];

export const statements = [ // draft wording: confirm with the Mwega team
  ["Our purpose", "To make data, technology and AI practical and useful for every organisation we work with."],
  ["Our vision", "Organisations across Kenya and the region that understand their numbers, trust their systems and grow with confidence."],
  ["Our mission", "To turn data, technology and ideas into better decisions, smarter systems and sustainable growth, and to build the skills that make those gains last."],
];

export const timeline = [
  ["Comrades Market", "A platform helping businesses navigate digital marketing, research, technology and growth."],
  ["Digital services", "Social media, campaigns and websites for growing brands."],
  ["Research & business support", "Research, analytics and The Business Clinic for founders."],
  ["Data & AI", "Training and tools that help businesses run on their own numbers."],
  ["Mwega", "One company that brings it all together."],
];

export const pipeline = [["Raw data", "Whatever you have, wherever it lives."], ["Clean data", "Duplicates out, gaps filled, formats agreed."], ["Analysis", "Patterns, comparisons and trends."], ["Insight", "What it means for your business."], ["Decision", "The choice in front of you, with the evidence."], ["Action", "What changes, who owns it and how it is measured."]];

export const principles = [["Start with the problem", "We ask what is slow, costly or frustrating before we talk about tools."], ["Fit the way you work", "Systems are built around your team and your customers, not the other way round."], ["Measure what changes", "Every project has a number it is meant to move, agreed before we start."]];

export const formats = [["Workshops", "Focused, hands-on sessions on one skill or one tool."], ["Corporate Training", "Programmes for teams and departments, built on your own data and systems."], ["Business Clinics", "Bring a real business problem and work through it with a practitioner."], ["Custom Training", "Designed from scratch around what your organisation needs to learn."]];

export const aiTasks = [
  ["Writing the same emails, messages and proposals", "Drafting assistant", "AI prepares a first draft in your tone from a few notes. A person edits and sends."],
  ["Compiling reports by hand", "AI-assisted reporting", "Routine reports are drafted from your data, ready for someone to check and sign off."],
  ["Answering the same customer questions", "Customer reply support", "Suggested answers drawn from your own FAQs and policies, so replies are faster and consistent."],
  ["Searching for documents and information", "A knowledge system", "Ask a question in plain language and get the answer from your own documents, with the source."],
  ["Copying data between systems", "Automation", "Rule-based steps move information between your tools without retyping."],
  ["Summarising meetings and long documents", "Summaries and action lists", "Notes, decisions and next steps captured in minutes."],
  ["Checking forms, invoices or records", "First-pass checking", "AI flags gaps and mismatches so your team reviews the exceptions, not every line."],
];

export const topics = ["Business Intelligence", "Digital Transformation", "AI", "Marketing", "Research", "Training", "Other"];

export const nextSteps = ["We reply within 24 hours with next steps.", "A 30-minute call to agree the question you need answered.", "A short scope with deliverables, timeline and price."]; // from the current site's FAQ: confirm

export const seo = { // becomes generateMetadata() per route
  "/": "Mwega | Business intelligence, digital transformation and AI in Kenya", "/about": "About Mwega | The evolution of Comrades Market", "/solutions": "Solutions | Mwega",
  "/solutions/intelligence": "Mwega Intelligence | Data analytics and business intelligence in Kenya", "/solutions/digital": "Mwega Digital | Digital transformation in Kenya",
  "/solutions/ai": "Mwega AI | Practical AI and automation for business in Kenya", "/solutions/academy": "Mwega Academy | Data, AI and business training",
  "/industries": "Industries | Mwega", "/insights": "Insights | Mwega", "/resources": "Resources | Mwega", "/case-studies": "Case studies | Mwega", "/contact": "Contact Mwega",
};

export const HV = { lens: [348, 286], sources: [["M-Pesa statements", 236, 46], ["eTIMS invoices", 208, 122], ["WhatsApp orders", 244, 198], ["Sales reports", 214, 278], ["Member records", 242, 356], ["Survey responses", 216, 436]], lines: [["#3FD9C6", 262], ["#8E7BFF", 190], ["#E879F9", 116], ["#FBBF24", 44]] };
