import { View, Text } from 'react-native'
import React from 'react'

import Animated,{useSharedValue,useAnimatedStyle} from 'react-native-reanimated'
import {GestureDetector,Gesture,GestureHandlerRootView} from 'react-native-gesture-handler'

export default function App() {


  
  const translateX= useSharedValue(0);
  const translateY= useSharedValue(0);

  const context= useSharedValue({x:0,y:0});

  const gesture = Gesture.Pan().onUpdate((event)=>{
    console.log(event.translationX, event.translationY);
    translateX.value=event.translationX;
   
  }).onEnd((event)=>{
    
    translateX.value=0;

  });

  const rStyle= useAnimatedStyle(()=>{
    return {
      transform :[
        {
          translateX:translateX.value
        }
      ]
    }
  })

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={gesture}>
      <Animated.View style={[{width:100,height:100,backgroundColor:"red"},rStyle]}>

      </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  )
}