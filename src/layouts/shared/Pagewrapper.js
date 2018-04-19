import styled from 'styled-components';
import '../../scss/variables.scss';
import * as constants from './style-constants';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: ${constants.colorWhite};
  width: 100vw;
  color: ${constants.textColor};
  align-items: center;
`;

export default Wrapper;
