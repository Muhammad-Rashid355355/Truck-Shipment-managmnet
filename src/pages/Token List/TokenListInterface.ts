

export interface Item {
    key: string
    name: string;
    KeyLastdigits: number,
    SecretLastdigits: number,
    UserCreated: string,
    Permission: string,
    LastAccess: string
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