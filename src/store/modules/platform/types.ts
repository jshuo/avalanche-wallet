import {
    DelegatorPendingRaw,
    DelegatorRaw,
    ValidatorPendingRaw,
    ValidatorRaw
} from "@/components/misc/ValidatorList/types";
import {BN} from "avalanche";

export interface PlatformState {
    validators: ValidatorRaw[];
    validatorsPending: ValidatorPendingRaw[];
    delegators: DelegatorRaw[];
    delegatorsPending: DelegatorPendingRaw[];
    minStake: BN;
    minStakeDelegation: BN;
    currentSupply: BN;
}

export interface GetValidatorsResponse {
    validators: ValidatorRaw[],
    delegators : DelegatorRaw[],
}

export interface ValidatorGroup{
    data: ValidatorRaw,
    delegators: DelegatorRaw[]
}

export interface ValidatorDelegatorDict{
    [key: string]: DelegatorRaw[];
}

export interface ValidatorDelegatorPendingDict{
    [key: string]: DelegatorPendingRaw[];
}

export interface ValidatorDict {
    [nodeId: string]: ValidatorRaw
}
