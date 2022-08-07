import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: grid;
  place-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6.2rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.9;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.colors.gray[100]};
  border: 0;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme.colors.green[500]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.green[700]};
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${({ theme }) => theme.colors.red[500]};

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.red[700]};
  }
`
