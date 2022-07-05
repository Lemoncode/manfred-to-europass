import { css } from '@emotion/css';

export const main = css`
  display: flex;
  position: absolute;
  top: 15vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
  gap: 50px;
  isolation: isolate;
  background: #ffffff;
`;

export const title = css`
  width: 139px;
  height: 23px;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  padding: 0;
  margin: 0;
`;

export const beginButton = css`
  width: 166px;
  height: 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 23px;
  background: #39d65c;
  border: none;
  border-radius: 20px;
  color: #ffffff;
`;
