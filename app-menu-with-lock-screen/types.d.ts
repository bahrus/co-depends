export interface EndUserProps{
    userStatus: "Logged In" | "Logging In" | "Logged Out" | "Log In Error" | "Verifying Log In";
}

export interface Props extends EndUserProps{
    userStatusCls: string,
    notInErrorState: boolean,
}

export interface Actions{
    provideUIHints(self: Props): Partial<Props>
}