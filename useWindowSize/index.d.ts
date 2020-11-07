interface WindowSizeType {
    width: number;
    height: number;
}
declare function getSizeCallback(isClient: boolean): {
    width: number;
    height: number;
};
declare function useWindowSize(): WindowSizeType;
export { useWindowSize as default, getSizeCallback };
export type { WindowSizeType };
