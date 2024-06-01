export interface Tag {
    readonly id: number;
    issue_id: number;
    tag: string;
    readonly created_at: Date;
    updated_at: Date;
}
