import { FileUpload } from '../../FileUpload/fileupload';

interface Bookinterface {
    namebook: string,
    total: number,
    price1: number,
    price2: number,
    detail: string,
    condition: string,

}

export class Book implements Bookinterface {
    namebook: string;
    total: number;
    price1: number;
    price2: number;
    detail: string;
    condition: string;
    constructor(
        namebook: string,
        total: number,
        price1: number,
        price2: number,
        detail: string,
        condition: string,
    ) {
     }
}