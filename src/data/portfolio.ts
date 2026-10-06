export type SystemWalkthrough = {
  label: string; project: string; href: string; purpose: string;
  stages: { label: string; tool: string; input: string; output: string; explanation: string }[];
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  platform?: string;
  date: string;
  dateLabel: string;
  kind: "Course certificate" | "Specialization" | "Completion badge" | "Attendance acknowledgement" | "Participation certificate";
  group: "ai" | "systems" | "foundations";
  document: string;
  verification?: string;
  summary?: string;
  context?: string;
  featured?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  group: "research" | "products" | "systems";
  status: "Deployed" | "Prototype" | "Research" | "Competition" | "In progress";
  year: string;
  description: string;
  problem: string;
  approach: string;
  result: string;
  metric: string;
  metricLabel: string;
  stack: string[];
  github: string;
  live?: string;
  paper?: string;
  evidenceNote?: string;
  diagram: "retrieval" | "vision" | "spectral" | "telemetry" | "ensemble" | "agents" | "fingerprint" | "forensic" | "speech" | "waveform" | "workflow" | "document" | "validation";
  steps: string[];
  detail: { title: string; body: string }[];
};

export const portfolio = {
  name: "Kush Ashvinbhai Patel",
  shortName: "Kush Patel",
  initials: "kp",
  role: "ML researcher & AI systems builder",
  location: "Surat, Gujarat · India",
  email: "kushp756@gmail.com",
  github: "https://github.com/Kush5699",
  linkedin: "https://www.linkedin.com/in/kush-patel-6a074b258/",
  resume: "/resume/Kush-Patel-Resume.pdf",
  resumeLabel: "Download resume",
  resumeSource: "Lexsi Labs AI Research · one-page PDF",
  positioning: "I turn machine learning research into useful AI systems.",
  description: "Kush Patel is a machine learning researcher and AI systems builder at DA-IICT. Explore agentic RAG, computer vision, multi-agent systems and published research.",
  nav: [ { label: "Work", href: "/#work" }, { label: "About", href: "/#about" }, { label: "Research", href: "/#research" }, { label: "Credentials", href: "/#certifications" } ],
  ui: {
    skip: "Skip to content", contact: "Let’s talk", menu: "Open navigation", closeMenu: "Close navigation",
    theme: "Toggle color theme", light: "Light", dark: "Dark",
    home: "Back to home", work: "Explore selected work", viewCase: "Read case study",
    source: "Source code", live: "Live project", paper: "Read publication", next: "Next project",
    allWork: "All selected work", illustration: "Original system illustration", diagram: "A simplified view of the project architecture",
    resultNote: "Reported project result · see source for methodology",
  },
  hero: {
    eyebrow: "Research-minded. Systems-driven.",
    lineOne: "From research.",
    lineTwo: "To real-world",
    emphasis: "AI.",
    intro: "I’m Kush, an ML researcher at DA-IICT. I build AI that retrieves, reasons and sees — and the systems that make it useful.",
    footnote: "Scroll to follow the signal",
    edition: "Portfolio / 2026",
    figureLabel: "01 / Inside the systems",
    figureDescription: "Explore simplified architectures from three of my projects. Select a system, then a step to see what changes and why.",
    systemLabel: "Choose a system", stageLabel: "Explore the processing steps", figureHint: "Select a step to look inside.",
    inputLabel: "Input", outputLabel: "Output", caseLabel: "Read the case study", walkthroughLabel: "Architecture walkthrough",
    systems: [
      { label: "Retrieval", project: "GSSTB Scholar", href: "/work/gsstb-scholar/#top", purpose: "A textbook question, answered with evidence.", stages: [
        { label: "Understand", tool: "LangGraph", input: "Student’s question", output: "Rewritten query + subject filters", explanation: "Rewrite the question and identify subject filters to keep the search tied to the right curriculum." },
        { label: "Retrieve", tool: "ChromaDB + BM25", input: "Rewritten query + filters", output: "Ranked textbook passages", explanation: "Combine dense and keyword search with reciprocal rank fusion, then rerank the passages for relevance." },
        { label: "Ground", tool: "Context grading", input: "Retrieved passages + answer", output: "Evidence check or refusal", explanation: "Grade the retrieved context and check the generated answer against it. A refusal path handles missing evidence." },
        { label: "Answer", tool: "Streaming + citations", input: "Grounded answer + source pages", output: "An answer with page citations", explanation: "Stream the answer with page-accurate citations, so a student can inspect the textbook evidence." },
      ] },
      { label: "Vision", project: "ShelfMind AI", href: "/work/shelfmind-ai/#top", purpose: "A shelf photograph, turned into inventory insight.", stages: [
        { label: "Capture", tool: "Shelf image", input: "A retail shelf photograph", output: "Image for product detection", explanation: "Start with a shelf image and a store catalog. The catalog and intended shelf layout give recognition a useful context." },
        { label: "Detect", tool: "YOLO26s", input: "Shelf image", output: "Individual product crops", explanation: "Locate products in the photograph and isolate their image crops before trying to identify them." },
        { label: "Match", tool: "DINOv2 + FAISS", input: "Product crops + catalog", output: "Matched catalog products", explanation: "Encode each crop with DINOv2 and use FAISS nearest-neighbor search to match it against the store catalog." },
        { label: "Compare", tool: "Planogram checks", input: "Matched products + ideal layout", output: "Stockout + compliance insights", explanation: "Compare the recognized products with the intended shelf layout to expose stockouts and compliance differences." },
      ] },
      { label: "Agents", project: "CodeResidency", href: "/work/coderesidency/#top", purpose: "A learner’s intent, routed to the right specialist.", stages: [
        { label: "Ask", tool: "Flutter + FastAPI", input: "Learner’s request or code", output: "Intent + session context", explanation: "The learning interface sends the request to the backend with the context needed for a simulated engineering workflow." },
        { label: "Route", tool: "Google ADK", input: "Intent + session context", output: "A specialist agent assignment", explanation: "The orchestrator routes the learner’s intent to an agent with the appropriate responsibility." },
        { label: "Collaborate", tool: "Specialist agents", input: "Assigned task + shared context", output: "Task, guidance, review or execution", explanation: "The manager assigns tasks, the mentor explains concepts, the reviewer evaluates code and the executor returns runtime output." },
        { label: "Respond", tool: "Memory + event logs", input: "Specialist response", output: "Feedback with retained context", explanation: "Return feedback to the learner while persistent session memory and structured event logs keep the workflow traceable." },
      ] },
    ] satisfies SystemWalkthrough[],
  },
  credentials: [
    { value: "9.39", label: "M.Tech CPI / 10", detail: "DA-IICT · Class of 2027" },
    { value: "ICPR", label: "Published co-author", detail: "Springer LNCS · 2026 conference" },
    { value: "01 / 02", label: "Kaggle leaderboard ranks", detail: "Public / private · Bidding Predictions" },
  ],
  work: {
    number: "01", label: "Selected work", title: "Ideas, put to work.", description: "Thirteen projects. From retrieval and recognition to the systems around them.", archive: "More on GitHub",
    index: "The project index", indexDescription: "Follow a discipline. Find a tool. Read the thinking behind the work.", search: "Search projects", searchHint: "Try PyTorch, OCR or agents…", filters: "Filter by discipline",
    groups: [{ id: "all", label: "All work" }, { id: "research", label: "Research" }, { id: "products", label: "AI products" }, { id: "systems", label: "Systems" }],
    showing: "projects shown", empty: "No matching signals.", emptyDescription: "Try a different tool or explore the full collection.", reset: "Reset filters", clear: "Clear search", outcome: "At a glance",
  },
  about: {
    number: "02", label: "A little context", title: "A researcher’s curiosity.", emphasis: "An engineer’s instinct.",
    bio: "I’m an M.Tech ICT student specializing in Machine Learning at Dhirubhai Ambani University (DA-IICT), and a Graduate Research Assistant in the Information Retrieval & Language Processing Lab.",
    story: "My work moves between models and the systems around them: hybrid retrieval, agent orchestration, computer vision and reliable APIs. I’m interested in what happens when a promising experiment becomes something people can use.",
    mentoring: "Beyond the code, I’ve mentored 30+ students in C++ data structures and algorithms, and serve as a Google Gemini Student Ambassador.",
    facts: [ { label: "Based in", value: "Surat, Gujarat" }, { label: "Studying", value: "M.Tech · Machine Learning" }, { label: "Working at", value: "IRLP Lab, DA-IICT" } ],
  },
  experienceLabel: "Experience",
  experience: [
    { period: "Sep 2025 — Present", organization: "IRLP Lab · DA-IICT", role: "Graduate Research Assistant", location: "Gandhinagar, Gujarat", description: "Researching transformer models, dense and sparse retrieval, and safety guardrails. Building agent workflows and FastAPI services for information retrieval." },
    { period: "Jun 2024 — Jul 2025", organization: "HP Param IT Solutions", role: "Software Engineer Intern", location: "Remote", description: "Developed Python data pipelines and REST APIs on AWS. Designed PostgreSQL schemas, composite indexes and automated deployment workflows." },
  ],
  educationLabel: "Education",
  education: [
    { period: "2025 — Present", organization: "Dhirubhai Ambani University", role: "M.Tech, ICT · Machine Learning", detail: "DA-IICT · Class of 2027 · CPI 9.39 / 10" },
    { period: "2021 — 2025", organization: "MBIT · CVM University", role: "B.E, Computer Engineering", detail: "Anand, Gujarat · CPI 7.81 / 10" },
  ],
  skills: {
    number: "03", label: "The toolkit", title: "Different tools. One purpose.", description: "Build the right system for the problem.",
    groups: [
      { title: "Models & learning", description: "From representations to evaluation.", items: ["PyTorch", "Transformers", "Scikit-learn", "LightGBM / XGBoost / CatBoost", "Computer vision", "Model evaluation"] },
      { title: "Retrieval & agents", description: "Context, reasoning and orchestration.", items: ["LangGraph / LangChain", "Google ADK", "ChromaDB / FAISS", "Hybrid search / BM25", "LLM tool calling", "Gemini / OpenAI APIs"] },
      { title: "Systems & shipping", description: "The engineering around the model.", items: ["Python / C++ / SQL", "FastAPI / React", "PostgreSQL / Redis", "AWS / Cloudflare Workers", "Docker / GitHub Actions", "PyTest / Linux"] },
    ],
  },
  research: {
    number: "04", label: "Research & recognition", title: "Beyond the visible.",
    tag: "Peer-reviewed · Conference publication",
    paperTitle: "ICPR 2026 Competition on Beyond Visible Spectrum: AI for Agriculture",
    description: "Co-author of the competition report on multimodal crop-disease diagnosis and self-supervised learning from satellite imagery.",
    citation: "Springer LNCS 16827 · pp. 276–290 · First online August 2026",
    citationNote: "ICPR 2026 proceedings · formal citation year 2027",
    paper: "https://link.springer.com/chapter/10.1007/978-3-032-31936-4_19",
    acknowledgments: [
      { title: "Amazon ML Summer School", detail: "Selected for the 2026 programme" },
      { title: "GATE · CS and DA", detail: "Qualified in both disciplines" },
      { title: "Teaching & community", detail: "C++ DSA mentor · Google Gemini Student Ambassador" },
    ],
  },
  certifications: {
    number: "05", label: "Certifications & learning", title: "Keep learning. Keep building.", description: "Selected credentials in machine learning, AI agents and the foundations of engineering.",
    collection: "Originals on Drive", drive: "https://drive.google.com/drive/folders/1hgiGXfDqvAKCbLZhTUbh1Zwi-vual2dv?usp=drive_link", view: "View credential", verify: "Issuer verification", archive: "Explore the complete collection", records: "credentials", issued: "Issued", earned: "Earned", completed: "Completed",
    note: "Course certificates, specializations, attendance acknowledgements and completion badges are labeled by credential type.",
    groups: [{id:"ai",title:"AI & data",description:"Learning, agents and data."},{id:"systems",title:"Software & systems",description:"The tools around the model."},{id:"foundations",title:"Math & engineering",description:"Foundations to build on."}],
  },
  contact: { number: "06", label: "The next conversation", title: "Have a useful problem?", emphasis: "Let’s build the answer.", description: "For AI research, engineering opportunities or a thoughtful collaboration — I’d love to hear from you.", emailLabel: "Email me", copy: "Copy email address", copied: "Email copied", copyFailed: "Please select and copy the email above.", links: [ { label: "GitHub", href: "https://github.com/Kush5699" }, { label: "LinkedIn", href: "https://www.linkedin.com/in/kush-patel-6a074b258/" } ] },
  footer: { note: "Built with curiosity & care.", top: "Back to top", copyright: "© 2026 Kush Patel", edition: "Signal Atlas / v.04" },
  caseStudy: { label: "Project field notes", problem: "The problem", approach: "The approach", result: "The result", stack: "Built with", architecture: "Inside the system", evidence: "Evidence & links", contents: "Case study contents", overview: "Overview", method: "Method", evidenceContext: "Reading the evidence", note: "Project descriptions and results are based on my repository documentation. The illustrations explain the architecture; they are not product screenshots." },
  notFound: { title: "This signal leads nowhere.", description: "The page may have moved. There’s plenty to explore back at the atlas.", link: "Return to the atlas" },
  placeholders: [
    { field: "Custom domain", value: "Set NEXT_PUBLIC_SITE_URL when a custom domain is chosen." },
    { field: "ICPR placement and accuracy", value: "Confirm conflicting resume and repository figures. Omitted from website copy; existing PDF preserved unchanged." },
  ],
} as const;

