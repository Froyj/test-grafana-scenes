import { SceneObjectBase, SceneObjectState } from "@grafana/scenes";
import { AlarmsTableRenderer } from "./AlarmsTableSceneObject";

export interface AlarmsTableState extends SceneObjectState {
  alarms: Array<{
    parameter: string;
    status: 'CRITICAL' | 'WARNING';
    value: any;
    type: 'RAISE' | 'ACKNOWLEDGE' | 'UPDATE';
  }>;
}

export class AlarmsTable extends SceneObjectBase<AlarmsTableState> {
  public constructor(state?: Partial<AlarmsTableState>) {
    super({
      alarms: [
        {
          parameter: 'BATT_LOWX1',
          status: 'WARNING',
          value: 17,
          type: 'UPDATE'
        },
        {
          parameter: 'BATT_LOWX1',
          status: 'CRITICAL',
          value: 5,
          type: 'UPDATE'
        },
        {
          parameter: 'CAM_RIGHT3_PAN',
          status: 'WARNING',
          value: 23,
          type: 'UPDATE'
        }
      ],
      ...state
    });
  }

  static Component = AlarmsTableRenderer;
};
