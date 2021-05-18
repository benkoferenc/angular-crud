import { Link } from "./link.model";
import { Reference } from "./reference.model";

export interface Person {
    identifier?: number[];
    name?: string[];
    telecom?: string[];
    gender?: 'male' | 'female' | 'other' | 'unknown';
    birthDate?: Date;
    address?: string[];
    photo?: string;
    managingOrganization?: Reference;
    active?: boolean;
    link?: Link[];
}
