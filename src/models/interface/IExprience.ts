import IProject from '../interface/IProject';

interface IExperience {
  Id: number;
  Employer: string;
  Position: string;
  Responsibilities: Array<string>;
  CurrentEmployer: boolean;
  Skills: Array<string>;
  CompanyWebsite: string;
  BeginDate: any;
  EndDate: any;
  Projects: Array<IProject>;
  Location: string;
}

export default IExperience;
