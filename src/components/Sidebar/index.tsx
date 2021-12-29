import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import './styles.scss'

type propsType = {
  pageWrapId: string;
  outerContainerId: string;
  children: JSX.Element[]
  // items: {text: string, link: string}[];
}

export function SideBar(props: propsType) {
  return (
    <Menu {...props} right>
      {props.children}
    </Menu>
  )
}