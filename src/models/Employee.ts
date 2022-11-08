interface EmployeeAddress {
    street: string;
    city: string;
    state: string;
    zip: string;
}
/**
 * Employee model
 */
export interface Employee {
    firstName:string;
    lastName:string;
    birthDay:Date;
    startDate:Date;
    address:EmployeeAddress;
    department:string;
}