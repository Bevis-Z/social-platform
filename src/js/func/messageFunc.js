import {
  main_right_message
} from "../common"

export function add_buttonList_toggle() {
  const buttonList = main_right_message.querySelectorAll('.function-panel span')

  buttonList.forEach(button => {
    button.addEventListener('click', () => {
      buttonList.forEach(item => item.classList.remove('active'))
      button.classList.add('active')
    })
  })
}