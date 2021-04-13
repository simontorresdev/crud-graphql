import styled from 'styled-components'

export const ContainerLoader = styled.div`
  text-align: ${(props) => (props.align ? props.align : 'left')};
  & .lds-ring {
    display: inline-block;
    position: relative;
    width: ${(props) => (props.width ? props.width : '13px')};
    height: ${(props) => (props.height ? props.height : '13px')};
  }
  & .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: ${(props) => (props.widthCircle ? props.widthCircle : '13px')};
    height: ${(props) => (props.heightCircle ? props.heightCircle : '13px')};
    margin: ${(props) => (props.margin ? props.margin : '0 0 0 8px')};
    border: ${(props) =>
      props.border ? `${props.border} solid #fff` : '2px solid #fff'};
    border-radius: 100%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) =>
      props.color
        ? `${props.color} transparent transparent transparent`
        : '#fff transparent transparent transparent'};
  }
  & .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
