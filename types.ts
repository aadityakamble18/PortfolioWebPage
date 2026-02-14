
export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  architecture: string;
  stack: string[];
  decisions: string;
  githubUrl?: string;
  results: {
    metric: string;
    value: string;
  }[];
}

export interface CapabilityGroup {
  category: string;
  items: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  milestones: string[];
}

export interface ResearchItem {
  id: string;
  title: string;
  type: 'RESEARCH' | 'PRESENTATION';
  domain: string;
  status: 'ACTIVE' | 'ARCHIVED' | 'PEER_REVIEW';
  summary: string;
  objectives: string[];
  methodology: string;
  tools: string[];
  collaborators: string[];
  data?: { label: string; value: string }[];
}