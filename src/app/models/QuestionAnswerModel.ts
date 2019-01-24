export class QuestionAnswer {
    questions: Question[];

    constructor(params) {
        if(params != null)
        {
            this.questions = params;
        }
    }
}

class Question{
    id:number;
    title:string;
    description:string;
    questionTypeId:number;
    categoryId:number;
    priority:number;
    orderBy:number;
    isRequired:boolean;
    timerInSeconds:number;
    questionType: any[];
    category: any[];
    options: any[];
}