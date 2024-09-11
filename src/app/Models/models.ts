export interface Expense {
    id?: number;
    head?: string;
    description?: string;
}
export interface CylenderType {
    id?: number;
    cylender?: string;
    description?: string;
}

export interface CustomerType{
    id?:number;
    customType?:string;
    description?:string;
}
export interface LpgRate{
    id?:number;
    date?:string;
    rate?:string;
}
export interface ExpensVoucher{
    id?:number;
    expensId?:string;
    date?:string;
    time?:string;
    accountHead?:string;
    amount?:string;
    expensBy?:string;
    description?:string;
}

export interface Customers{
    id?:number;
    name?:string;
    address?:string;
    phone?:string;
    mobile?:string;
    email?:string;
    fax?:string;
    contactPerson?:string;
    openingBalance?:string;
    openingBalanceDate?:string;
    currentBalance?:string;


}

