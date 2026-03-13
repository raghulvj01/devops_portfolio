export interface SocialLink {
  name: string
  href: string
}

export interface ExperienceItem {
  role: string
  company: string
  location: string
  date: string
  summary: string
  achievements: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  location: string
  date: string
  cgpa: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface ProjectItem {
  title: string
  period: string
  stack: string
  imageURL: string
  highlights: string[]
}

export interface StrengthItem {
  title: string
  detail: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  date: string
  readTime: string
  tags: string[]
  content: BlogSection[]
}

export interface BlogSection {
  heading?: string
  body: string
  image?: string
  imageAlt?: string
}

export const profile = {
  name: 'Raghul M',
  role: 'DevOps / Platform Engineer',
  avatar: '/character.png',
  location: 'Bengaluru, Karnataka',
  phoneDisplay: '+91 9385788019',
  phoneHref: 'tel:+919385788019',
  email: 'raghulvijay01@gmail.com',
  linkedin: 'https://www.linkedin.com/in/raghulm21/',
  github: 'https://github.com/raghulvj01',
  summary:
    'DevOps / Platform Engineer building and operating production CI/CD and cloud infrastructure across AWS, Azure, GCP, and Oracle Cloud. Strong in Kubernetes (Nutanix NKP, EKS, GKE, OKE), GitOps (Argo CD), IaC (Terraform, AWS CDK), and observability (Datadog, Prometheus/Grafana, OpenTelemetry). Delivered measurable impact: 40% faster deployments, 30% cost reduction, and 99.5% uptime for high-traffic systems.',
}

export const socials: SocialLink[] = [
  { name: 'LinkedIn', href: profile.linkedin },
  { name: 'GitHub', href: profile.github },
  { name: 'Email', href: `mailto:${profile.email}` },
]

export const workExperience: ExperienceItem[] = [
  {
    role: 'DevOps Engineer',
    company: 'Log-UsIMS Technologies Pvt. Ltd.',
    location: 'Bengaluru, India',
    date: 'May 2024 - Present',
    summary:
      'Built and maintained multi-cloud CI/CD and platform infrastructure across AWS, Azure, GCP, and Oracle Cloud.',
    achievements: [
      'Reduced deployment time by 40% and increased releases from weekly to daily using Jenkins and AWS CodePipeline.',
      'Integrated DevSecOps controls (SonarQube, Snyk, Trivy, OWASP ZAP) to scan code, containers, and IaC pre-release.',
      'Operated Kubernetes platforms (Nutanix NKP, EKS, GKE, OKE) with Argo CD across 200+ containers and 15+ clusters while sustaining 99.5% uptime.',
      'Implemented Terraform and AWS CDK for 500+ resources, improving provisioning speed by 85% and enforcing PCI-DSS and SOC 2 controls.',
      'Established observability across 50+ services using Datadog, Prometheus/Grafana, and OpenTelemetry, cutting MTTD by 55% and reducing MTTR to 15 minutes.',
      'Led cost optimization and incident response improvements, reducing infrastructure costs by 30% and recurring incidents by 45%.',
    ],
  },
  {
    role: 'Business Development Associate',
    company: 'DevTown',
    location: 'Bengaluru, India',
    date: 'Aug 2023 - May 2024',
    summary:
      'Owned inbound/outbound pipeline execution and cross-functional customer onboarding initiatives.',
    achievements: [
      'Managed outbound and inbound sales pipeline, contributing to 25% revenue growth.',
      'Improved retention and renewals through clear communication and SLA-driven follow-ups.',
      'Maintained CRM hygiene and performed market research to identify new accounts and partnership opportunities.',
      'Partnered with technical teams to translate requirements into service proposals and successful onboarding plans.',
    ],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'Parul University Online',
    degree: 'MBA, Information Technology',
    location: 'Vadodara, India',
    date: 'Jul 2024 - Present',
    cgpa: '9.86',
  },
  {
    institution: 'Coimbatore Institute of Engineering and Technology',
    degree: 'B.Tech, Information Technology',
    location: 'Coimbatore, India',
    date: 'Nov 2020 - May 2024',
    cgpa: '9.01',
  },
]

export const technicalSkillCategories: SkillCategory[] = [
  {
    category: 'AI/ML and GenAI',
    items: [
      'Nutanix Enterprise AI',
      'Oracle GenAI',
      'RAG Patterns',
      'Vector Databases (Pinecone, Weaviate)',
      'LLM Orchestration',
      'Agentic Workflows',
      'Prompt Engineering',
    ],
  },
  {
    category: 'DevSecOps',
    items: [
      'SAST (SonarQube, Snyk, Grype, Semgrep)',
      'DAST (OWASP ZAP, Trivy)',
      'OPA Policy-as-Code',
      'Native Container Scanner',
      'pfSense Firewall',
    ],
  },
  {
    category: 'Cloud Platforms',
    items: [
      'AWS (EC2, ECS, Lambda, EventBridge, SNS/SQS, S3, CDK, CloudFormation, X-Ray, CloudWatch)',
      'Azure (VMs, Pipelines, DevOps)',
      'GCP (GKE, Cloud Functions, Pub/Sub, Cloud Build)',
      'Oracle Cloud (OCI, OKE, GenAI)',
    ],
  },
  {
    category: 'Container Orchestration',
    items: [
      'Kubernetes (Nutanix NKP, AWS EKS, GCP GKE, Oracle OKE)',
      'Docker',
      'Helm Charts',
      'Argo CD',
      'Kustomize',
      'HPA/VPA',
    ],
  },
  {
    category: 'Infrastructure as Code',
    items: ['Terraform', 'AWS CDK', 'CloudFormation', 'Ansible', 'Pulumi'],
  },
  {
    category: 'CI/CD',
    items: [
      'Jenkins',
      'AWS CodePipeline',
      'Azure Pipelines',
      'GitLab CI/CD',
      'GitHub Actions',
      'Argo Workflows',
    ],
  },
  {
    category: 'Databases',
    items: [
      'MongoDB Atlas',
      'PostgreSQL',
      'Redis',
      'Elasticsearch',
      'Vector Databases',
      'Nutanix Objects',
      'S3',
    ],
  },
  {
    category: 'Observability',
    items: [
      'Datadog (APM, Logs, RUM, Synthetics)',
      'Groundcover',
      'Prometheus',
      'Grafana',
      'OpenTelemetry',
      'AWS X-Ray',
      'CloudWatch',
      'ELK Stack',
    ],
  },
  {
    category: 'Event-Driven',
    items: [
      'AWS Lambda',
      'Cloud Functions',
      'EventBridge',
      'Pub/Sub',
      'SNS/SQS',
      'RabbitMQ',
      'Apache Kafka',
      'Step Functions',
    ],
  },
  {
    category: 'Programming',
    items: ['Python', 'Java', 'Bash', 'Go', 'FastAPI', 'RESTful APIs'],
  },
  {
    category: 'Operating Systems',
    items: [
      'Linux (Ubuntu, CentOS, RHEL, Amazon Linux, Debian)',
      'Windows Server',
    ],
  },
  {
    category: 'Security and Compliance',
    items: ['IAM', 'RBAC', 'SCPs', 'MFA', 'PCI-DSS', 'SOC', 'CloudTrail', 'GuardDuty'],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Oxpay Financial Services Platform',
    period: 'Jul 2025 - Present',
    stack: 'AWS ECS, Lambda, CDK, Jenkins',
    imageURL: '/oxpay-logo.jpg',
    highlights: [
      'Designed a cloud-native financial platform on AWS (ECS) with Jenkins and AWS CodePipeline, improving deployment cycles by 40% with automated rollbacks.',
      'Built event-driven payment processing with Lambda, EventBridge, and SNS/SQS for 100K+ daily transactions with sub-100ms latency; added X-Ray tracing to cut debugging time by 50%.',
      'Implemented IaC with AWS CDK, pfSense firewall, and S3 encryption for PCI-DSS readiness, improving stack creation time by 35% through parallel provisioning.',
      'Reduced infrastructure costs by 30% by optimizing ECS task placement and right-sizing task definitions while maintaining SLAs.',
      'Hardened access controls with IAM, SCPs, and CloudTrail/CloudWatch audit logging, reducing security audit effort by 60%.',
    ],
  },
  {
    title: 'Ren3 AI Platform',
    period: 'Jun 2025 - Present',
    stack: 'Oracle Cloud, GenAI, Nutanix Enterprise AI',
    imageURL: '/ren3-logo.png',
    highlights: [
      'Led architecture and production deployment of a distributed AI platform for enterprise search and conversational AI using RAG, vector retrieval, and GPU-hosted LLM inference.',
      'Designed low-latency RAG inference with semantic retrieval, embeddings pipelines, and context-aware generation for high-relevance responses at scale.',
      'Built multi-region AI inference routing to optimize latency, availability, and compute utilization across global cloud regions.',
      'Implemented production-grade reliability patterns using Kubernetes orchestration, GitOps deployment strategy, and secure network isolation.',
    ],
  },
  {
    title: 'Blinc Travel Platform',
    period: 'May 2024 - Dec 2024',
    stack: 'GCP GKE, Cloud Run, Cloud Scheduler, Cloud SQL (PostgreSQL)',
    imageURL: '/blinc-travel-banner.svg',
    highlights: [
      'Provisioned and managed production infrastructure on GCP using GKE, Cloud Run, Cloud Scheduler, and Cloud SQL (PostgreSQL).',
      'Operated containerized services across GKE and Cloud Run with environment configuration, scaling policies, and production monitoring.',
      'Implemented scheduled background processing with Cloud Scheduler for batch jobs, data sync workflows, and maintenance tasks.',
      'Managed Cloud SQL PostgreSQL provisioning, private networking, backups, and monitoring while supporting deployments, scaling events, and incident troubleshooting.',
    ],
  },
  {
    title: 'Mondee Travel Platform',
    period: 'Sep 2024 - Present',
    stack: 'GCP GKE, Oracle OKE, Elasticsearch',
    imageURL: '/mondee-travel-banner.svg',
    highlights: [
      'Executed phased migration of 50+ workloads from GCP to Oracle Cloud (OCI) with zero data loss, delivering 25% cost reduction (USD 60K annually) using replication and DNS failover.',
      'Deployed an agentic AI application on Oracle OKE using prompt chaining, routing, and parallelization, improving recommendation accuracy by 35% and conversion by 18%.',
      'Built event-driven booking workflows using Cloud Functions, Pub/Sub, and RabbitMQ for 10M+ daily API requests with 99.9% success rate and autoscaling.',
      'Integrated DevSecOps scanning (SonarQube, GCP Vul Scan, Oracle Vul Scanner, Grype, OWASP ZAP, Trivy), reducing production vulnerabilities by 60%.',
      'Operated 5TB+ Elasticsearch with sub-50ms query latency and 99.95% availability.',
      'Improved incident response by 45% through APM, metrics, log aggregation, SLO tracking, and proactive alerts.',
    ],
  },
]

export const certifications: string[] = [
  'Nutanix Certified Professional - Multicloud Infrastructure 6',
  'The Joy of Computing Using Python - NPTEL (2022)',
  'Programming in Java - NPTEL (2021)',
  'Python Mega Course - Udemy (2021)',
]

export const languages: string[] = [
  'English',
  'Tamil (Native)',
  'Kannada (Conversational)',
  'Telugu (Basic)',
]

export const additionalStrengths: StrengthItem[] = [
  {
    title: 'Problem Solving',
    detail:
      'Expert debugging with complex incident management, root cause analysis, and postmortems reducing recurring incidents by 45%.',
  },
  {
    title: 'Learning Agility',
    detail:
      'Continuous learner in cloud-native technologies, AI/ML, GenAI, Kubernetes, and observability through hands-on experimentation and certifications.',
  },
  {
    title: 'Collaboration',
    detail:
      'Strong cross-functional collaboration with development, security, data science, and product teams delivering mission-critical projects under tight deadlines.',
  },
  {
    title: 'Leadership',
    detail:
      'Mentor for junior engineers on DevOps best practices, Kubernetes, CI/CD, and Infrastructure as Code to improve team productivity and knowledge sharing.',
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: 'ebpf-kubernetes-observability-security',
    title: 'eBPF: The Double-Edged Sword of Kubernetes Observability and Security',
    excerpt:
      'Extended Berkeley Packet Filter (eBPF) has evolved from a niche networking tool into a foundational technology for cloud-native observability and security. Understanding both sides is essential for platform engineers and security teams.',
    coverImage: '/blog/cover.png',
    date: '2026-03-13',
    readTime: '10 min read',
    tags: ['eBPF', 'Kubernetes', 'Observability', 'Security', 'Cloud Native'],
    content: [
      {
        body: 'Extended Berkeley Packet Filter (eBPF) has evolved from a niche networking tool into a foundational technology for cloud-native observability and security. By running sandboxed programs directly in the Linux kernel, eBPF provides unprecedented visibility into system calls, network packets, and scheduler events\u2014without requiring code changes or side-car containers. In Kubernetes environments, this kernel-level access translates into deep, low-overhead insights that traditional agents struggle to match. Yet the same capabilities that make eBPF a powerful ally also introduce new risks: privileged access requirements, kernel-stability concerns, and operational complexity. Understanding both sides is essential for platform engineers and security teams seeking to harness eBPF safely and effectively.',
        image: '/blog/cover.png',
        imageAlt: 'Server room with networking infrastructure representing kernel-level technology',
      },
      {
        heading: 'Why eBPF Feels Like a Superpower',
        body: "eBPF's strength lies in its ability to instrument the kernel dynamically. Programs can be attached to kprobes, tracepoints, or uprobes to collect metrics, latency histograms, and custom events via BPF maps, all with sub-microsecond overhead. This enables real-time latency breakdowns, per-pod network flow visibility, and CPU-usage profiling without the resource penalty of traditional side-car agents. For observability, eBPF-based tools deliver high-resolution telemetry straight from the kernel, eliminating the need to instrument every application\u2014a critical advantage in dynamic, polyglot Kubernetes workloads.\n\nOn the security side, eBPF enforces policies at the kernel level, akin to SELinux-style checks but with greater flexibility. It can monitor syscalls, file access, and network communications with microsecond granularity, allowing detection of file-less malware, credential harvesting, container-escape attempts, and other runtime threats. Because the probes run in kernel space, attackers cannot easily tamper with or bypass them from within a container, providing a robust line of defense that operates beneath the surface of typical user-space monitoring tools.\n\nThese benefits are not theoretical. Projects like Cilium use eBPF for high-performance networking, identity-based security, and deep observability through Hubble, while Falco leverages eBPF drivers to detect runtime threats without kernel-module overhead. Tetragon, an eBPF-based security observability tool from the Cilium project, provides deep visibility into system-call activity and enforces runtime policies. The adoption of eBPF is accelerating across cloud providers and enterprises, driven by its ability to deliver granular insights with minimal performance impact.",
        image: '/blog/observability.png',
        imageAlt: 'Dashboard with monitoring metrics and data visualization',
      },
      {
        heading: 'The Flip Side: Risks and Trade-offs',
        body: "Despite its advantages, eBPF introduces significant considerations that must be managed carefully.\n\nPrivileged Access Requirements \u2014 Loading BPF programs typically requires CAP_SYS_ADMIN or equivalent root capabilities. Containers granted this privilege can potentially hijack processes, escape containment, or read memory of all processes on the node. Even without CAP_SYS_ADMIN, the combination of CAP_BPF and CAP_PERFMON (available since Linux 5.6) allows use of dangerous helpers like bpf_read_user to access other containers' memory, posing risks of sensitive-data theft. Studies have found that a small but non-negligible percentage of public container images mistakenly enable eBPF features, amplifying the attack surface if such images are deployed in privileged contexts.\n\nKernel Complexity and Stability \u2014 The eBPF verifier prevents most unsafe programs, but poorly written BPF can still cause kernel oops, infinite loops, or memory leaks\u2014especially when using advanced features like loops or custom maps. Kernel-version differences in tracepoint and kprobe support can create visibility gaps, particularly on hardened or custom kernels. This necessitates careful validation, CI-style BPF linting, and standardization on a kernel baseline across the cluster.\n\nOperational Overhead \u2014 Managing dozens of BPF programs, maps, and versions adds a new layer to the toolchain. Teams must handle program loading, unloading, updates, and debugging, which can be more complex than traditional agent-based approaches. Without proper tooling, this overhead can offset the performance gains eBPF promises.\n\nFalse Sense of Security \u2014 While eBPF provides deep visibility and enforcement, it does not replace secure image-building practices, network segmentation, least-privilege IAM, or runtime sandboxing (e.g., gVisor, KataContainers). Over-reliance on eBPF alone can leave gaps in the defense-in-depth strategy.",
        image: '/blog/security.png',
        imageAlt: 'Digital security concept with lock and shield iconography',
      },
      {
        heading: 'Striking the Balance: Best Practices for Safe Adoption',
        body: "To reap eBPF's benefits while mitigating its risks, organizations should adopt a disciplined, layered approach:\n\n1. Leverage Trusted eBPF Frameworks \u2014 Use established projects like Cilium (networking, security, observability), Falco (runtime security), and Tetragon (security observability) that handle capability dropping, program verification, upgrades, and declarative management via Kubernetes CRDs. These platforms abstract much of the complexity and provide built-in safeguards.\n\n2. Enforce Strict RBAC and PSP/OPA Policies \u2014 Restrict CAP_SYS_ADMIN and related capabilities to a minimal set of system-daemon pods. Use PodSecurityPolicy (or its OPA-based replacements) and admission controllers to prevent unprivileged workloads from gaining eBPF-loading privileges. Consider using user-namespaces to further isolate BPF-loading agents.\n\n3. Version-Control and CI-Test BPF Code \u2014 Treat BPF source code like any other application code: store it in Git, run it through a CI pipeline that builds with clang -target bpf, and enforce verifier checks before promotion. This catches unsafe patterns early and ensures reproducibility.\n\n4. Monitor the Monitor \u2014 Export metrics on BPF program load times, map memory usage, and verifier rejections. Set alerts for anomalies\u2014such as sudden spikes in map allocations or frequent program reloads\u2014that could signal misbehaving or malicious loads.\n\n5. Complement with Layered Defenses \u2014 Use eBPF as one layer in a broader security stack: combine it with image scanning (SBOM, vulnerability checks), network policies, service-mesh mTLS, and runtime sandboxing. Ensure that eBPF-based detection is paired with automated response mechanisms (e.g., Falco-sidekick alerts to SIEMs or SOAR platforms).\n\n6. Invest in Team Skill-Building \u2014 Provide workshops on reading BPF bytecode, interpreting verifier logs, and writing safe helpers. The skill gap is often the biggest barrier to safe adoption; upskilling teams on eBPF fundamentals reduces the likelihood of accidental misconfiguration.",
        image: '/blog/kubernetes.png',
        imageAlt: 'Cloud infrastructure and container orchestration visualization',
      },
      {
        heading: 'Conclusion',
        body: "eBPF is undeniably a double-edged sword: it slices through the opacity of the Linux kernel, delivering razor-sharp observability and security insights, but it also demands respect for its power. When wielded with disciplined access controls, rigorous verification, and operational maturity, eBPF becomes a force multiplier for Kubernetes reliability and security. Ignoring its risks, however, can turn that very same edge into a liability that undermines the stability you're trying to protect. For platform engineers and security engineers alike, the path forward lies in embracing eBPF's potential while implementing the safeguards that keep its edge sharp, safe, and firmly under control.",
      },
    ],
  },
]
