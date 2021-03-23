/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Item {
    key: string;
    submittedDate: string;
    customerName: string;
    location: string;
    acceptedDate: string;
    lastName: string;
    email: string;
    agencyNumber: string;
    completedDate: string;
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
        customerName: 'Vehicle ',
        lastName: 'Robertson',
        email: 'paul.pp190@gmail.com',
        location: 'OHIO',
        agencyNumber: 'pol123456kl',
        submittedDate: '5/15/2020',
        acceptedDate: '7/15/2020',
        completedDate: '9/25/2020',
    },
    // {
    //     key: '2',
    //     title: 'Mr',
    //     firstName: 'Paul ',
    //     middleName: 'Peter',
    //     lastName: 'Robertson',
    //     email: 'paul.pp190@gmail.com',
    //     bmvLocation: 'OHIO',
    //     agencyNumber: 'pol123456kl',
    // },
];