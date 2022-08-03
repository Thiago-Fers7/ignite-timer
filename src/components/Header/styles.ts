import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    height: 4rem;
  }

  nav {
    display: flex;
    gap: 0.8rem;

    a {
      width: 4.8rem;
      height: 4.8rem;

      display: grid;
      place-items: center;

      color: ${({ theme }) => theme.colors.gray[100]};

      border-top: 0.3rem solid transparent;
      border-bottom: 0.3rem solid transparent;

      &:hover {
        border-bottom-color: ${({ theme }) => theme.colors.green[500]};
      }

      &.active {
        color: ${({ theme }) => theme.colors.green[500]};
      }
    }
  }
`
