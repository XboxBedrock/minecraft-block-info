declare module 'minecraft-block-info' {
    export function getBlockImageID(ids: any[]): string;
    export function getBlockImageObject(objects: any[]): string;
    export function isValidBlockID(id: string): boolean;
    export function isValidBlockName(name: string): boolean;
    export function isValidBlockDisplayName(displayName: string): boolean;
    export function getBlockInfoFromIDs(ids: any[]): any[];
    export function getBlockInfoFromNames(names: any[]): any[];
    export function getBlockInfoFromDisplayNames(displayNames: any[]): any[];
    export function searchAbsolute(queryList: any[]): any[];
    export function search(query: string): any[];
}
