interface MemberSignupinterface {
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}

export class MemberSignup implements MemberSignupinterface {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    constructor(
        username: string,
        email: string,
        password: string,
        confirmPassword: string
    ) { }
}