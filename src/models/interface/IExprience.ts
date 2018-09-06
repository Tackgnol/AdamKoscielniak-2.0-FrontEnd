import IProject from '../interface/IProject';

interface IExperience {
  Id: number;
  Employer: string;
  Position: string;
  Responsibilities: Array<string>;
  CurrentEmployer: boolean;
  Skills: Array<string>;
  BeginDate: { $date: number };
  EndDate: { $date: number };
  Projects: Array<IProject>;
  Location: string;
}

export default IExperience;
