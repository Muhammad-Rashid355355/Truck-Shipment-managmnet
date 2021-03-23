/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Item {
    key: string;
    title: string;
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    bmvLocation: string;
    agencyNumber: string;
}
export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}
export const originData: Item[] = [
    {
        key: '1',
        title: 'Mr',
        firstName: 'Manager ',
        middleName: 'Peter',
        lastName: 'Robertson',
        email: 'paul.pp190@gmail.com',
        bmvLocation: 'OHIO',
        agencyNumber: 'pol123456kl',
    },
    {
        key: '2',
        title: 'Mr',
        firstName: 'Paul ',
        middleName: 'Peter',
        lastName: 'Robertson',
        email: 'paul.pp190@gmail.com',
        bmvLocation: 'OHIO',
        agencyNumber: 'pol123456kl',
    },
];