// Edit this file to update the content of the entire site.
// Everything on the page is sourced from here.

/** Career start — used to keep "X+" / "X.5+" experience labels current. */
const CAREER_START = new Date(2023, 5, 1); // June 2023 (month is 0-indexed)

/**
 * Floors elapsed years to the nearest half-year and appends "+".
 * e.g. 3.0–3.49 → "3+", 3.5–3.99 → "3.5+", 4.0–4.49 → "4+".
 */
export function experienceYearsLabel(asOf: Date = new Date()): string {
  const ms = asOf.getTime() - CAREER_START.getTime();
  const years = Math.max(0, ms / (365.25 * 24 * 60 * 60 * 1000));
  const halfYears = Math.floor(years * 2) / 2;
  return `${halfYears}+`;
}

export const profile = {
  name: "Abdul Rahman",
  role: "Backend Software Engineer",
  phone: "+91 8175844802",
  email: "abdul786rahman49@gmail.com",
  location: "Noida, India",
  linkedin: "https://www.linkedin.com/in/abdulrahman2468/",
  github: "https://github.com/Abdul-coding",
  resumeFile: "/Abdul_Resume_Node.pdf",
  summary: `Backend engineer with ${experienceYearsLabel()} years building production-grade, cloud-native systems in Node.js and TypeScript. I spend most of my time where latency, concurrency, and correctness intersect — caching strategy, event-driven architecture, and multi-tenant platform design — for systems that carry millions of end users.`,
};

export const metrics = [
  { value: "3×", label: "fewer Redis round-trips", detail: "via batched MGET lookups" },
  { value: "~20%", label: "lower inter-service latency", detail: "gRPC vs. plain REST" },
  { value: "~40%", label: "fewer release issues", detail: "CI/CD pipeline hardening" },
  { value: "95%+", label: "Jest test coverage", detail: "unit + integration" },
];

export const traceSteps = [
  { id: "req", label: "client request", state: "in", note: "GET /portfolio/:id" },
  { id: "cache", label: "redis lookup", state: "miss", note: "cache-miss" },
  { id: "lock", label: "single-flight lock", state: "wait", note: "stampede protection" },
  { id: "db", label: "batched I/O", state: "fetch", note: "parallel valuations + anomaly batch" },
  { id: "write", label: "cache pre-warm", state: "set", note: "short TTL, publish-safe" },
  { id: "res", label: "response", state: "out", note: "200 OK" },
];

export const experience = [
  {
    company: "Appinventiv Technologies Pvt. Ltd.",
    role: "Software Engineer",
    period: "June 2023 — Present",
    bullets: [
      "Fixed slow page loads across portfolio, dashboard, and market-intelligence screens by architecting Redis-backed caching and pre-warming, and parallelizing independent I/O — turning sequential round-trips into concurrent execution.",
      "Eliminated cache stampedes and redundant compute under concurrent load by implementing single-flight cache-miss protection with wait/re-read coordination across portfolio, dashboard, and asset-detail handlers.",
      "Cut redundant Redis round-trips by up to 3× by parallelizing cache-version resolution (MGET/batch lookups), and designed short-TTL, publishing-safe caching to replace slow full-period scans.",
      "Designed, developed, and maintained backend services and RESTful APIs using Node.js, TypeScript, NestJS, and Express across monolithic and microservices architectures, supporting millions of end users.",
      "Built cloud-native services on AWS (EC2, S3, CloudWatch, Lambda) and Azure, containerized with Docker, and implemented authentication/authorization with AWS Cognito and Keycloak (OAuth2/OIDC, RBAC) across multi-tenant platforms.",
      "Implemented MongoDB Change Streams to detect database updates and stream incremental changes via WebSockets to connected clients, enabling real-time UI updates without polling or manual refresh.",
      "Implemented event-driven workflows with Kafka and RabbitMQ and gRPC service-to-service calls, cutting inter-service latency ~20% vs. plain REST; built SSE-based real-time streaming for live client updates.",
      "Built and maintained CI/CD pipelines (GitHub Actions, GitLab CI), cutting release-related issues by ~40%, with 95%+ Jest test coverage.",
    ],
  },
];

