import ISkill from '../interface/ISkill';

export default class Skill implements ISkill {
    Id?: number;
    Name: string;
    Proficiency: number;
    Sort?: number;
    constructor(skill?: ISkill) {
        this.Id = skill && skill.Id || null;
        this.Name = skill && skill.Name || null;
        this.Proficiency = skill && skill.Proficiency || 0;
        this.Sort = skill && skill.Sort || null;
    }
}

