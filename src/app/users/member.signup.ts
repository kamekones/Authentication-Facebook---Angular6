interface MemberSignupinterface {
    fname: string,
    lname: string,
    email: string,
    password: string,
    confirmPassword: string
}

export class MemberSignup implements MemberSignupinterface {
    fname: string;
    lname: string;
    email: string;
    password: string;
    confirmPassword: string;
    constructor(
        fname: string,
        lname: string,
        email: string,
        password: string,
        confirmPassword: string
    ) { }
}