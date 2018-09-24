import IExperience from './interface/IExprience';
import Project from './submodels/Project';

export class Experience implements IExperience {
  Id: number;
  Employer: string;
  Position: string;
  Responsibilities: Array<string>;
  CurrentEmployer: boolean;
  Skills: Array<string>;
  CompanyWebsite: string;
  Projects: Array<Project>;
  Location: string;
  BeginDate: { $date: number } | Date;
  EndDate: { $date: number } | Date;
  getBeginDate: Date;
  getEndDate: Date;


  constructor(experience?: IExperience) {
    this.Id = experience && experience.Id || null;
    this.Employer = experience && experience.Employer || null;
    this.Position = experience && experience.Position || null;
    this.Responsibilities = experience && experience.Responsibilities || [];
    this.CurrentEmployer = experience && experience.CurrentEmployer || false;
    this.Skills = experience && experience.Skills || [];
    this.CompanyWebsite = experience && experience.CompanyWebsite || null;
    this.BeginDate = experience && experience.BeginDate || { $date: 0 };
    this.EndDate = experience && experience.EndDate || { $date: 0 };
    this.getBeginDate = experience && new Date(experience.BeginDate.$date) || new Date();
    this.getEndDate = experience && new Date(experience.EndDate.$date) || new Date();
    this.Projects = experience && experience.Projects || [];
    this.Location = experience && experience.Location || null;

  }

}
