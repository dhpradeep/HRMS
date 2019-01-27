export interface assignment{
    title:number;
    assignmentPurpose:number,
    assignmentType:number,
    assignmentLevel:number,
    assignmentDetails: assignmentDetails;

}

export interface assignmentDetails {
    categoryId: number,
    displayOrder:number,
    numberOfQuestions:number
}