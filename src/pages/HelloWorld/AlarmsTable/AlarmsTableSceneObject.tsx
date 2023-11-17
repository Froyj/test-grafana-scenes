import React from 'react';
import {
  SceneComponentProps,
} from '@grafana/scenes';
import { AlarmsTable } from './AlarmsTable';

export function AlarmsTableRenderer({ model }: SceneComponentProps<AlarmsTable>) {
  const { alarms } = model.useState();

  return (
    <div>
      AlarmsTable
      <table>
        <thead>
          <td>Parameter</td>
          <td>Criticity</td>
          <td>Value</td>
          <td>Type</td>
        </thead>
        {alarms.map((alarm, index) => {
          return (
            <tr key={`${alarm.parameter}-${index}`}>
              <td>{alarm.parameter}</td>
              <td>{alarm.status}</td>
              <td>{alarm.value}</td>
              <td>{alarm.type}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export { AlarmsTable };

