export interface SocialLink {
  name: string
  href: string
}

export interface CareerHighlight {
  title: string
  detail: string
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
  category?: 'Client Engagement' | 'Open Source'
  packageName?: string
  imageURL?: string
  highlights: string[]
}

export interface AwardItem {
  title: string
  issuer: string
  date: string
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
    'DevOps / Platform Engineer specializing in cloud security, Kubernetes, and secure delivery across AWS, GCP, and OCI. Experienced in Infrastructure as Code, security automation, CI/CD, observability, and GenAI infrastructure, with a focus on building secure, resilient, and scalable cloud platforms.',
}

export const socials: SocialLink[] = [
  { name: 'LinkedIn', href: profile.linkedin },
  { name: 'GitHub', href: profile.github },
  { name: 'Email', href: `mailto:${profile.email}` },
]

export const careerHighlights: CareerHighlight[] = [
  {
    title: 'Protect the Edge',
    detail:
      'AWS WAF, Cloudflare WAF & Zero Trust, hostname controls and application-layer protection.',
  },
  {
    title: 'Secure the Pipeline',
    detail:
      'Semgrep SAST, OWASP ZAP, vulnerability scanning and container security integrated into CI/CD.',
  },
  {
    title: 'Defend the Runtime',
    detail:
      'GuardDuty, Security Hub CSPM, IAM/RBAC, KMS, CloudTrail and security monitoring.',
  },
  {
    title: 'Engineer for Resilience',
    detail:
      'Kubernetes, multi-cloud infrastructure, DR validation, backup strategy and infrastructure hardening.',
  },
  {
    title: 'Automate at Scale',
    detail:
      'Terraform, AWS CDK, Jenkins, GitOps, EventBridge, SNS and automated security workflows.',
  },
]

export const workExperience: ExperienceItem[] = [
  {
    role: 'DevSecOps Engineer',
    company: 'Log-UsIMS Technologies Pvt. Ltd.',
    location: 'Bengaluru, India',
    date: 'May 2024 - Present',
    summary:
      'Design, secure, and operate cloud-native infrastructure, Kubernetes platforms, and automated DevSecOps workflows across AWS, GCP, and OCI.',
    achievements: [
      'Design, secure and operate cloud-native infrastructure across AWS, GCP and OCI, supporting development, UAT and production environments.',
      'Engineer Kubernetes platforms across EKS, GKE, OKE and Nutanix NKP, covering cluster operations, workload management, upgrades, access controls and platform hardening.',
      'Embed security into CI/CD and infrastructure workflows through Infrastructure as Code, automated security checks, vulnerability management and deployment controls.',
      'Automate infrastructure provisioning, deployments, monitoring and operational workflows using Terraform, AWS CDK, Jenkins, GitHub Actions and Python.',
      'Support production reliability through observability, incident response, disaster recovery, capacity management and continuous infrastructure optimization.',
    ],
  },
  {
    role: 'Business Development Associate',
    company: 'DevTown',
    location: 'Bengaluru, India',
    date: 'Aug 2023 - May 2024',
    summary:
      'Owned inbound/outbound pipeline execution, client retention, and cross-functional technical onboarding initiatives.',
    achievements: [
      'Managed outbound and inbound sales pipeline, contributing to 25% revenue growth through strategic lead qualification and conversion.',
      'Improved retention and renewals through clear communication and SLA-driven follow-ups, strengthening client relationships and reducing churn.',
      'Maintained CRM hygiene and performed market research to identify new accounts and partnership opportunities, expanding the addressable market.',
      'Partnered with technical teams to translate client requirements into service proposals and successful onboarding plans, bridging sales and engineering.',
    ],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'Parul University Online',
    degree: 'MBA, Information Technology',
    location: 'Vadodara, India',
    date: 'Jul 2024 - May 2026',
    cgpa: '9.67',
  },
  {
    institution: 'Coimbatore Institute of Engineering and Technology',
    degree: 'B.Tech, Information Technology',
    location: 'Coimbatore, India',
    date: 'Nov 2020 - May 2024',
    cgpa: '8.92',
  },
]

