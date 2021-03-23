/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Item {
    key: string;
    location_name: string;
    address_1: string;
    address_2: string;
    city: string;
    county: string;
    zip: string;
    phone: string;
    fax: string;
    email: string;

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
        location_name: 'Mr',
        address_1: 'Location ',
        address_2: 'Peter',
        city: 'Robertson',
        county: 'OHIO',
        zip: 'pol123456kl',
        phone: 'pol123456kl',
        fax: 'pol123',
        email: 'paul.pp190@gmail.com',
    },
];