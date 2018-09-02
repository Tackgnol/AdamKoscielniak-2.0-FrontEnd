import IExperience from './interface/IExprience';
import IProject from './interface/IProject';

export class Experience implements IExperience, ISerializebleModel<Experience> {
  Id: number;
  Employer: string;
  Position: string;
  Responsibilities: any;
  CurrentEmployer: boolean;
  Skills: Array<string>;
  BeginDate: Date;
  EndDate: Date;
  Projects: Array<IProject>;
  Location: string;

  constructor(experience: IExperience) {
    this.Id = experience.Id;
    this.Employer = experience.Employer;
    this.Position = experience.Position;
    this.Responsibilities = experience.Responsibilities;
    this.Skills = experience.Skills;
    this.CurrentEmployer = experience.CurrentEmployer;
    this.BeginDate = experience.BeginDate;
    this.EndDate = experience.EndDate;
    this.Projects = experience.Projects;
  }

  deserialize(jsonObject: string): Experience {
    // const experience =  JSON.parse(jsonObject);
    // if(experience of IExperience) {
    //   return new Experience(experience);
    // } else {
    throw new Error('Invalid experience object passed to deserializer');
    // }
  }
  serialize(object: Experience): string {
    return JSON.stringify(object);
  }
}
