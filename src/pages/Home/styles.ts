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

export const FormContainer = styled.fieldset`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: none;

  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.9rem;
  color: ${({ theme }) => theme.colors.gray[100]};
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 4rem;
  border: 0;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray[500]};

  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.8rem;
  padding: 1.1rem 0.8rem;
  color: ${({ theme }) => theme.colors.gray[100]};

  &:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.colors.green[500]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 7.2rem;
`

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