export const certifications: Certification[] = [
  {
    "id": "amazon-ml-summer-school-2026",
    "title": "Amazon ML Summer School 2026",
    "issuer": "Amazon",
    "date": "2026-08-18",
    "dateLabel": "Issued 18 Aug 2026",
    "kind": "Attendance acknowledgement",
    "group": "ai",
    "document": "/certificates/amazon-ml-summer-school-2026.pdf",
    "featured": true,
    "summary": "Attended the virtual ML programme held July 11–26 and August 1–2, 2026. Attendance acknowledged by Amazon."
  },
  {
    "id": "google-ai-agents-intensive",
    "title": "5-Day AI Agents Intensive Course with Google",
    "issuer": "Google / Kaggle",
    "date": "2025-12-18",
    "dateLabel": "Earned 18 Dec 2025",
    "kind": "Completion badge",
    "group": "ai",
    "document": "/certificates/google-ai-agents-intensive.png",
    "featured": true,
    "summary": "A five-day AI agents learning badge from Google and Kaggle, alongside my work on agentic applications."
  },
  {
    "id": "pytorch-fundamentals",
    "title": "PyTorch: Fundamentals",
    "issuer": "DeepLearning.AI",
    "platform": "Coursera",
    "date": "2026-08-11",
    "dateLabel": "Completed 11 Aug 2026",
    "kind": "Course certificate",
    "group": "ai",
    "document": "/certificates/pytorch-fundamentals.pdf",
    "verification": "https://coursera.org/verify/W5OPO7SPH1QS",
    "featured": true,
    "summary": "PyTorch fundamentals coursework completed through DeepLearning.AI on Coursera."
  },
  {
    "id": "adobe-university-hackathon",
    "title": "Adobe University Hackathon",
    "issuer": "Adobe",
    "platform": "Unstop",
    "date": "2026-08-09",
    "dateLabel": "Issued 9 Aug 2026",
    "kind": "Participation certificate",
    "group": "systems",
    "document": "/certificates/adobe-university-hackathon.pdf",
    "verification": "https://unstop.com/certificate-preview/8f73d8f5-d12c-4c31-b46a-2f363de304d2"
  },
  {
    "id": "smart-cities",
    "title": "Smart Cities – Management of Smart Urban Infrastructures",
    "issuer": "École Polytechnique Fédérale de Lausanne",
    "platform": "Coursera",
    "date": "2024-03-22",
    "dateLabel": "Completed 22 Mar 2024",
    "kind": "Course certificate",
    "group": "foundations",
    "document": "/certificates/smart-cities.pdf",
    "verification": "https://coursera.org/verify/V9L4NLKWXQEK"
  },
  {
    "id": "intro-devops",
    "title": "Introduction to DevOps",
    "issuer": "IBM",
    "platform": "Coursera",
    "date": "2024-03-20",
    "dateLabel": "Completed 20 Mar 2024",
    "kind": "Course certificate",
    "group": "systems",
    "document": "/certificates/intro-devops.pdf",
    "verification": "https://coursera.org/verify/4VBAZMHPVS7V"
  },
  {
    "id": "machine-learning-python",
    "title": "Machine Learning with Python",
    "issuer": "IBM",
    "platform": "Coursera",
    "date": "2024-03-20",
    "dateLabel": "Completed 20 Mar 2024",
    "kind": "Course certificate",
    "group": "ai",
    "document": "/certificates/machine-learning-python.pdf",
    "verification": "https://coursera.org/verify/LNRVKTCREBKE"
  },
  {
    "id": "responsive-html-css",
    "title": "Developing Responsive Web Pages Using HTML5 and CSS3",
    "issuer": "NIIT",
    "platform": "Coursera",
    "date": "2023-10-09",
    "dateLabel": "Completed 9 Oct 2023",
    "kind": "Course certificate",
    "group": "systems",
    "document": "/certificates/responsive-html-css.pdf",
    "verification": "https://coursera.org/verify/K6QELLM6DPWB"
  },
  {
    "id": "core-java",
    "title": "Core Java",
    "issuer": "LearnQuest",
    "platform": "Coursera",
    "date": "2023-03-21",
    "dateLabel": "Completed 21 Mar 2023",
    "kind": "Specialization",
    "group": "systems",
    "document": "/certificates/core-java.pdf",
    "verification": "https://coursera.org/verify/specialization/GZRGBTPSN3LR"
  },
  {
    "id": "linux-shell-scripting",
    "title": "Hands-on Introduction to Linux Commands and Shell Scripting",
    "issuer": "IBM",
    "platform": "Coursera",
    "date": "2023-03-21",
    "dateLabel": "Completed 21 Mar 2023",
    "kind": "Course certificate",
    "group": "systems",
    "document": "/certificates/linux-shell-scripting.pdf",
    "verification": "https://coursera.org/verify/7T9RKFUKYDUN"
  },
  {
    "id": "intro-graph-theory",
    "title": "Introduction to Graph Theory",
    "issuer": "University of California San Diego",
    "platform": "Coursera",
    "date": "2023-03-21",
    "dateLabel": "Completed 21 Mar 2023",
    "kind": "Course certificate",
    "group": "foundations",
    "document": "/certificates/intro-graph-theory.pdf",
    "verification": "https://coursera.org/verify/BTN7TLEPAZ69"
  },
  {
    "id": "intro-java",
    "title": "Introduction to Java",
    "issuer": "LearnQuest",
    "platform": "Coursera",
    "date": "2023-03-21",
    "dateLabel": "Completed 21 Mar 2023",
    "kind": "Course certificate",
    "group": "systems",
    "document": "/certificates/intro-java.pdf",
    "verification": "https://coursera.org/verify/7PZJZ55736G2",
    "context": "Part of the Core Java specialization."
  },
  {
    "id": "java-object-oriented-programming",
    "title": "Introduction to Object-Oriented Programming with Java",
    "issuer": "LearnQuest",
    "platform": "Coursera",
    "date": "2023-03-21",
    "dateLabel": "Completed 21 Mar 2023",
    "kind": "Course certificate",
    "group": "systems",
    "document": "/certificates/java-object-oriented-programming.pdf",
    "verification": "https://coursera.org/verify/CAKKZQUY3LJT",
    "context": "Part of the Core Java specialization."
  },
  {
    "id": "java-class-library",
    "title": "Java Class Library",
    "issuer": "LearnQuest",
    "platform": "Coursera",
    "date": "2023-03-21",
    "dateLabel": "Completed 21 Mar 2023",
    "kind": "Course certificate",
    "group": "systems",
    "document": "/certificates/java-class-library.pdf",
    "verification": "https://coursera.org/verify/BE5Z6J9439CX",
    "context": "Part of the Core Java specialization."
  },
  {
    "id": "java-hierarchies",
    "title": "Object-Oriented Hierarchies in Java",
    "issuer": "LearnQuest",
    "platform": "Coursera",
    "date": "2023-03-21",
    "dateLabel": "Completed 21 Mar 2023",
    "kind": "Course certificate",
    "group": "systems",
    "document": "/certificates/java-hierarchies.pdf",
    "verification": "https://coursera.org/verify/RSDHKK62P5WL",
    "context": "Part of the Core Java specialization."
  },
  {
    "id": "cpp-for-c-programmers",
    "title": "C++ For C Programmers, Part A",
    "issuer": "University of California, Santa Cruz",
    "platform": "Coursera",
    "date": "2022-09-29",
    "dateLabel": "Completed 29 Sept 2022",
    "kind": "Course certificate",
    "group": "systems",
    "document": "/certificates/cpp-for-c-programmers.pdf",
    "verification": "https://coursera.org/verify/TZZ9NYNLZC3H"
  },
  {
    "id": "intro-sql",
    "title": "Introduction to Structured Query Language (SQL)",
    "issuer": "University of Michigan",
    "platform": "Coursera",
    "date": "2022-09-01",
    "dateLabel": "Completed 1 Sept 2022",
    "kind": "Course certificate",
    "group": "ai",
    "document": "/certificates/intro-sql.pdf",
    "verification": "https://coursera.org/verify/E5GFTVLYYQM3"
  },
  {
    "id": "numerical-methods",
    "title": "Numerical Methods for Engineers",
    "issuer": "The Hong Kong University of Science and Technology",
    "platform": "Coursera",
    "date": "2022-09-01",
    "dateLabel": "Completed 1 Sept 2022",
    "kind": "Course certificate",
    "group": "foundations",
    "document": "/certificates/numerical-methods.pdf",
    "verification": "https://coursera.org/verify/DAF3WFCTVUPY"
  }
];

