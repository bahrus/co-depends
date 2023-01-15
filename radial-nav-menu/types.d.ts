export interface EndUserProps{
    toggled?: boolean;
}

export interface Props extends EndUserProps{
    isC: boolean;
}

export interface IMenuOptionsEndUserProps {
    icon: string;
    index: number;
    label: string;
    url: string;
    type: "quick" | "full";
}

export interface IMenuOptionProps extends IMenuOptionsEndUserProps {
    hyperlinkCss: string;
    open: boolean;
    closed: boolean,
    transitionDelay: string,
}

export interface IMenuOptionActions {
    derive(self: this): Partial<IMenuOptionProps>;
}