
export interface Props {
    border?: string;
    color?: string;
    children?: React.ReactNode;
    height?: string;
    id?: string;
    onClick?: () => void;
    // onClick?: {
    //     clickHandler: void
    //     clicksCount: void
    // };
    onMouseUp?: () => void;
    radius?: string;
    width?: string;
    className?: string;
    // ClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => any | void | null | undefined;
    ClickHandler?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    // ClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    buttonname?: string;
    background?: string;
    shape?: string;
    right?: string;
    style?: {
        borderRadius?: string, backgroundColor?: string, width?: string, border?: string,
        color?: string, height?: string,
    } | undefined
    icon?: React.ReactNode
}