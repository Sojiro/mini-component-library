import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    size: 16,
    borderWidth: 1,
    height: 24,
  },
  large: {
    size: 24,
    borderWidth: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size ${size}`);
  }

  return (
    <Wrapper
      style={{
        '--size': styles.size + 'px',
        '--height': styles.height + 'px',
        '--width': width + 'px',
        '--fontSize': styles.size + 'px',
        '--borderWidth': styles.borderWidth + 'px',
      }}
    >
      <Icon id={icon} size={styles.size} strokeWidth={styles.borderWidth} />
      <NativeInput {...delegated} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  position: absolute;
  background: transparent;
  padding-left: var(--height);
  border: none;
  border-bottom: revert;
  border-color: ${COLORS.black};
  border-width: var(--borderWidth);
  font-size: var(--fontSize);
  outline: none;
  appearance: none;
  color: inherit;
  font-weight: 700;
  width: var(--width);
  height: var(--height);
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline: revert;
    color: ${COLORS.gray700};
  }
`;

export default IconInput;
