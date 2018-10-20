import IProject from '../interface/IProject';


interface IEducation {
    Id: number;
    School: string;
    Level: string;
    Faculty: string;
    Course: string;
    Thesis: string;
    GradeEu: number;
    GradeUs: string;
    BeginDate: any;
    EndDate: any;
    Projects: Array<IProject>;
}

export default IEducation;
