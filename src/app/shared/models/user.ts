export interface User {
    readonly id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    two_factor_confirmed_at?: string;
    two_factor_recovery_codes?: string;
    two_factor_secret?: string;
    updated_at: Date;
    readonly created_at: Date;
    timestamp?: number;
}
