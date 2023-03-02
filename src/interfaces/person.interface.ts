import { ISocial } from "./social.interface";
import { IEducation } from "./education.interface";
import { ILanguage } from "./language.interface";

export interface IPerson {
  personName: string;
  personPosition: string;
  phone: string;
  city: string;
  email: string;
  socialLinks: ISocial;
  education: IEducation[];
  languages: ILanguage[];
  skills: string[];
}
