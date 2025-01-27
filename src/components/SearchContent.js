import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const searchDatas = [
  { 
    id: 0, images: [
      require('../../assets/images/post1.jpeg'),
      require('../../assets/images/post2.jpeg'),
      require('../../assets/images/post3.jpeg'),
      require('../../assets/images/post4.jpeg'),
      require('../../assets/images/post5.jpeg'),
      require('../../assets/images/post6.jpeg'),
    ]
  },
  { 
    id: 1, images: [
      require('../../assets/images/post7.jpeg'),
      require('../../assets/images/post8.jpeg'),
      require('../../assets/images/post9.jpeg'),
      require('../../assets/images/post10.jpeg'),
      require('../../assets/images/post11.jpeg'),
    ]
  },
  { 
    id: 2, images: [
      require('../../assets/images/post12.jpeg'),
      require('../../assets/images/post13.jpeg'),
      require('../../assets/images/post14.jpeg'),
    ]
  }
]

const SearchContent = (props) => {
  return (
    <View>
      {searchDatas.map((data, index) => {
        return (
          <View key={index} >
            { data.id === 0 ? (
              <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                width: '100%',
              }}>

                {data.images.map((imageData, imageIndex) => {
                  return (
                    <TouchableOpacity key={imageIndex} style={{ paddingBottom: 2, width: '33%' }}
                      onPressIn={() => props.data(imageData)}
                      onPressOut={() => props.data(null)}
                    >
                      <Image source={imageData} style={{ width: '100%', height: 150 }} />
                    </TouchableOpacity>

                  );
                })}

              </View>
            ) : null}
            { data.id === 1 ? (
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
                <View style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent:'space-between',
                  width: '66.5%',
                }}>
                  {data.images.slice(0, 4).map((imageData, imageIndex) => {
                    return (
                      <TouchableOpacity key={imageIndex} style={{ paddingBottom: 2, width: '49.5%' }}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                      >
                        <Image source={imageData} style={{ width: '100%', height: 150 }} />
                      </TouchableOpacity>
                    )
                  })}
                </View>
                <TouchableOpacity style={{ marginLeft: 2, width: '33%' }}
                  onPressIn={() => props.data(data.images[4])}
                  onPressOut={() => props.data(null)}
                >
                  <Image source={data.images[4]} style={{ width: '100%', height: 300 }} />
                </TouchableOpacity>
              </View>
            ) : null}
            { data.id === 2 ? (
              <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
                <TouchableOpacity style={{width: '66.5%' , paddingRight: 2}}
                  onPressIn={() => props.data(data.images[2])}
                  onPressOut={() => props.data(null)}
                >
                  <Image source={data.images[2]} style={{ width: '100%', height: 300 }} />
                </TouchableOpacity>
                <View  style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent:'space-between',
                  width: '33%',
                }}>
                  {data.images.splice(0, 2).map((imageData, imageIndex) => {
                    return (
                      <TouchableOpacity key={imageIndex} style={{ paddingBottom: 2, width: '100%' }}
                        onPressIn={() => props.data(imageData)}
                        onPressOut={() => props.data(null)}
                      >
                        <Image source={imageData} style={{ width: '100%', height: 150 }} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            ) : null}
          </View>
        )
      })}
    </View>
  );

}

export default SearchContent