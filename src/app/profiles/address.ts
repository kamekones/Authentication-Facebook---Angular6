interface Addressinterface {
    name: string,
    address: string,
    sub_district: string,
    district: string,
    province: string,
    postcode: string,
    tel: string,
}

export class Address implements Addressinterface {
    name: string;
    address: string;
    sub_district: string;
    district: string;
    province: string;
    postcode: string;
    tel: string;
    constructor(
        name: string,
        address: string,
        sub_district: string,
        district: string,
        province: string,
        postcode: string,
        tel: string,
    ) { }
}