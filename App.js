import React, { useState } from 'react'
import { View, StatusBar, SafeAreaView } from 'react-native';
import Item from './Components/Item'
import Action from './Components/Action'
import styles from './Components/styles'
import store from './store'
import { Provider } from 'react-redux'
import picturedata from './data/picture'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

const App = () => {
  const [picture, setpicture] = useState(9)
  const data                  = picturedata[picture]
  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };
  const nextimage =()=>{
    const number = picture < (picturedata.length-1) ? picturedata + 1 : 0
    setpicture(number)
  }
  const preiousImage =()=>{
    const number = picture ===0 ? (picturedata.length-1) : picture -1
    setpicture(number)
  }
  const onSwipe = (gestureName, gestureState) => {
    const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
    switch (gestureName) {
      case SWIPE_UP:
        nextimage()
        break;
      case SWIPE_LEFT:
        nextimage()
        break;
      case SWIPE_DOWN:
        preiousImage()
        break;
      case SWIPE_RIGHT:
        preiousImage()
        break;
      default:
        break;

    }
  }

  return (
    <Provider store={store}>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <View style={styles.background} />
        <View style={styles.mainWrapper}>
          <GestureRecognizer
            style={styles.wrapper}
            onSwipe={(direction, state) => onSwipe(direction, state)}
            config={config}>
            <Item data={data} />
          </GestureRecognizer>
          <Action data={data} />
        </View>
      </SafeAreaView>
    </Provider>
  )
}

export default App