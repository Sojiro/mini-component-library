/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const BarFrameDefault = styled.div`
  position: relative;
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarFrameSmall = styled(BarFrameDefault)`
  height: 8px;
  line-height: 8px;
  border-radius: 4px;
`;

const BarFrameMedium = styled(BarFrameDefault)`
  height: 12px;
  line-height: 12px;
  border-radius: 4px;
`;

const BarFrameLarge = styled(BarFrameDefault)`
  height: 24px;
  line-height: 24px;
  border-radius: 8px;
`;

const Bar = styled.span`
  position: absolute;
  background-color: ${COLORS.primary};
  --calculated-radius: ${(props) => 4 * (props.value / 100)}px;
  border-radius: 4px var(--calculated-radius) var(--calculated-radius) 4px;
  height: inherit;
  width: ${(props) => props.value}%;

  ${BarFrameLarge} & {
    height: 16px;
    inset: 4px;
    width: ${(props) => `calc(${props.value}% - 8px)`};
  }
`;

const ProgressBar = ({ value, size }) => {
  let Component;
  switch (size) {
    case 'small':
      Component = BarFrameSmall;
      break;
    case 'medium':
      Component = BarFrameMedium;
      break;
    case 'large':
      Component = BarFrameLarge;
      break;
    default:
      Component = BarFrameDefault;
  }

  return (
    <Component role='progressbar'>
      <Bar value={value}></Bar>
      <VisuallyHidden>{value}% progress so far</VisuallyHidden>
    </Component>
  );
};

export default ProgressBar;
