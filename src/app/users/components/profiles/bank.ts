interface Banksinterface {
    bank: string,
    numberbank: string,
    account: string,
    branch: string,
    province: string
}

export class Banks implements Banksinterface {
    bank: string;
    numberbank: string;
    account: string;
    branch: string;
    province: string
    constructor(
        bank: string,
        numberbank: string,
        account: string,
        branch: string,
        province: string
    ) { }
}