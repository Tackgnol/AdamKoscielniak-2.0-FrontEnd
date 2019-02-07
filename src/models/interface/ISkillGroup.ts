import ISkill from './ISkill';

export default interface ISkillGroup {
    Id: number;
    Name: string;
    Sort: number;
    Skills: Array<ISkill>;
}
