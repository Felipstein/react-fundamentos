import React, { useState } from "react";

import Post from './Post';

export default function PostsList() {

  const [posts] = useState([
    {
      id: Math.random(),
      title: 'O que são states?',
      subtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam alias.',
    },
    {
      id: Math.random(),
      title: 'Entendo as props...',
      subtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam alias.',
    },
    {
      id: Math.random(),
      title: 'React Context API',
      subtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam alias.',
    },
    {
      id: Math.random(),
      title: 'Theming com Styled Components',
      subtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam alias.',
    },
  ]);

  return (
    <>
      {
        posts.map((post) => (
          <Post key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.subtitle}</p>
          </Post>
        ))
      }
    </>
  );
}