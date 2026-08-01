export interface ProjectReport {
  href: string;
  label?: string;
}

export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  tech?: string[];
  featured?: boolean;
  reports?: ProjectReport[];
}

const data: Project[] = [];

export default data;
