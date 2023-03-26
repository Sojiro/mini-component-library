/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    borderRadius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    borderRadius: 4,
    padding: 0,
  },
  large: {
    height: 12,
    borderRadius: 8,
    padding: 4,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size ${size}`);
  }

  let clampedValue = Math.min(100, value);

  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        '--borderRadius': styles.borderRadius + 'px',
        'padding': styles.padding + 'px'
      }}
    >
      <VisuallyHidden>{clampedValue}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            '--width': clampedValue + '%',
            '--height': styles.height + 'px',
          }}
        ></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
  border-radius: var(--borderRadius);
`;

const BarWrapper = styled.div`
border-radius: var(--borderRadius);
overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  background: ${COLORS.primary};
  height: var(--height);
  border-radius: var(--borderRadius) 0 0 var(--borderRadius);
`;
export default ProgressBar;
