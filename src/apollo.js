import { makeVar } from '@apollo/client';

// 밑에서 함수로 선언해주었기때문에 어디서든 불러와서 변경가능
// 반응형 전역변수를 만듦
export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);
