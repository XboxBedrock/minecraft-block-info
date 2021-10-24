declare module 'minecraft-block-info' {
    export function getBlockImageID(ids: any[]): Promise<string>;
    export function getBlockImageObject(objects: any[]): Promise<string>;
    export function isValidBlockID(id: string): boolean;
    export function isValidBlockName(name: string): boolean;
    export function isValidBlockDisplayName(displayName: string): boolean;
    export function getBlockInfoFromIDs(ids: any[]): Promise<any[]>;
    export function getBlockInfoFromNames(names: any[]): Promise<any[]>;
    export function getBlockInfoFromDisplayNames(displayNames: any[]):Promise<any[]>;
    export function searchAbsolute(queryList: any[]): Promise<any[]>;
    export function search(query: string): Promise<any[]>;
    export function filterInvalid(queryList: any[]): Promise<any[]>;
}