export const projects: Project[] = [
  {
    slug: "gsstb-scholar", title: "GSSTB Scholar", category: "Agentic retrieval", group: "products", status: "Deployed", year: "2026", diagram: "retrieval",
    description: "Textbook answers that bring their sources with them.",
    problem: "Students need answers rooted in the right textbook, with a page they can check. Ordinary conversational models can lose that connection to the source.",
    approach: "A six-node LangGraph workflow rewrites questions, extracts subject filters, retrieves with ChromaDB and BM25, grades context, generates answers and checks grounding before streaming a response.",
    result: "A deployed educational application with page-accurate citations, multi-turn conversations, OCR for scanned textbooks and a refusal path when relevant evidence is missing.",
    metric: "6", metricLabel: "Nodes in the retrieval workflow", stack: ["Python", "FastAPI", "LangGraph", "ChromaDB", "React", "Docker"],
    github: "https://github.com/Kush5699/textbook-rag-langgraph", live: "https://gsstb-scholar.onrender.com/",
    steps: ["Question", "Hybrid retrieval", "Grounding check", "Cited answer"],
    detail: [ { title: "Retrieval before generation", body: "Dense vector search and BM25 results are combined through reciprocal rank fusion, with a cross-encoder reranker. Standard and subject filters keep context tied to the student’s curriculum." }, { title: "Keep the source close", body: "Digital extraction and OCR handle different textbook formats. The interface streams answers and exposes source pages through citation controls, so the evidence remains inspectable." } ],
  },
  {
    slug: "shelfmind-ai", title: "ShelfMind AI", category: "Computer vision", group: "products", status: "Prototype", year: "2026", diagram: "vision",
    description: "From a shelf image to a clearer picture of inventory.",
    problem: "Retail shelf checks are manual and easy to get wrong. A useful system must detect products, recognize them and compare the shelf against its intended layout.",
    approach: "A two-stage pipeline pairs YOLO26s detection with DINOv2 representations and FAISS nearest-neighbor search. A Streamlit application connects product scanning, planogram creation and compliance reporting.",
    result: "The repository reports 58.3 mAP@50–95 for YOLO26s v2 on SKU-110K. The application turns matched products into stockout and planogram-compliance insights.",
    metric: "58.3", metricLabel: "Reported mAP@50–95 · SKU-110K", stack: ["PyTorch", "YOLO26s", "DINOv2", "FAISS", "Streamlit"],
    github: "https://github.com/Kush5699/ShelfMind-AI", live: "https://huggingface.co/spaces/kush5699/ShelfMind-AI-Models",
    steps: ["Shelf image", "Detection", "Vector matching", "Compliance"],
    detail: [ { title: "Detect, then recognize", body: "Detection isolates each product crop. DINOv2 generates visual embeddings; FAISS matches those representations against the store catalog." }, { title: "A workflow around the model", body: "The dashboard supports creating a catalog and an ideal shelf layout, then uploading real shelf images to inspect differences. Benchmark tables in the repository document the experiments." } ],
  },
  {
    slug: "beyond-visible-spectrum", title: "Beyond Visible Spectrum", category: "Published research", group: "research", status: "Research", year: "2026", diagram: "spectral",
    description: "Learning crop-disease signals beyond RGB.",
    problem: "Satellite data contains information outside the visible spectrum. An RGB-pretrained model needs a way to learn from twelve Sentinel-2 bands for crop-disease classification.",
    approach: "Adapted an ImageNet-pretrained Swin Transformer for twelve-channel input. Five-fold cross-validation and softmax ensemble averaging combine model predictions.",
    result: "A documented competition solution and co-authorship of the ICPR 2026 competition report, published in Springer’s Lecture Notes in Computer Science.",
    metric: "12", metricLabel: "Sentinel-2 input bands", stack: ["Python", "PyTorch", "Swin Transformer", "timm"],
    github: "https://github.com/Kush5699/beyond-visible-spectrum-crop-disease", paper: "https://link.springer.com/chapter/10.1007/978-3-032-31936-4_19",
    steps: ["Sentinel-2", "12-band tensors", "Swin Transformer", "Ensemble"],
    detail: [ { title: "Adapt the representation", body: "The model starts from a pretrained visual backbone and adapts its input to multispectral data. The project repository includes the notebook, model weights and a methodology write-up." }, { title: "Connect experiments to research", body: "The published report covers the competition’s multimodal and self-supervised learning tasks. Springer lists my authorship and DA-IICT affiliation. The publication link provides the authoritative citation." } ],
  },
  {
    slug: "sla-monitor", title: "SLA Monitor", category: "Edge infrastructure", group: "systems", status: "Deployed", year: "2026", diagram: "telemetry",
    description: "Messy telemetry in. Trustworthy availability out.",
    problem: "Multi-agent health logs mix timestamp formats, latency units, duplicate checks and malformed values. Availability metrics are only useful if the incoming data is handled consistently.",
    approach: "Cloudflare Workers normalize and validate uploaded CSV logs, then persist cleaned records in D1. A React dashboard exposes service availability, latency percentiles and filterable checks.",
    result: "A deployed edge system with 25 documented unit and stress tests and explicit handling for nine categories of data-quality issues.",
    metric: "25", metricLabel: "Documented unit & stress tests", stack: ["JavaScript", "React", "Cloudflare Workers", "D1", "Tailwind CSS"],
    github: "https://github.com/Kush5699/earthre-sla-monitor-dashboard", live: "https://sla-monitor-dashboard.sla-monitor-backend.workers.dev",
    steps: ["Raw logs", "Normalize", "D1 storage", "Availability"],
    detail: [ { title: "Treat data quality as architecture", body: "The processor normalizes timezones and latency units, removes duplicate checks and rejects invalid status codes. Missing or negative latencies are flagged instead of silently distorting percentile calculations." }, { title: "Make assumptions inspectable", body: "The documentation explains how status ranges affect availability and billing-credit insights. Persistent D1 records support date-range filtering and re-querying rather than a one-off browser calculation." } ],
  },
  {
    slug: "bidding-predictions", title: "Bidding Predictions", category: "Predictive modeling", group: "research", status: "Competition", year: "2026", diagram: "ensemble",
    description: "A leakage-aware ensemble for construction pricing.",
    problem: "Construction bids combine line items with different quantities, units and pricing patterns. Validation must also avoid leaking information between records belonging to the same job.",
    approach: "Combined hierarchical price estimates with LightGBM, XGBoost and CatBoost. Out-of-fold features, GroupKFold on job_id and multi-seed averaging feed a stacked prediction ensemble.",
    result: "Ranked first on the public leaderboard and second on the private leaderboard, as recorded in the resume and solution documentation. The pricing models use approximately 832K training line items.",
    metric: "1st / 2nd", metricLabel: "Public / private leaderboard", stack: ["Python", "LightGBM", "XGBoost", "CatBoost", "Scikit-learn"],
    github: "https://github.com/Kush5699/bidding-predictions-kaggle", live: "https://www.kaggle.com/competitions/bidding-predictions-for-construction/leaderboard",
    steps: ["Line items", "OOF features", "Three models", "Ridge ensemble"],
    detail: [ { title: "Guard the split", body: "Grouping by job_id separates related bids during cross-validation. Price estimates are generated out of fold, preventing target-derived features from seeing their own validation labels." }, { title: "Build complementary estimates", body: "Smoothed hierarchical pricing offers a strong structured prior; boosted-tree models add nonlinear predictions. Multi-seed runs and ridge stacking combine these signals in the final submission." } ],
  },
  {
    slug: "coderesidency", title: "CodeResidency", category: "Multi-agent systems", group: "products", status: "Prototype", year: "2025", diagram: "agents",
    description: "A simulated engineering workplace, powered by agents.",
    problem: "Self-paced coding tutorials rarely offer the manager, mentor and reviewer feedback of a software team. Learners need a workflow around implementation, not just another isolated exercise.",
    approach: "Google ADK orchestrates specialized agents behind a FastAPI service and Flutter frontend. Task assignment, mentoring, code review and execution share session context, persistent memory and structured event logs.",
    result: "An implemented workplace-simulation prototype with task routing, contextual assistance, code feedback and an execution tool. The repository documents the agent architecture and local setup.",
    metric: "ADK", metricLabel: "Agent orchestration framework", stack: ["Python", "Google ADK", "Gemini", "FastAPI", "Flutter"],
    github: "https://github.com/Kush5699/Capstone---Project",
    steps: ["Learner intent", "Orchestrator", "Specialist agents", "Feedback"],
    detail: [ { title: "Give each agent a job", body: "A manager assigns tasks, a mentor explains concepts, a reviewer evaluates code and an executor returns runtime output. The orchestrator routes intent to the appropriate specialist." }, { title: "Remember the workflow", body: "Persistent session memory and structured agent logs make interactions easier to trace. The project focuses on the complete learning loop rather than claiming proven educational outcomes." } ],
  },
  {
    slug: "ms-afr-net", title: "MS-AFR-Net", category: "Fingerprint recognition", group: "research", status: "Research", year: "2026", diagram: "fingerprint",
    description: "Fine detail and global structure, fused into one fingerprint representation.",
    problem: "Fingerprint images vary across sensors and capture conditions. A single feature scale can miss either the small ridge details or the broader structure needed for matching.",
    approach: "A ResNet-50 feature pyramid feeds six cross-scale attention blocks. Adaptive fusion combines this transformer branch with CNN features, while ArcFace training shapes the embedding space and a spatial transformer supports alignment.",
    result: "The repository reports a mean equal error rate reduction from 41.29% to 19.22% across seven primary contact-based benchmarks in its data-constrained baseline comparison.",
    metric: "3", metricLabel: "Cross-scale fingerprint features", stack: ["Python", "PyTorch", "torchvision", "NumPy", "SciPy"], github: "https://github.com/Kush5699/MS-AFRNET",
    evidenceNote: "These are repository-reported local comparisons with a smaller training corpus than the reference paper. The 53.5% relative EER reduction is not an accuracy score or a percentage-point gain. This collaborative research does not establish production biometric reliability.",
    steps: ["Fingerprint", "Multi-scale features", "Cross-scale attention", "Embedding comparison"],
    detail: [{ title: "Keep more than one scale", body: "Features from three ResNet stages form a 1,029-token pyramid. Cross-scale attention lets local ridge information interact with broader spatial patterns, instead of collapsing the image into one resolution too early." }, { title: "Read the benchmark in context", body: "The repository includes training code, evaluation results and a report. Its primary contact-based tests are separated from harder contactless and latent settings, making the limits of the measured improvement visible." }],
  },
  {
    slug: "freuid", title: "FREUID", category: "Document forensics", group: "research", status: "Competition", year: "2026", diagram: "forensic",
    description: "Can a document-fraud model generalize to a format it has never seen?",
    problem: "A classifier can memorize familiar document layouts instead of learning manipulation evidence. Random validation splits may hide this weakness when the same document types appear on both sides.",
    approach: "RGB images and three SRM residual channels form a six-channel input to an EVA02-Large backbone with GeM pooling. Leave-one-type-out validation holds out a complete document category; inference averages folds and horizontal flips.",
    result: "An implemented document-type-held-out evaluation pipeline and Docker inference interface for a fold ensemble. The work emphasizes testing generalization beyond familiar layouts.",
    metric: "LOTO", metricLabel: "Hold out a complete document type", stack: ["Python", "PyTorch", "timm", "Albumentations", "Scikit-learn", "Docker"], github: "https://github.com/Kush5699/freuid-challenge-2026",
    evidenceNote: "The source documents the validation and inference methods. No verified private leaderboard rank is claimed. Reproduction requires the challenge data and trained weights, which are excluded from the repository.",
    steps: ["Document image", "SRM residuals", "EVA02 + GeM", "Held-out validation"],
    detail: [{ title: "Make validation harder on purpose", body: "The version 15 training script groups samples by document type and asserts that the validation category is absent from training. This split asks whether the model learned a transferable signal, rather than the appearance of a known template." }, { title: "Package the decision path", body: "The containerized inference module reconstructs the six-channel representation, loads fold models and averages predictions with test-time augmentation. A technical report explains the choices behind that interface." }],
  },
  {
    slug: "gujarati-vsr", title: "Gujarati VSR", category: "Visual speech recognition", group: "research", status: "In progress", year: "2026", diagram: "speech",
    description: "Exploring lip-reading for a language with limited visual speech data.",
    problem: "Gujarati visual speech recognition has limited paired training data. Transferring pretrained representations requires careful alignment and evaluation before a useful lip-to-text system can emerge.",
    approach: "AV-HuBERT visual features feed Conformer and CTC training pipelines. The project explores MMS audio tokens, tokenization, variable-length batching and word-level variants with optional synchronization loss.",
    result: "Implemented sentence-training and word-level experiment pipelines. Early sentence experiments expose alignment problems; the word-level dataset and final recognition benchmark remain in progress.",
    metric: "VSR", metricLabel: "Low-resource visual speech research", stack: ["Python", "PyTorch", "torchaudio", "Transformers", "SentencePiece", "AV-HuBERT"], github: "https://github.com/Kush5699/gujarati-vsr",
    evidenceNote: "A lower validation loss has not yet demonstrated reliable lip-to-text recognition. The planned word-level dataset and accuracy evaluation are not presented as completed results. Synchronization loss is disabled in the current sentence configuration.",
    steps: ["Aligned video", "Visual features", "Conformer", "Alignment diagnostics"],
    detail: [{ title: "Start with representations", body: "Pretrained visual speech features offer a starting point when labeled data is scarce. The source includes media preparation, tokenization, training modules and variants that separate feature extraction from sequence modeling." }, { title: "Let failures guide the next experiment", body: "Training diagnostics distinguish loss reduction from meaningful recognition. The next study focuses on a smaller word-level task and cleaner alignment, with benchmark values left open until the evaluation is complete." }],
  },
  {
    slug: "sleep-breathing-signals", title: "Sleep Breathing Signals", category: "Physiological time series", group: "research", status: "Research", year: "2026", diagram: "waveform",
    description: "Aligning breathing signals. Testing on a person the model has not seen.",
    problem: "Airflow, thoracic movement and oxygen saturation arrive at different sample rates. Neighboring windows from the same participant can also make a model appear more generalizable than it is.",
    approach: "Resampled 32 Hz respiratory signals and 4 Hz SpO₂ into aligned, overlapping 30-second windows. A three-channel 1D CNN uses weighted cross-entropy to classify normal breathing, apnea and hypopnea.",
    result: "Five participant-held-out folds reveal the limits of a small, imbalanced dataset. The repository reports 57.67% mean accuracy, with lower macro precision and recall exposing performance that accuracy alone would hide.",
    metric: "5", metricLabel: "Participant-held-out folds", stack: ["Python", "PyTorch", "SciPy", "NumPy", "pandas", "Scikit-learn"], github: "https://github.com/Kush5699/sleep-apnea-detection",
    evidenceNote: "These are exploratory results from a small cohort with approximately 91% normal windows. Reported mean macro precision is 38.30% and macro recall is 44.55%. The study does not establish clinical validity.",
    steps: ["Sensor recordings", "Aligned windows", "1D CNN", "Held-out participant"],
    detail: [{ title: "Align the time axis", body: "Filtering and linear interpolation bring the three signals onto a shared sample grid. Thirty-second windows with a fifteen-second stride preserve local breathing patterns while producing consistent model inputs." }, { title: "Hold out the participant", body: "Leave-one-participant-out evaluation separates people across training and validation. Class weighting addresses imbalance during learning; per-fold results and macro metrics keep the remaining generalization gap inspectable." }],
  },
  {
    slug: "nirmaan", title: "NirmAAn", category: "Inspection workflows", group: "systems", status: "Prototype", year: "2026", diagram: "workflow",
    description: "Connecting site evidence to a clearer construction review workflow.",
    problem: "Construction progress claims, inspection records and site evidence can become disconnected. Reviewers need a consistent path from field observations to milestone decisions.",
    approach: "A Flask application models role-based project, milestone and inspection workflows. GPS checks, photo analysis and a three-way comparison of contractor, inspector and AI estimates support review, while a Leaflet map exposes project locations.",
    result: "A hackathon prototype with inspection records, approval roles, progress comparison and a public map interface. Its implementation connects field evidence to the review workflow.",
    metric: "3-way", metricLabel: "Claims, inspections and AI estimates", stack: ["Python", "Flask", "SQLAlchemy", "Gemini", "Leaflet", "Bootstrap"], github: "https://github.com/Kush5699/nirmaan",
    evidenceNote: "This is a prototype, with no government deployment or measured civic impact claimed. Photo analysis uses Gemini when configured and returns a fixed demonstration estimate when the API key is absent.",
    steps: ["Site inspection", "GPS + photo", "Progress comparison", "Review workflow"],
    detail: [{ title: "Evidence before approval", body: "Inspection routes require location and role checks, store field observations and compare reported progress with other estimates. Project and milestone records carry that evidence through a structured review process." }, { title: "Make the workflow visible", body: "A dashboard brings progress, inspection history and project locations together. The local configuration supports demonstration use; the photo agent’s fallback is explicitly a mock estimate rather than a measurement." }],
  },
  {
    slug: "id-scanner", title: "ID Scanner", category: "OCR & structured extraction", group: "products", status: "Prototype", year: "2026", diagram: "document",
    description: "From a captured ID image to structured fields people can review.",
    problem: "Manually transcribing identity-document fields is repetitive. A useful extraction flow needs to handle capture, OCR and inconsistent text layouts without hiding what was actually read.",
    approach: "A Flutter application captures or uploads document images, runs platform-specific OCR and extracts structured fields. The source offers regex, Ollama and Groq backends, with ML Kit for mobile text recognition and a separate browser path.",
    result: "An implemented cross-platform capture, extraction and review prototype with raw OCR text and nullable structured fields. Users can inspect the extracted information before using it.",
    metric: "OCR", metricLabel: "Text extraction with reviewable fields", stack: ["Flutter", "Dart", "Google ML Kit", "Groq", "Ollama"], github: "https://github.com/Kush5699/Automatic-Document-Verification-System",
    evidenceNote: "Extracting fields does not establish an identity document’s authenticity. The repository does not provide a verified universal-country accuracy or latency benchmark; those claims are omitted here.",
    steps: ["Capture image", "OCR", "Field extraction", "Review details"],
    detail: [{ title: "Adapt to the platform", body: "Mobile devices use ML Kit text recognition. The browser implementation follows a separate OCR and vision path, reflecting platform constraints rather than assuming the same on-device capabilities everywhere." }, { title: "Keep extraction inspectable", body: "The data model separates individual identity fields and retains raw OCR text. Local regex, local model and cloud model options offer different extraction paths, while missing values remain visible during review." }],
  },
  {
    slug: "openenv-data-validation", title: "OpenEnv Data Validation", category: "Agent learning environments", group: "research", status: "Prototype", year: "2026", diagram: "validation",
    description: "A feedback loop where agents can learn to repair messy datasets.",
    problem: "Data-cleaning agents need more than a prompt: they need an environment with observable errors, meaningful actions and feedback that reflects whether a correction helped.",
    approach: "An OpenEnv environment generates tasks at three difficulties. Typed actions repair missing values, types, ranges, formats and duplicates; reset and step endpoints return observations, rewards and termination state.",
    result: "Implemented task generators, ground-truth grading, repeat-action guards and a stateful HTTP interface. Tests and Docker configuration support reproducing the environment locally.",
    metric: "3", metricLabel: "Data-cleaning task difficulties", stack: ["Python", "OpenEnv", "FastAPI", "Pydantic", "Docker"], github: "https://github.com/Kush5699/data-validation-env",
    evidenceNote: "This repository implements a training environment, not a benchmarked trained agent. Its server uses a shared environment instance; concurrent independent training sessions are not claimed.",
    steps: ["Dirty dataset", "Correction action", "Reward + feedback", "Next observation"],
    detail: [{ title: "Make data quality learnable", body: "Actions are explicit about the error they address. Easy, medium and hard tasks vary the dataset and step budget, giving the agent a defined space in which to inspect, correct and validate data." }, { title: "Reward the correction", body: "Ground-truth comparison grades how the dataset changes after an action. Repeated-action guards discourage unproductive loops, and an episode ends when errors are fixed or its step budget is exhausted." }],
  },
];

// No invented production domain. Local audits use localhost; hosted metadata uses the actual deployment origin.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` :
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` :
      process.env.SITES_SITE_URL || "https://kush-patel-signal-atlas.kushme3690.chatgpt.site");
