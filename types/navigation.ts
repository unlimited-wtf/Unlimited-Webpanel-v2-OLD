export type NavigationHeaderChild = {
    action: String;
    subject: String;
};

export interface NavigationItem {
    title: String;
    action: String;
    subject: String;
    header?: String;
    icon?: String;
    route?: String;
    children?: NavigationHeaderChild[];
}
