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
    title: 'eBPF Kubernetes Observability: Seeing the Truth Beyond the Lies',
    excerpt:
      "We're here to talk about a fundamental shift in how we observe Kubernetes environments. This isn't just about more metrics; it's about getting to the undeniable truth by moving beyond self-reported data to kernel-level reality.",
    coverImage: '/images_ppt/1_Stop-Monitoring-Kubernetes-Lies-Start-Seeing-the-Truth.png',
    date: '2026-03-24',
    readTime: '8 min read',
    tags: ['eBPF', 'Kubernetes', 'Observability', 'Security', 'Cloud Native'],
    content: [
      {
        heading: 'The Observability Illusion: Why Metrics Lie',
        body: "Our current observability often creates an illusion, not a clear picture. Traditional tools like Prometheus, Loki, and Jaeger rely on applications to report their own status. We rely on applications to tell us what's happening, but this creates a critical blind spot—the Self-Reporting Bias. \n\nIf a container is compromised, attackers can disable logs, skip traces, and bypass agents once they gain access. You are auditing what the system *claims* is happening, not the raw reality of the execution. If our applications can lie, our visibility is only as good as the application's honesty. Where do we find the truth?",
        image: '/images_ppt/2_Your-Observability-Stack-Has-a-Blind-Spot.png',
        imageAlt: 'Your Observability Stack Has a Blind Spot',
      },
      {
        heading: 'The Source of Truth: The Linux Kernel',
        body: "The undeniable source of truth resides in the Linux kernel itself. eBPF shifts observability to the only place that matters: the Linux kernel, bypassing user-space limitations. \n\nThe kernel observes every syscall, every process execution, every network packet, and every file access. Applications can be silenced, but the kernel cannot. It's the ultimate, untamperable record of system activity. This kernel-level visibility is the foundation for true observability—because truth exists in the execution, not the reporting.",
        image: '/images_ppt/3_The-Only-Place-That-Matters-The-Linux-Kernel.png',
        imageAlt: 'The Only Place That Matters: The Linux Kernel',
      },
      {
        heading: 'How eBPF Works: The Observability Superpower',
        body: "eBPF provides an observability superpower by allowing us to run sandboxed programs directly in the kernel to observe system events. \n\n- **Sandboxed Programs**: Run directly in the kernel without changing application code or re-architecting your stack. The eBPF verifier ensures safety and stability.\n- **Dynamic Instrumentation**: Attach probes to kprobes, tracepoints, or uprobes in real-time. Collect metrics, latency histograms, and custom events instantly.\n- **Zero Overhead**: Collect high-resolution telemetry with sub-microsecond latency. Native performance without the resource penalty of side-car agents.",
        image: '/images_ppt/4_What-eBPF-Actually-Sees.png',
        imageAlt: 'What eBPF Actually Sees',
      },
      {
        heading: 'Traditional vs. eBPF: A New Paradigm',
        body: "There is a stark contrast between traditional observability (using Sidecars and SDKs) and the eBPF paradigm:\n\n- **Instrumentation**: Traditional requires manual code changes or sidecar injection. eBPF is automatic; it relies on kernel-level attachment without application changes.\n- **Overhead**: Sidecars incur significant CPU/Memory costs for context switching. eBPF brings minimal overhead with native performance and sub-microsecond latency.\n- **Tamper-proof Nature**: Agents are highly vulnerable if the user-space container is compromised. eBPF is protected by the kernel and remains invisible to containers.\n- **Visibility**: Traditional methods are limited to what developers choose to report. eBPF enables full system visibility where every syscall, packet, and process is visible.\n\neBPF moves observability from a 'self-reported audit' to an 'independent observation'.",
        image: '/images_ppt/5_The-Impact-Is-Not-Theoretical.png',
        imageAlt: 'The Impact Is Not Theoretical',
      },
      {
        heading: 'Security: The Tamper-Proof Shield',
        body: "When we talk about eBPF, security is where its tamper-proof nature truly shines. We're moving beyond detection that can be bypassed to enforcement that cannot.\n\nTools like Tetragon offer eBPF-based Security Observability and Runtime Enforcement. You can identify file-less malware, credential harvesting, and container escapes as they happen in real-time. You can block malicious syscalls instantly, preventing threats before they can execute. Containers cannot hide their activity from the kernel, providing a robust, tamper-proof line of defense.",
        image: '/images_ppt/6_Why-the-Kernel-Wins.png',
        imageAlt: 'Why the Kernel Wins',
      },
      {
        heading: 'Networking: Identity-Based Visibility',
        body: "Building on that kernel-level truth, eBPF revolutionizes networking by providing identity-based visibility. We're moving beyond simple IP addresses to understanding network traffic in the context of Kubernetes identities (labels, namespaces, and pods).\n\nCilium leverages eBPF to bypass the overhead of iptables, providing sub-microsecond high-performance packet processing in the kernel. This gives you deep flow logs, showing every packet's journey with full context.",
        image: '/images_ppt/7_Security-That-Cant-Be-Silenced.png',
        imageAlt: 'Security That Cant Be Silenced',
      },
      {
        heading: 'Impact: Operational Excellence',
        body: "This deep, kernel-level visibility has a profound impact on operational excellence:\n\n- **MTTR Reduction**: Identify root causes in minutes, not hours. By seeing raw system events directly from the kernel, teams bypass the 'log-hunting' phase of incident response.\n- **Real-Time Detection**: Shift from delayed log analysis to instant kernel-level alerting. Detect anomalies as they happen, not when the logs are finally ingested and indexed.\n\nBest of all, you can operationalize eBPF without changing a single line of application code or modifying your existing Kubernetes stack.",
        image: '/images_ppt/8_Operationalising-eBPF-Without-Rebuilding-Your-Stack.png',
        imageAlt: 'Operationalising eBPF Without Rebuilding Your Stack',
      },
      {
        heading: 'Striking the Balance: Safe Adoption',
        body: "To harness eBPF's power safely, we need to strike a balance:\n\n1. **Use Trusted Frameworks**: Leverage established projects like Cilium, Falco, and Tetragon. These tools handle capability management and program verification for you.\n2. **Enforce Least Privilege**: Restrict eBPF loading capabilities (CAP_BPF, CAP_PERFMON) to a minimal set of system-daemon pods using admission controllers.\n3. **Monitor the Monitor**: Export metrics on BPF program load times, map memory usage, and verifier rejections to detect anomalies or misconfigurations. This ensures your eBPF deployment remains stable and secure.",
        image: '/images_ppt/9_Built-for-Platform-Leaders-Who-Refuse-Blind-Trust.png',
        imageAlt: 'Built for Platform Leaders Who Refuse Blind Trust',
      },
      {
        heading: 'Conclusion: Choose the Truth',
        body: "\"The kernel cannot be silenced.\"\n\neBPF is not just another tool; it's a fundamental shift in how we observe systems. We're moving beyond blind trust to observing where truth actually exists. Stop operating on blind trust, and start empowering your decisions based on undeniable kernel-level reality.",
        image: '/images_ppt/10_Go-Deeper-The-Full-Technical-Guide.png',
        imageAlt: 'Go Deeper: The Full Technical Guide',
      },
    ],
  },
]
