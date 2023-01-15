export interface EndUserProps{
    open?: boolean;
}

export interface Props extends EndUserProps{
    isC: boolean;
}

export interface IMenuOptionsEndUserProps {
    icon: string;
    index: number;
    label: string;
    url: string;
    type: 'quick' | 'full';
    open: boolean;
}

export interface IMenuOptionsDerivedProps{
    hyperlinkCss: string;
    closed: boolean,
    transitionDelay: string,
    labelCss: 'tooltip' | 'label';
}

export interface IMenuOptionProps extends IMenuOptionsEndUserProps, IMenuOptionsDerivedProps {

}

export interface IMenuOptionActions {
    derive(self: this): IMenuOptionsDerivedProps;
}