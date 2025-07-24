export interface IdealCandidate {
  age: string;
  gender: string;
  traits: string[];
}

export interface JobAbout {
  posted_on: string;
  deadline: string;
  location: string;
  start_date: string;
  end_date: string;
  categories: string[];
  required_skills: string[];
}

export interface JobPosting {
  id: number;
  title: string;
  description: string;
  responsibilities: string[];
  ideal_candidate: IdealCandidate;
  when_where: string;
  about: JobAbout;
  company: string;
  image: string;
}

export interface JobData {
  job_postings: JobPosting[];
}

export interface JobTag {
  text: string;
  variant: "primary" | "secondary" | "tertiary";
}

export interface ResponsibilityItem {
  id: string;
  text: string;
  completed: boolean;
}
