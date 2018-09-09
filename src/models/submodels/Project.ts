import IProject from 'src/models/interface/IProject';

export default class Project implements IProject {
    Id: number;
    Title: string;
    Description: string;
    Result: string;
    PortfolioLink: string;

    constructor(project?: IProject) {
        this.Id = project && project.Id || null;
        this.Title = project && project.Title || null;
        this.Description = project && project.Description || null;
        this.Result = project && project.Result || null;
        this.PortfolioLink = project && project.PortfolioLink || null;
    }
}
