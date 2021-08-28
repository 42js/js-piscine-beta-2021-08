/**
 * Utilities for working with typescript types
 */
export declare type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
export declare type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export declare type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;
export declare type DistributiveExtend<T, K extends any> = T extends any ? T & K : never;
//# sourceMappingURL=type-utils.d.ts.map