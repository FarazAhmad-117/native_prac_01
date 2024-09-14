import React, { PropsWithChildren, useEffect, useRef } from "react";
import { Animated, Easing, SafeAreaView, Text, View, ViewStyle } from "react-native";


type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;

const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])

  useEffect(() => {
    Animated.timing(
      translateAnim,
      {
        toValue: 0,
        easing: Easing.back(),
        duration: 5000,
        useNativeDriver: true,
      }
    ).start();
  }, [translateAnim])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
        transform: [
          { translateY: translateAnim }
        ],
        borderRadius: 10,
        elevation: 5,
      }}
    >
      {props.children}
    </Animated.View>
  )
}


const App = () => {
  return (
    <SafeAreaView>
      <View>
        <FadeInView style={{ backgroundColor: 'powderblue', padding: 20 }}>
          <Text>Fade In View</Text>
        </FadeInView>
        <Text>Welcome to the React App</Text>
        <Text>This is a simple React app.</Text>
      </View>
    </SafeAreaView>
  );
}

export default App;

