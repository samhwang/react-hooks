interface WindowSizeType {
    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;
}
declare function getSizeCallback(isClient: boolean): {
    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;
};
declare function useWindowSize(): WindowSizeType;
export { useWindowSize as default, getSizeCallback };
export type { WindowSizeType };
