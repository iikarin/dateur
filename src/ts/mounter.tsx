import * as React from 'react';
import {render} from 'react-dom';
import {DatuerIndex} from "./bundles/core/common/components";

render(
  <DatuerIndex />,
  document.querySelector('[data-mount]')
);