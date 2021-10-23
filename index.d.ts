declare module 'minecraft-block-info' {
    export async function getBlockImageID(ids: any[]): Promise<string>;
    export async function getBlockImageObject(objects: any[]): Promise<string>;
    export function isValidBlockID(id: string): boolean;
    export function isValidBlockName(name: string): boolean;
    export function isValidBlockDisplayName(displayName: string): boolean;
    export async function getBlockInfoFromIDs(ids: any[]): Promise<any[]>;
    export async function getBlockInfoFromNames(names: any[]): Promise<any[]>;
    export async function getBlockInfoFromDisplayNames(displayNames: any[]):Promise<any[]>;
    export async function searchAbsolute(queryList: any[]): Promise<any[]>;
    export async function search(query: string): Promise<any[]>;
}
