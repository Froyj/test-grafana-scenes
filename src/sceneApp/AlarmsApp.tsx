import React from 'react';
import { getScene } from 'pages/HelloWorld/helloWorldScene';

export function AlarmsApp() {
  const scene = getScene();

  return <scene.Component model={scene} />;
}
