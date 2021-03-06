interface InitInput {
    network: string;
    scriptHash: string;
    gasPrice?: number;
    gasLimit?: number;
}
interface InitOutput {
    txid: string;
    nodeUrl: string;
}
export declare function init(data: InitInput): Promise<InitOutput>;
export {};
//# sourceMappingURL=init.d.ts.map