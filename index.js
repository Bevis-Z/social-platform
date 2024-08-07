import "./index.css"
// import { cards, message, request, profile, highline } from "@/js/database"

import { profile } from "./data/db.json"
import {
  navbar_container_logo,
  navbar_container_img,
  main_left,
  main_left_profile,
  main_left_sidebar,
  main_left_create_post,
  main_middle,
  main_middle_highline,
  main_middle_create_post,
  main_middle_cardList,
  main_right,
  main_right_message,
  main_right_friendList,
  main_right_requestList
} from "./src/js/common"

import {
  add_buttonList_toggle
} from "./src/js/func/messageFunc"

/* NAV */
navbar_container_logo.textContent = "TopSocial"
navbar_container_img.src = profile.img_src

/* LEFT */
main_left.appendChild(main_left_profile)
main_left.appendChild(main_left_sidebar)
main_left.appendChild(main_left_create_post)

/* MIDDLE */
main_middle.appendChild(main_middle_highline)
main_middle.appendChild(main_middle_create_post)
main_middle.appendChild(main_middle_cardList)

/* RIGHT */
main_right.appendChild(main_right_message)
main_right_message.appendChild(main_right_friendList)
main_right.appendChild(main_right_requestList)
add_buttonList_toggle()

