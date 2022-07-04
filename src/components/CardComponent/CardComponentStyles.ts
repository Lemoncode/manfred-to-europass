import { css } from '@emotion/css';

export const main = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0;
  gap: 50px;
  isolation: isolate;
  background: #ffffff;
`;

export const containerTitle1 = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  width: 320px;
`;
export const title = (width) => css`
  width: ${width}px;
  height: 23px;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  padding: 0;
  margin: 0;
`;
export const containerLogoManfred = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 320px;
  height: 32px;
`;

export const containerTitle2 = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 320px;
  height: 43px;
`;

export const buttonContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 320px;
  height: 60px;
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
