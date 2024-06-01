import { Tag } from "./tag";
import { User } from "./user";

export interface Issue {
    readonly id: number;
    key: string;
    key_number: number;
    summary: string;
    assignee_id?: number;
    assignee?: User
    owner_id?: number;
    owner?: User;
    start_date?: Date;
    end_date?: Date;
    created_at: Date;
    tags?: Tag[];
}
