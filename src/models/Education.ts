import Ieducation from './interface/IExprience';
import Project from './submodels/Project';
import IEducation from './interface/IEductation';

export class Education implements IEducation {
    Id: number;
    School: string;
    Level: string;
    Faculty: string;
    Course: string;
    Thesis: string;
    GradeEu: number;
    GradeUs: string;
    BeginDate: { $date: number } | Date;
    EndDate: { $date: number } | Date;
    Projects: Array<Project>;
    getBeginDate: Date;
    getEndDate: Date;

    constructor(education?: IEducation) {
        this.Id = education && education.Id || null;
        this.School = education && education.School || null;
        this.Course = education && education.Course || null;
        this.Thesis = education && education.Thesis || null;
        this.Level = education && education.Level || null;
        this.Faculty = education && education.Faculty || null;
        this.GradeEu = education && education.GradeEu || 2;
        this.GradeUs = education && education.GradeUs || null;
        this.BeginDate = education && education.BeginDate || { $date: 0 };
        this.EndDate = education && education.EndDate || { $date: 0 };
        this.getBeginDate = education && new Date(education.BeginDate.$date) || new Date();
        this.getEndDate = education && new Date(education.EndDate.$date) || new Date();
        this.Projects = education && education.Projects || [];
    }

}
