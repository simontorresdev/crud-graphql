import { StyledPopup } from './styles'
import Close from '../icons/Close'

export const PopUp = (props) => {
  return (
    <StyledPopup {...props} modal nested>
      <div className='modal'>
        <button type='button' className='close' onClick={() => props.onClose()}>
          <Close />
        </button>
        <div className='content'>{props.children}</div>
      </div>
    </StyledPopup>
  )
}
