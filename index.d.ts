declare module 'minecraft-block-info' {
    export function getBlockImageID(ids: any[]): string;
    export function isValidBlockID(id: string): boolean;
    export function isValidBlockName(name: string): boolean;
    export function isValidBlockDisplayName(displayName: string): boolean;
    export function getBlockInfoFromIDs(ids: any[]): string;
    export function getBlockInfoFromNames(names: any[]): string;
    export function getBlockInfoFromDisplayNames(displayNames: any[]): string;
}
