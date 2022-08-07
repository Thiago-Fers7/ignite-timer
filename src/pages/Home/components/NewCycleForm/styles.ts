import styled from 'styled-components'

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
