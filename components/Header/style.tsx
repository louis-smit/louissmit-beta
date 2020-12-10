import styled from '@emotion/styled'
import { css } from '@emotion/react'
import theme from '../Theme'

interface HeaderProps {
  expanded?: boolean
  visible?: boolean
}

const base = css`
  padding: 5px 8px 4px;
  position: fixed;
  top: -1px;
  left: 0;
  right: 0;
  z-index: 4;
  font-size: 14px;
  font-weight: 600;
  margin: 0;

  a {
    padding: 8px 32px;
    border-radius: 6px;
    width: 100%;
    text-align: center;
    margin: 0 1px;
  }
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  box-shadow: 0 1px 0px rgba(0, 0, 0, 0.06);
  backdrop-filter: saturate(180%) blur(20px);
`

export const Container = styled.header`
  ${base};

  justify-content: space-around;

  @media (min-width: ${theme.breakpoints[4]}) {
    display: flex;
  }
  @media (max-width: ${theme.breakpoints[4]}) {
    display: none;
  }
`

export const InnerGrid = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  justify-self: center;
  max-width: ${theme.breakpoints[3]};
  position: relative;
  grid-template-columns: repeat(6, max-content);
  z-index: 3;
`

export const MobileContainer = styled.header`
  ${base};

  font-size: 16px;
  justify-content: center;
  align-items: ${(props: HeaderProps) =>
    props.expanded ? 'flex-start' : 'center'};
  flex-direction: ${(props: HeaderProps) =>
    props.expanded ? 'column' : 'row'};
  padding-bottom: ${(props: HeaderProps) => (props.expanded ? '16px' : '4px')};

  a {
    text-align: left;
    padding: 12px;
  }

  @media (min-width: ${theme.breakpoints[4]}) {
    display: none;
  }
  @media (max-width: ${theme.breakpoints[4]}) {
    display: flex;
  }
`

export const CloseButton = styled.div`
  position: relative;
  display: ${(props: HeaderProps) => (props.visible ? 'block' : 'none')};
  font-size: 26px;
  font-weight: 300;
  cursor: pointer;
  z-index: 3;
`

export const MenuButton = styled.div`
  padding: 0 8px;
  cursor: pointer;
  z-index: 3;
  position: relative;
`

export const Label = ({
  children,
  isActive,
}: {
  children: any
  isActive: boolean
}) => (
  <span
    className={`nav-label ${isActive && 'active'}`}
    css={css`
      display: flex;
      flex: 1;
      z-index: 3;
      position: relative;

      a {
        text-align: center;
      }

      @media (max-width: ${theme.breakpoints[4]}) {
        width: 100%;

        a {
          text-align: left;
        }
      }
    `}
  >
    {children}
  </span>
)

// export const LLabel = styled.span.attrs(({ isActive }) => ({
//   className: `nav-label ${isActive && 'active'}`,
// }))`
//   display: flex;
//   flex: 1;
//   z-index: 3;
//   position: relative;

//   a {
//     text-align: center;
//   }

//   @media (max-width: ${theme.breakpoints[4]}) {
//     width: 100%;

//     a {
//       text-align: left;
//     }
//   }
// `
