import Popup from 'reactjs-popup'
import styled, { keyframes } from 'styled-components'

const zoomKeyFrame = keyframes`
  from{
    transform: scale(.4);
  }
  to{
    transform: scale(1);
  }
`

export const StyledPopup = styled(Popup)`
  &-overlay {
    background: rgba(255, 255, 255, 0.72);
  }
  &-content {
    animation: 0.3s ${zoomKeyFrame} ease;
  }
  &-content > .modal {
    font-size: 12px;
    background: #ffffff;
    min-width: 300px;
    padding: 50px 30px 20px 30px;
    margin: 0 12px;
    box-shadow: 0px 16px 32px #242b3529;
    border-radius: 9px;
    position: relative;
  }
  &-content > .modal > .close {
    position: absolute;
    right: 17px;
    top: 17px;
    cursor: pointer;
    background: #ffffff;
  }
`
