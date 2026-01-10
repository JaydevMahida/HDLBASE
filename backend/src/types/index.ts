export enum UserRole {
    CONTRIBUTOR = 'Contributor',
    LEARNER = 'Learner',
    ADMIN = 'ADMIN'
}

export interface DecodedUser {
    uid: string;
    email: string;
    role: UserRole;
    [key: string]: any;
}
