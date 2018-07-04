interface Accountinterface {
    fname: string,
    lname: string,
    email: string,
    tel: string,
}

export class Account implements Accountinterface {
    fname: string;
    lname: string;
    email: string;
    tel: string;
    constructor(
        fname: string,
        lname: string,
        email: string,
        tel: string,
    ) { }
}