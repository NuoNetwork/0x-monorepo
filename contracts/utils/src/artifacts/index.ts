import { ContractArtifact } from 'ethereum-types';

import * as IOwnable from '../../generated-artifacts/IOwnable.json';
import * as LibBytes from '../../generated-artifacts/LibBytes.json';
import * as Ownable from '../../generated-artifacts/Ownable.json';
import * as ReentrancyGuard from '../../generated-artifacts/ReentrancyGuard.json';
import * as SafeMath from '../../generated-artifacts/SafeMath.json';
import * as TestConstants from '../../generated-artifacts/TestConstants.json';
import * as TestLibBytes from '../../generated-artifacts/TestLibBytes.json';

export const artifacts = {
    TestConstants: TestConstants as ContractArtifact,
    TestLibBytes: TestLibBytes as ContractArtifact,
    IOwnable: IOwnable as ContractArtifact,
    LibBytes: LibBytes as ContractArtifact,
    Ownable: Ownable as ContractArtifact,
    SafeMath: SafeMath as ContractArtifact,
    ReentrancyGuard: ReentrancyGuard as ContractArtifact,
};
