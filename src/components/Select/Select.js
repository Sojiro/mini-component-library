import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <div>{displayedValue}</div>
      <Icon id='chevron-down' strokeWidth={2} />
      <SelectWraper value={value} onChange={onChange}>
        {children}
      </SelectWraper>
    </Wrapper>
  );
};

const SelectWraper = styled.select`
  position: absolute;
  inset: 0;
  opacity: 0;
  appearance: none;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  height: 43px;
  width: fit-content;
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  color: ${COLORS.gray700};
  border: 2px solid transparent;

  :focus-within {
    border: 2px solid #4374cb;
  }

  :hover {
    color: ${COLORS.black};
  }
`;

export default Select;
