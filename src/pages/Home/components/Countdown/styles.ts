import styled from 'styled-components'

export const CountdownContainer = styled.section`
  font-family: 'Roboto mono', monospace;
  font-size: 16rem;
  line-height: 11.8rem;
  color: ${({ theme }) => theme.colors.gray[100]};

  display: flex;
  gap: 1.6rem;

  span {
    background: ${({ theme }) => theme.colors.gray[700]};
    border-radius: 0.8rem;
    padding: 4rem 1.6rem;
  }
`

export const Separator = styled.div`
  padding: 3.2rem 0;
  color: ${({ theme }) => theme.colors.green[500]};

  width: 6.4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
