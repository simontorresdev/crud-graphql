import { toast } from 'react-toastify'

export function ModalSuccess (
  mensaje,
  position = 'bottom-right',
  autoClose = 10000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  progress = undefined
) {
  return toast.success(mensaje, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    progress
  })
}
