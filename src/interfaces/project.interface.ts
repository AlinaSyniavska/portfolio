export interface IProject {
  title: string;
  description: string;
  stack: string[];
  links: {
    front?: string;
    back?: string;
    image?: string;
    website?: string;
    video?: string;
  };
}
