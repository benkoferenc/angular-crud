import { Reference } from "./reference.model";

export interface Link {
    target: Reference;
    assurance?: 'level1' | 'level2' | 'level3' | 'level4';
}
