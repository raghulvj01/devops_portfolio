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
    cgpa: '8.92',
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
      'Azure (VMs, AKS, Pipelines, DevOps)',
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
