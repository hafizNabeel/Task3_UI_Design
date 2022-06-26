
export class User{

  public  firstName: string;
  public lastName: string;
  public email?: string;
  public company?: string;
  public score?: number;
  public phoneNumber: any;
  public tags?: string[];
  public dateCreated?: string;

  constructor(fName:string, lName:string, email:string , company: string, score:number, phno:string, tags:string[], dateCreated:string ){
    this.firstName=fName;
    this.lastName=lName;
    this.email = email ;
    this.company= company;
    this.score=score;
    this.phoneNumber=phno;
    this.tags=tags;
    this.dateCreated=dateCreated;
  }
}







