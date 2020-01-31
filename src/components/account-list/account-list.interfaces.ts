module ig {
    export interface IAccount {
        id: number,
        name: string,
        default: boolean,
        funds: number,
        profitLoss: number,
        accountType: string,
        type: IType,
        isDemo: boolean,
        currency: string
    }

    export interface IType {
        id: string,
        title: string
    }

    export interface IOrder {
        arr: string[],
        obj: IOrderElement[],
    }

    export interface IOrderElement {
        isDesc: boolean
        name: string,
        value: string,
    }
}