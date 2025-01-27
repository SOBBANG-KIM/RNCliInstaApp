import React from 'react'
import { View, Text } from 'react-native'

import PostItem from './PostItem'


const postInfos = [
  {
    postTitle: 'John', 
    postPersonImage: require('../../assets/images/userProfile.jpeg'),
    postImage: require('../../assets/images/post1.jpeg'),
    likes: 765,
    isLiked: false,
  },
  {
    postTitle: 'Tonny', 
    postPersonImage: require('../../assets/images/profile5.jpeg'),
    postImage: require('../../assets/images/post2.jpeg'),
    likes: 345,
    isLiked: false,
  },
  {
    postTitle: 'Tom', 
    postPersonImage: require('../../assets/images/profile4.jpeg'),
    postImage: require('../../assets/images/post3.jpeg'),
    likes: 777,
    isLiked: false,
  },
  {
    postTitle: 'React', 
    postPersonImage: require('../../assets/images/profile3.jpeg'),
    postImage: require('../../assets/images/post4.jpeg'),
    likes: 875,
    isLiked: false,
  },
]

const Posts = () => {
  return (
    <View>
      {postInfos.map((data, index) => {
        return (
          <PostItem key={index} data={data}/>
        )
      })

      }
    </View>
  )
}

export default Posts