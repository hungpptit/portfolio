export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  type: 'Web' | 'Mobile' | 'Game' | 'AI' | 'System';
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
