declare module 'minecraft-block-info' {
    export async function getBlockImageID(ids: any[]): string;
    export async function getBlockImageObject(objects: any[]): string;
    export function isValidBlockID(id: string): boolean;
    export function isValidBlockName(name: string): boolean;
    export function isValidBlockDisplayName(displayName: string): boolean;
    export async function getBlockInfoFromIDs(ids: any[]): any[];
    export async function getBlockInfoFromNames(names: any[]): any[];
    export async function getBlockInfoFromDisplayNames(displayNames: any[]): any[];
    export async function searchAbsolute(queryList: any[]): any[];
    export async function search(query: string): any[];
}
