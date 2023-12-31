export enum Actions {
    Manage = 'manage',
    Create = 'create',
    Read = 'read',
    Update = 'update',
    Delete = 'delete'
}

export enum Subjects {
    Test = 'test'
}

export const PermissionDefaults = [
    {
        action: Actions.Manage,
        subject: Subjects.Test
    },
    {
        action: Actions.Create,
        subject: Subjects.Test
    },
    {
        action: Actions.Read,
        subject: Subjects.Test
    },
    {
        action: Actions.Update,
        subject: Subjects.Test
    },
    {
        action: Actions.Delete,
        subject: Subjects.Test
    }
];
