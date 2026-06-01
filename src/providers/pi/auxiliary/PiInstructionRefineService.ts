import { QueryBackedInstructionRefineService } from '../../../core/auxiliary/QueryBackedInstructionRefineService';
import type KorianPlugin from '../../../main';
import { PiAuxQueryRunner } from '../runtime/PiAuxQueryRunner';

export class PiInstructionRefineService extends QueryBackedInstructionRefineService {
  constructor(plugin: KorianPlugin) {
    super(new PiAuxQueryRunner(plugin, { profile: 'passive' }));
  }
}
