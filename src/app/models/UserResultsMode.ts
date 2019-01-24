export interface assessmentDetail {
    id:number,
    assessmentId:number,
    questionId:number,
    givenAnswerId:number,
    rightAnswerId:number
}

export interface IUserResult {
    userId:number,
    userName:string,
    assignmentId:number,
    totalScore:number,
    assessmentDetail: any[]
}

export interface IQuestionAnswer {
    id:number,
    title:string,
    description:string,
    questionTypeId:number,
    categoryId:number,
    priority:number,
    orderBy:number,
    isRequired:boolean,
    timerInSeconds:number,
    questionType: any[],
    category: any[],
    options: any[],
}