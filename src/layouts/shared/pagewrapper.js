import styled from 'styled-components';
import '../../scss/variables.scss';
import * as constants from './style-constants.js';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: white;
  width: 100%;
  color: $textColor;
  align-items: center;
`;

export default Wrapper;
