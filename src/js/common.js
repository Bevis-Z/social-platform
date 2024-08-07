import { create_profile, Profile } from "./components/mainLeft/profile"
import { profile, sidebar, highline, cards, message, request } from "../../data/db.json"
import { create_side_bar, Sidebar } from "./components/mainLeft/sidebar"
import { create_post as create_post_main_left } from "./components/mainLeft/createPost"

import { Highline } from "./components/mainMiddle/highline"
import { create_post as create_post_main_middle } from "./components/mainMiddle/createPost"
import { CardList } from "./components/mainMiddle/cardList"

import { create_message } from "./components/mainRight/createMessage"
import { FriendList } from "./components/mainRight/friendList"
import { RequestList } from "./components/mainRight/requestList"

/* NavBar */
export const navbar = document.querySelector('nav');
export const navbar_container = navbar.querySelector('.container');
export const navbar_container_logo = navbar_container.querySelector('.logo');
export const navbar_container_searchBar = navbar_container.querySelector('.search-bar');
export const navbar_container_create = navbar_container.querySelector('.create');
export const navbar_container_img = navbar_container.querySelector('img');

/* Main */
export const main = document.querySelector('main');
export const main_container = main.querySelector('.container');

/* Main Left */
export const main_left = main_container.querySelector('.main-left');
export const main_left_profile = new Profile(profile.img_src, profile.name, profile.at).build()
export const main_left_sidebar = new Sidebar(sidebar).build()
export const main_left_create_post = create_post_main_left()

/* Main Middle */
export const main_middle = main_container.querySelector('.main-middle');
export const main_middle_highline = new Highline(highline).build()
export const main_middle_create_post = create_post_main_middle(profile)
export const main_middle_cardList = new CardList(cards).build()

/* Main Right */
export const main_right = main_container.querySelector('.main-right');
export const main_right_message = create_message()
export const main_right_friendList = new FriendList(message).build()
export const main_right_requestList = new RequestList(request).build()