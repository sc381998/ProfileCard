import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .cardInnerBody{
    background: ${({ theme }) => theme.cardBody};
  }
  .profileName{
    color: ${({ theme }) => theme.profileName};
  }
  .profileLocation{
    color: ${({ theme }) => theme.profileLocation};
  }
  .quality{
    color: ${({ theme }) => theme.quality};
  }
  .numbers{
    color: ${({ theme }) => theme.numbers};
  }
  .bar{
    background:${({ theme }) => theme.bar};
  }
  .sgLeft{
    color: ${({ theme }) => theme.sgLeft};
  }
  .stokesText{
    color: ${({ theme }) => theme.stokesText};
  }
  .latestActivityKey{
    color: ${({ theme }) => theme.latestActivityKey};
  }
  .latestActivityValue{
    color: ${({ theme }) => theme.latestActivityKey};
  }
  .footerText{
    color: ${({ theme }) => theme.footerText};
  }
  `;
