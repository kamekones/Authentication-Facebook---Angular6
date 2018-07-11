

interface Bookinterface {
    namebook: string,
    total: number,
    price1: number,
    price2: number,
    detail: string,
    condition: string,
    transport: string,
    category: {}

}

export class Book implements Bookinterface {
    namebook: string;
    total: number;
    price1: number;
    price2: number;
    detail: string;
    condition: string;
    transport: string;
    category: {};

    constructor(
        namebook: string,
        total: number,
        price1: number,
        price2: number,
        detail: string,
        condition: string,
        transport: string,
        category: {}

    ) {
     }
}