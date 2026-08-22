export type ProjectCategory = 'all' | 'backend' | 'microservices' | 'fullstack' | 'mobile' | 'ai';

export interface TechStackItem {
  layer: string;
  tech: string;
  version?: string;
  role: string;
}

export interface AIPipelineStep {
  step: number;
  name: string;
  algo: string;
  description: string;
  result: string;
  timeMs?: string;
}

export interface DBModule {
  id: number;
  name: string;
  tables: string[];
  keyFeature: string;
}

export interface TestResult {
  group: string;
  name: string;
  timeMs: string;
  result: string;
  status: 'PASS' | 'FAIL';
}

export interface BusinessImpact {
  metric: string;
  before: string;
  after: string;
  delta: string;
}

export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  featured?: boolean;
  tags: string[];
  architectureHighlights: string[];
  metrics?: string;
  githubUrl: string;
  demoUrl?: string;
  branch?: string;
  hasDetailPage?: boolean;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Core', 'Proficient'
    tag?: string;
  }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
}
