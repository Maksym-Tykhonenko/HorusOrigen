import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Icons = ({ type, active }) => {

  let imageSource;
  let iconStyle = [styles.icon];

  switch (type) {
    case 'home':
      imageSource = require('../assets/panel/1.png');
      active && iconStyle.push(styles.active);
      break;
    case 'lib':
      imageSource = require('../assets/panel/2.png');
      active && iconStyle.push(styles.active);
      break;
    case 'museum':
      imageSource = require('../assets/panel/3.png');
      active && iconStyle.push(styles.active);
      break;
    case 'dig':
      imageSource = require('../assets/panel/4.png');
      active && iconStyle.push(styles.active);
      break;
    case 'score':
      imageSource = require('../assets/panel/5.png');
      active && iconStyle.push(styles.active);
      break;
    case 'close':
        imageSource = require('../assets/common/close.png');
        iconStyle.push(styles.brown);
    break;
    case 'back':
        imageSource = require('../assets/common/back.png');
    break;
    case 'arrow':
        imageSource = require('../assets/common/arrow.png');
        iconStyle.push(styles.brown);
    break;
    case 'hint':
        imageSource = require('../assets/quiz/hint.png');
    break;
    case 'live':
        imageSource = require('../assets/quiz/live.png');
    break;
    case 'live-gone':
        imageSource = require('../assets/quiz/live-gone.png');
    break;
    case 'coin':
        imageSource = require('../assets/quiz/coin.png');
    break;
    case 'bonus':
        imageSource = require('../assets/decor/bonus.png');
        iconStyle.push(styles.bonus);
    break;
    case 'no-bonus':
        imageSource = require('../assets/decor/no-bonus.png');
        iconStyle.push(styles.bonus);
    break;
    case 'yes-bonus':
        imageSource = require('../assets/decor/yes-bonus.png');
        iconStyle.push(styles.bonus);
    break;
  }

  return (
    <Image 
      source={imageSource} 
      style={iconStyle} 
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  active: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#fff',
  },
  brown: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    tintColor: '#ccb59a',
  },
  bonus: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
});

export default Icons;
