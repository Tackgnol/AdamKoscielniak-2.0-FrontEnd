import ISocial from './interface/ISocial';

export default class Social implements ISocial {
    Sort: number;
    Name: string;
    FaIcon: string;
    Url: string;

    constructor(social?: ISocial) {
        this.Sort = social && social.Sort || null;
        this.Name = social && social.Name || null;
        this.FaIcon = social && social.FaIcon || null;
        this.Url = social && social.Url || null;
    }

}
