import IHobby from './interface/IHobby';



export default class Hobby implements IHobby {
    Id: number;
    Name: string;
    Description: string;
    FAIcon: string;
    Photos: String[];


    constructor(hobby?: IHobby) {
        this.Id = hobby && hobby.Id || null;
        this.Name = hobby && hobby.Name || null;
        this.Description = hobby && hobby.Description || null;
        this.Photos = hobby && hobby.Photos || [];
    }

}
