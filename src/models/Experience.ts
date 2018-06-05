import IExperience from './interface/IExprience';
import IProject from './interface/IProject';

class Experience implements IExperience {
  Id: number;
  Employer: string;
  Position: string;
  Responsibilities: any;
  CurrentEmployer: boolean;
  BeginDate: Date;
  EndDate: Date;
  Projects: IProject[];

  constructor(experience: IExperience) {
    this.Id = experience.Id;
    this.Employer = experience.Employer;
    this.Position = experience.Position;
    this.Responsibilities = experience.Responsibilities;
    this.CurrentEmployer = experience.CurrentEmployer;
    this.BeginDate = experience.BeginDate;
    this.EndDate = experience.EndDate;
    this.Projects = experience.Projects;
  }
}
