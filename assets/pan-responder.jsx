const panGrant = (_, gestureState) => { ... };
const panRelease = (_, gestureState) => { ... };

const panResponder = PanResponder.create({
  onStartShouldSetPanResponder: () => true,
  onPanResponderGrant: panGrant,
  onPanResponderRelease: panRelease,
  onPanResponderTerminate: panRelease,
  onShouldBlockNativeResponder: () => false,
});

/**
 * moveX / moveY – ecently-moved touch
 * x0 / y0 – coordinates of the responder grant
 * dx / dy- accumulated distance of the gesture
 * vx / vy - current velocity of the gesture
 * numberActiveTouches - Number of touches currently on screen
 */
