interface Userinterface {
    fname: string,
    lname: string,
    email: string,
    tel: string,
}

export class User implements Userinterface {
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