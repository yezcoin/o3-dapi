export interface DeployArgs {
    network: any;
    name: string;
    version: string;
    author: string;
    email: string;
    description: string;
    needsStorage?: boolean;
    dynamicInvoke?: boolean;
    isPayable?: boolean;
    returnType: string;
    parameterList: string;
    code: string;
}
export interface DeployOutput {
    txid: string;
    nodeUrl: string;
}
export declare function deploy(data: DeployArgs): Promise<DeployOutput>;
//# sourceMappingURL=deploy.d.ts.map