interface MemberAdmininterface {
    fname: string,
    lname: string,
    email: string,
    password: string,
    confirmPassword: string,
    isAdmin: string
}

export class MemberAdmin implements MemberAdmininterface {
    fname: string;
    lname: string;
    email: string;
    password: string;
    confirmPassword: string;
    isAdmin: string
    constructor(
        fname: string,
        lname: string,
        email: string,
        password: string,
        confirmPassword: string,
        isAdmin: string
    ) { }
}