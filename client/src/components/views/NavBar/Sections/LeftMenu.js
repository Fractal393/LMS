import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="blog">
      <a href="/blog">Courses</a>
    </Menu.Item>
    <Menu.Item key="create">
      <a href="/blog/create">Create Course</a>
    </Menu.Item>
    <Menu.Item key="file">
      <a href="/blog/file">Files</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu