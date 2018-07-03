interface EditMemberAdmininterface {
    fname: string,
    lname: string,
    email: string,
}

export class EditMemberAdmin implements EditMemberAdmininterface {
    fname: string;
    lname: string;
    email: string;
    constructor(
        fname: string,
        lname: string,
        email: string,
    ) { }
}