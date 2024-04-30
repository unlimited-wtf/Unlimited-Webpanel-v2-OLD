export enum Actions {
    Create = 'create',
    Read = 'read',
    Update = 'update',
    Delete = 'delete'
}

export enum Subjects {
    // Support section
    SupportDashboard = 'support-dashboard',
    SupportTickets = 'support-tickets',
    SupportWhitelistApplications = 'support-whitelist-applications',
    SupportWhitelistQuestions = 'support-whitelist-questions',
    MapLive = 'map-live',
    MapWaypoints = 'map-waypoints',
    SupportCharacters = 'support-characters',
    SupportVehicles = 'support-vehicles',
    SupportStashes = 'support-stashes',
    LogsPlayer = 'logs-player',
    LogsGame = 'logs-game',

    // Development section
    CoreItems = 'core-items',
    CoreJobs = 'core-jobs',
    CoreGangs = 'core-gangs',
    Triggers = 'triggers',
    Doors = 'doors',

    // Administration section
    Users = 'users',
    Roles = 'roles',
    Configuration = 'configuration'
}
