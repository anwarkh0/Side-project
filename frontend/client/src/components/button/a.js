import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #3498db;  /* Blue background color */
  color: #fff;               /* White text color */
  padding: 10px 20px;         /* Padding */
  font-size: 16px;            /* Font size */
  border-radius: 5px;         /* Border radius */
  cursor: pointer;            /* Cursor on hover */

  /* Hover effect */
  &:hover {
    background-color: #2980b9;  /* Slightly darker blue on hover */
  }
`;

const GoodLookingButton = () => {
    return (
        <StyledButton>
            Click me
        </StyledButton>
    );
};

export default GoodLookingButton;