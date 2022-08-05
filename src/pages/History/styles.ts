import styled, { css } from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.gray[100]};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;

  margin-top: 3.2rem;

  table {
    width: 100%;
    min-width: 60rem;
    border-collapse: collapse;

    th {
      background: ${({ theme }) => theme.colors.gray[600]};
      padding: 1.6rem;
      text-align: left;
      color: ${({ theme }) => theme.colors.gray[100]};
      font-size: 1.4rem;
      line-height: 2.8rem;

      &:first-child {
        border-top-left-radius: 0.8rem;
        padding-left: 2.6rem;
      }

      &:last-child {
        border-top-right-radius: 0.8rem;
        padding-right: 2.6rem;
      }
    }

    td {
      background: ${({ theme }) => theme.colors.gray[700]};
      border-top: 0.4rem solid ${({ theme }) => theme.colors.gray[800]};
      padding: 1.6rem;
      font-size: 1.4rem;
      line-height: 2.8rem;

      &:first-child {
        padding-left: 2.6rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 2.6rem;
      }
    }
  }
`

const STATUS_COLORS = {
  green: css`
    background: ${({ theme }) => theme.colors.green[500]};
  `,
  red: css`
    background: ${({ theme }) => theme.colors.red[500]};
  `,
  yellow: css`
    background: ${({ theme }) => theme.colors.yellow[500]};
  `,
}

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 9999px;

    ${({ statusColor }) => STATUS_COLORS[statusColor]}
  }
`
