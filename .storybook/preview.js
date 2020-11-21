import GlobalStyles from '../src/styles/global.styles'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];