export const technicalSkillCategories: SkillCategory[] = [
  {
    category: 'DevSecOps & Application Security',
    items: [
      'Semgrep',
      'Trivy',
      'OWASP ZAP',
      'Qualys',
      'OpenVAS',
      'Grype',
      'SonarQube',
      'Snyk',
      'TruffleHog',
      'SAST',
      'DAST',
      'SCA',
      'Vulnerability Assessments',
    ],
  },
  {
    category: 'Cloud Security',
    items: [
      'AWS WAF',
      'Cloudflare WAF',
      'GuardDuty',
      'Security Hub CSPM',
      'IAM',
      'IAM Identity Center',
      'RBAC',
      'KMS',
      'CloudTrail',
      'CIS Benchmarks',
      'PCI-DSS',
    ],
  },
  {
    category: 'AI/ML & GenAI',
    items: [
      'RAG Pipelines',
      'Vector Databases (Qdrant, Weaviate)',
      'LLM Orchestration',
      'Agentic Workflows',
      'Nutanix Enterprise AI',
      'Oracle Cloud GenAI',
    ],
  },
  {
    category: 'Cloud Platforms',
    items: ['AWS', 'GCP', 'OCI', 'Nutanix'],
  },
  {
    category: 'Kubernetes & Containers',
    items: [
      'Kubernetes (EKS, GKE, OKE, Nutanix NKP)',
      'Docker',
      'Podman',
      'Helm',
      'Argo CD',
      'Kustomize',
      'HPA/VPA',
      'GitOps',
    ],
  },
  {
    category: 'Infrastructure as Code',
    items: ['Terraform', 'AWS CDK', 'CloudFormation', 'Ansible'],
  },
  {
    category: 'CI/CD & Automation',
    items: [
      'Jenkins',
      'AWS CodePipeline',
      'GitHub Actions',
      'GitLab CI/CD',
      'Argo Workflows',
      'Python',
      'Bash',
    ],
  },
  {
    category: 'Observability & Monitoring',
    items: [
      'Datadog',
      'Groundcover',
      'Prometheus',
      'Grafana',
      'OpenTelemetry',
      'AWS X-Ray',
      'CloudWatch',
      'CloudWatch Synthetics',
      'ELK Stack',
      'Kubecost',
    ],
  },
  {
    category: 'Event-Driven & Messaging',
    items: [
      'EventBridge',
      'Pub/Sub',
      'SNS/SQS',
      'RabbitMQ',
      'Kafka',
      'Cloud Tasks',
      'Step Functions',
    ],
  },
  {
    category: 'Databases',
    items: [
      'MongoDB Atlas',
      'PostgreSQL',
      'Redis (Standalone, Cluster, Memorystore)',
      'Elasticsearch',
      'Vector Databases',
    ],
  },
  {
    category: 'Systems & Networking',
    items: [
      'Linux Administration (Amazon Linux 2/2023)',
      'Git',
      'nginx',
      'SSL/TLS',
      'Agile/SDLC',
    ],
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Oxpay Financial Services Platform',
    period: 'Jul 2025 - Present',
    stack: 'AWS ECS, Lambda, CDK, Jenkins, PCI-DSS',
    category: 'Client Engagement',
    imageURL: '/oxpay-logo.jpg',
    highlights: [
      'Infrastructure as Code: Built and managed production AWS infrastructure using Terraform and AWS CDK for repeatable and controlled deployments.',
      'Secure the Edge: Hardened AWS WAF with protection against SQL injection, XSS, directory traversal and sensitive endpoint exposure.',
      'Shift Security Left: Integrated Semgrep SAST and vulnerability scanning with CI/CD, alongside OWASP ZAP and Qualys/OpenVAS for security validation.',
      'Protect the Runtime: Enabled GuardDuty Runtime Monitoring, Security Hub CSPM and least-privilege IAM/RBAC across production environments.',
      'Monitor Everything: Built CDK-based CloudWatch monitoring across Lambda, ECS, API Gateway, Cognito and bastion hosts.',
      'Harden & Comply: Supported PCI-DSS activities through security hardening, vulnerability remediation, KMS key rotation and infrastructure lifecycle upgrades.',
      'Design for Recovery: Validated production DR across ECS, RDS Multi-AZ, S3 and Terraform/CDK with zero downtime during the GW3 failover drill.',
      'Optimize the Cloud: Contributed approximately $2,500/month in recurring savings through resource cleanup, decommissioning and infrastructure optimization.',
    ],
  },
  {
    title: 'Ren3 AI Platform',
    period: 'Jun 2025 - Present',
    stack: 'Oracle Cloud, GenAI, Nutanix Enterprise AI, OKE',
    category: 'Client Engagement',
    imageURL: '/ren3-logo.png',
    highlights: [
      'GenAI Platform: Designed and operated RAG-based AI infrastructure using vector databases, LLM services and cloud-native components across AWS, GCP and OCI.',
      'AI Infrastructure: Evaluated and supported GPU-based workloads and enterprise AI platforms for scalable model deployment and inference.',
      'AI Cost Governance: Built a centralized LLM cost dashboard covering multiple AI providers, providing model-wise usage, consumption and cost visibility for operational governance.',
      'Protect the Perimeter: Evaluated Cloudflare Managed WAF and followed a controlled log-to-block rollout for production workloads.',
    ],
  },
  {
    title: 'Mondee Travel Platform (Abhi)',
    period: 'Jul 2024 - Jan 2026',
    stack: 'GCP GKE, OCI OKE, Terraform, Jenkins, Cloud Armor',
    category: 'Client Engagement',
    imageURL: '/mondee-travel-banner.svg',
    highlights: [
      'Build the Platform: Provisioned four-tier infrastructure across Dev, QA, UAT and Production using Terraform, GCP VPC, GKE, Cloud Armor and Cloud DNS, supporting 50+ microservices and mobile backend APIs.',
      'Move Across Clouds: Led GCP-to-OCI migration covering OKE production clusters, private endpoints, Redis with TLS and multi-environment Terraform infrastructure, with automated health validation during production cutover.',
      'Ship at Scale: Engineered 100+ Jenkins pipelines for microservices, infrastructure and mobile releases, including automated Android/iOS builds with semantic versioning.',
      'Scale Kubernetes: Implemented workload segregation and node-pool consolidation across GKE and OKE, improving resource utilization while maintaining 99.5%+ service availability.',
      'Observe Production: Established Groundcover and Datadog observability with automated error reporting, SSL expiry alerts, backup/restore validation and synthetic canary monitoring.',
    ],
  },
  {
    title: 'Blinc Travel Platform',
    period: 'May 2024 - Dec 2024',
    stack: 'GCP, Cloud Run, Cloud Scheduler, Terraform',
    category: 'Client Engagement',
    imageURL: '/blinc-travel-banner.svg',
    highlights: [
      'Build with IaC: Templated GCP infrastructure across Cloud Run, Cloud SQL/PostgreSQL and GKE using Terraform, reducing environment provisioning time by 60% and establishing GitOps workflows for the Abhi mobile backend.',
      'Automate the Routine: Automated batch jobs using Cloud Scheduler and Jenkins, eliminating manual cron management, saving 3+ hours weekly and maintaining 99.8% availability under peak load.',
      'Connect the Services: Deployed event-driven infrastructure using MongoDB Atlas, Redis Cluster/Memorystore, Elasticsearch with nginx reverse proxy, RabbitMQ brokers and Pub/Sub for real-time search, caching and event streaming.',
    ],
  },
  {
    title: 'Aegis MCP',
    period: 'Jan 2025 - Present',
    stack: 'Python, FastMCP, FastAPI, boto3, JWT/RBAC',
    category: 'Open Source',
    packageName: '@raghulm/aegis-mcp',
    highlights: [
      'Security Toolkit: Built an open-source DevSecOps MCP server using Python, FastMCP and FastAPI, exposing 19 security tools across AWS infrastructure, Kubernetes, application security and network analysis.',
      'Shift-Left Security: Integrated Trivy, Semgrep and OSV.dev for container scanning, SAST and CVE analysis, alongside port scanning and SSL/TLS validation.',
      'Secure Access: Implemented JWT-based RBAC, YAML-based security policies and structured JSON audit logging for controlled security operations and SIEM integration.',
      'AI-Ready Security: Packaged the server as a non-root Docker image with health endpoints and published it to npm, enabling natural-language security workflows in Claude Desktop, Cursor and Windsurf through stdio and streamable-HTTP transports.',
    ],
  },
]

export const certifications: string[] = [
  'Nutanix Certified Professional – Multicloud Infrastructure 7.5 — Nutanix (2026)',
  'Nutanix Certified Professional – Multicloud Infrastructure 6.10 — Nutanix (2026)',
  'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate — Oracle (2026)',
  'Oracle Cloud Infrastructure 2025 Certified Foundations Associate — Oracle (2026)',
  'Python Mega Course — Udemy (2021)',
  'The Joy of Computing Using Python — NPTEL (2022)',
  'Programming in Java — NPTEL (2021)',
]

export const awards: AwardItem[] = [
  {
    title: 'Best Performer Award',
    issuer: 'Log-UsIMS Technologies Pvt. Ltd.',
    date: 'Dec 2025',
  },
  {
    title: 'Fast Learner Award',
    issuer: 'Log-UsIMS Technologies Pvt. Ltd.',
    date: 'Oct 2024',
  },
]

export const languages: string[] = [
  'English',
  'Tamil (Native)',
  'Kannada (Conversational)',
  'Telugu (Basic)',
  'Malay (Basic)',
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
