import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
} from "react-native";

const TimerApp = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  };

  const stopTimer = () => {
    setIsRunning(false);
    Animated.timing(animatedValue).stop();
  };

  const resetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
    Animated.timing(animatedValue).stop();
    animatedValue.setValue(0);
  };

  const animatedStyle = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [1, 1.2, 1],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.timerText, animatedStyle]}>
        {seconds} seconds
      </Animated.Text>
      <View style={styles.buttonContainer}>
        {!isRunning ? (
          <TouchableOpacity style={styles.button} onPress={startTimer}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={stopTimer}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "linear-gradient(to right, #3498db, #2ecc71)",
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
    color: "white",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#e74c3c",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default TimerApp;
