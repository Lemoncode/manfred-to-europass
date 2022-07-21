import { css } from '@emotion/css';

export const main = css`
  display: flex;
  position: absolute;
  top: 15vh;
  min-width:25vw;
  min-height:52vh;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  padding: 50px 0;
  gap: 50px;
  isolation: isolate;
  background: #ffffff;
`;

export const title = css`
  width: 196px;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  text-align:center;
`;
