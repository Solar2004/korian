import { QueryBackedInlineEditService } from '../../../core/auxiliary/QueryBackedInlineEditService';
import type KorianPlugin from '../../../main';
import { PiAuxQueryRunner } from '../runtime/PiAuxQueryRunner';

export class PiInlineEditService extends QueryBackedInlineEditService {
  constructor(plugin: KorianPlugin) {
    super(new PiAuxQueryRunner(plugin, { profile: 'readonly' }));
  }
}
