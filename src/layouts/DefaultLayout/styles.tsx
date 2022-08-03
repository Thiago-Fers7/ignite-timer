import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 112rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;

  padding: 4rem;

  background: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
`