export const projects = [
  {
    name: "Quivio",
    url: "https://www.quivio.com/",
    subtitle: "Sonnys — Car Wash SaaS Platform",
    tags: ["Node.js", "TypeScript", "Kafka", "PostgreSQL", "Cognito", "Keycloak"],
    bullets: [
      "Built an enterprise-level SaaS platform using microservices architecture, serving 50+ enterprise clients with subscriptions, billing, and white-label configurations.",
      "Implemented auth with AWS Cognito and Keycloak — OAuth2/OIDC flows, role-based access control, and tenant-scoped identity management across 50+ enterprise tenants.",
      "Implemented Kafka-based event hubs for high-throughput event streaming and reliable asynchronous processing across services.",
      "Designed a multi-tenant PostgreSQL architecture ensuring strict data isolation and scalability across tenants.",
      "Developed a dynamic user segmentation engine powering campaign execution with configurable scheduling and automated triggers.",
      "Implemented SendGrid email infrastructure with template management, inbound email parsing, and sender identity verification.",
    ],
    stat: { value: "50+", label: "enterprise tenants" },
  },
  {
    name: "American Express",
    url: "https://www.americanexpress.com.sa/",
    subtitle: "Chargeback Management Portal",
    tags: ["Microservices", "gRPC", "RabbitMQ", "PostgreSQL"],
    bullets: [
      "Developed a microservices-based, multi-layered backend architecture for a chargeback management platform serving multiple merchant banks.",
      "Enabled inter-service communication using gRPC for synchronous flows and RabbitMQ for asynchronous processing across layers and services.",
      "Designed and maintained tenant-isolated PostgreSQL databases, ensuring data consistency, reliability, and scalability for finance-grade use cases.",
    ],
    stat: { value: "finance-grade", label: "data isolation" },
  },
  {
    name: "Barakah",
    url: "https://www.barakah.app/",
    subtitle: "Food & Restaurant Platform",
    tags: ["Node.js", "MongoDB", "Redis", "WebSockets"],
    bullets: [
      "Built a monolithic Node.js backend for online food ordering and restaurant management, handling order lifecycle, payments, notifications, and real-time order tracking via WebSockets.",
      "Designed REST APIs supporting high concurrency and peak traffic for 2M+ users; optimized MongoDB queries for trending meals, popular restaurants, and personalized recommendations.",
      "Used Redis for caching frequently accessed data, reducing database load and improving response times for high-traffic endpoints.",
      "Leveraged MongoDB Change Streams to push near real-time updates to clients via WebSockets, eliminating manual page refreshes.",
    ],
    stat: { value: "2M+", label: "users served" },
  },
  {
    name: "YKA Connect",
    url: "https://www.almoayyed.com/",
    subtitle: "Automobile Services Platform",
    tags: ["Node.js", "MongoDB", "Geo-location", "Notifications"],
    bullets: [
      "Developed backend services for booking, leasing, servicing, test drives, and payments, with geo-location–based discovery.",
      "Designed and implemented a global search engine serving 5K+ active users, and a multi-tier loyalty and rewards system with tier upgrades and activity-based progression rules.",
      "Built a multi-channel notification system delivering push, email, and SMS notifications concurrently to thousands of users, ensuring reliable, real-time delivery at scale.",
    ],
    stat: { value: "5K+", label: "active users" },
  },
];

export const skillGroups = [
  { title: "Languages", items: ["JavaScript (ES6+)", "TypeScript"] },
  { title: "Backend", items: ["Node.js", "NestJS", "Express", "Hapi", "Koa"] },
  { title: "APIs & Real-time", items: ["REST", "gRPC", "WebSockets", "SSE", "GraphQL (familiar)"] },
  {
    title: "Caching",
    items: ["Redis", "TTL strategies", "single-flight / mutex", "MGET batch lookups", "cache invalidation"],
  },
  { title: "Auth & Identity", items: ["AWS Cognito", "Keycloak", "OAuth2/OIDC", "JWT", "RBAC"] },
  { title: "Architecture", items: ["Microservices", "Event-Driven Systems", "Multi-Tenant Design", "Cloud-Native"] },
  { title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  { title: "Messaging", items: ["Kafka", "RabbitMQ"] },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EC2, S3, Lambda, CloudWatch)", "Azure", "Azure Key Vault", "APIM", "Docker", "GitHub Actions", "GitLab CI"],
  },
  { title: "Monitoring", items: ["Datadog", "Grafana", "CloudWatch", "Sentry", "Prometheus"] },
  { title: "AI-Assisted Dev", items: ["Cursor", "GitHub Copilot", "ChatGPT"] },
  { title: "Testing", items: ["Jest — unit & integration, 95%+ coverage"] },
  { title: "Integrations", items: ["Stripe", "PayFort", "TAP", "Twilio", "SendGrid"] },
];

export const education = {
  degree: "B.Tech — Computer Science & Engineering",
  school: "Sanskar College of Engineering & Technology, Ghaziabad",
  period: "2019 — 2023",
};

export const certifications = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    url: "https://drive.google.com/file/d/174wCtpqrCa2d7hAsYHR9RYOpWIyUHOIP/view",
  },
];
