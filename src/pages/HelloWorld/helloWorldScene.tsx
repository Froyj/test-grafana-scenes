import {
  EmbeddedScene,
  SceneFlexItem,
  PanelBuilders,
  SceneTimeRange,
  SceneTimePicker,
  SplitLayout,
  SceneQueryRunner
} from '@grafana/scenes';
import { AlarmsTable } from './AlarmsTable/AlarmsTable';
import { DATASOURCE_REF } from '../../constants';

export function getScene() {
  const queryRunner1 = new SceneQueryRunner({
    datasource: DATASOURCE_REF,
    queries: [
      {
        refId: 'A',
        datasource: DATASOURCE_REF,
        scenarioId: 'random_walk',
        seriesCount: 1,
        // Query is using variable value
        alias: 'toto',
        min: 30,
        max: 60
      }
    ],
    maxDataPoints: 100
  });

  const queryRunner2 = new SceneQueryRunner({
    datasource: DATASOURCE_REF,
    queries: [
      {
        refId: 'A',
        datasource: DATASOURCE_REF,
        scenarioId: 'random_walk',
        seriesCount: 2,
        // Query is using variable value
        alias: 'toto',
        min: 30,
        max: 60
      }
    ],
    maxDataPoints: 100
  });

  const scene = new EmbeddedScene({
    // Global time range. queryRunner1 will use this time range.
    $timeRange: new SceneTimeRange(),
    body: new SplitLayout({
      $data: queryRunner1,
      direction: 'column',
      primary: new SceneFlexItem({
        width: '100%',
        height: '100%',
        body: new AlarmsTable()
      }),
      secondary: new SplitLayout({
        direction: 'row',
        primary: new SceneFlexItem({
          $data: queryRunner2,
          width: '100%',
          height: '100%',
          body: PanelBuilders.timeseries()
            .setTitle('Panel using global time range')
            .build()
        }),
        secondary: new SceneFlexItem({
          width: '100%',
          height: '100%',
          body: PanelBuilders.timeseries()
            .setTitle('Panel using global time range')
            .build()
        })
      })
    }),
    controls: [new SceneTimePicker({ isOnCanvas: true })]
  });

  return scene;
}
