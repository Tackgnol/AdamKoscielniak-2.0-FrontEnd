import ISkillGroup from './interface/ISkillGroup';
import Skill from './submodels/Skill';

export default class SkillGroup implements ISkillGroup {
    Id: number;
    Name: string;
    Sort: number;
    Skills: Array<Skill>;
    constructor(skill?: ISkillGroup) {
        this.Id = skill && skill.Id || null;
        this.Name = skill && skill.Name || null;
        this.Sort = skill && skill.Sort || null;
        this.Skills = skill && skill.Skills || [];
    }
}
