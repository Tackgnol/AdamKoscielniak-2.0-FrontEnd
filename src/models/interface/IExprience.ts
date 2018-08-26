import IProject from '../interface/IProject';

interface IExperience {
  Id: number;
  Employer: string;
  Position: string;
  Responsibilities: Array<string>;
  CurrentEmployer: boolean;
  Skills: Array<string>;
  BeginDate: Date;
  EndDate: Date;
  Projects: Array<IProject>;
}

export default IExperience;
