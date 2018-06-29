interface MemberLogininterface {
    email: string,
    password: string,
}

export class MemberLogin implements MemberLogininterface {
    email: string;
    password: string;
    constructor(
        email: string,
        password: string,
    ) { }
}