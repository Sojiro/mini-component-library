import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    size: 14,
    fontWidth: 400,
    borderWidth: 1,
  },
  large: {
    size: 16,
    fontWidth: 400,
    borderWidth: 2,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size ${size}`);
  }

  return (
    <Wrapper
      style={{
        '--size': styles.size + 'px',
        '--width': width + 'px',
        '--fontSize': (styles.size / 16) + 'rem',
        '--borderWidth': styles.borderWidth + 'px',
      }}
    >
      <Icon id={icon} size={styles.size} strokeWidth={styles.borderWidth} />
      <NativeInput placeholder={placeholder} />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fit-content;
`;

const NativeInput = styled.input`
  position: absolute;
  background: transparent;
  padding: 4px 24px;
  border: none;
  border-bottom: revert;
  border-color: ${COLORS.black};
  border-width: var(--borderWidth);
  font-size: var(--fontSize);
  outline: none;
  appearance: none;
  color: ${COLORS.gray700};
  width: var(--width);

  &:focus {
    outline: revert;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default IconInput;
