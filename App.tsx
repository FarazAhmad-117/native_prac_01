import React, { PropsWithChildren, useEffect, useRef } from "react";
import { Animated, SafeAreaView, Text, View, ViewStyle } from "react-native";


type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;

const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
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
          <Text>Welcome to the React App</Text>
          <Text>This is a simple React app.</Text>
        </FadeInView>
      </View>
    </SafeAreaView>
  );
}

export default App;

