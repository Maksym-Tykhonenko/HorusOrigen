import React, {createContext, useContext, useEffect, useState} from 'react';
import TrackPlayer, {usePlaybackState, Event} from 'react-native-track-player';
import {RepeatMode} from 'react-native-track-player';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MusicContext = createContext();

export const useMusic = () => useContext(MusicContext);

export const MusicProvider = ({children}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const playbackState = usePlaybackState();

  useEffect(() => {
    const setupPlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();

        await TrackPlayer.add({
          id: '1',
          url: require('../assets/music.mp3'),
          title: 'Background Music',
          artist: 'Artist Name',
        });

        await TrackPlayer.setRepeatMode(RepeatMode.Track);

        const savedState = await AsyncStorage.getItem('toggleLoudness');
        if (savedState !== null) {
          const parsedState = JSON.parse(savedState);
          setIsPlaying(parsedState);
          if (parsedState) {
            await TrackPlayer.play();
          } else {
            await TrackPlayer.pause();
          }
        } else {
          await TrackPlayer.play();
        }
      } catch (error) {
        //console.log('Error setting up TrackPlayer', error);
      }
    };

    setupPlayer();

    const playbackStateListener = TrackPlayer.addEventListener(
      Event.PlaybackState,
      state => {
        //console.log('Playback state changed', state);
      },
    );

    const playWhenReadyListener = TrackPlayer.addEventListener(
      Event.PlaybackPlayWhenReadyChanged,
      playWhenReady => {
        //console.log('Play when ready changed', playWhenReady);
      },
    );

    return () => {
      playbackStateListener.remove();
      playWhenReadyListener.remove();
      TrackPlayer.stop();
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      TrackPlayer.play();
    } else {
      TrackPlayer.pause();
    }
  }, [isPlaying]);

  const togglePlay = async () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    await AsyncStorage.setItem('toggleLoudness', JSON.stringify(newState));
  };

  return (
    <MusicContext.Provider value={{isPlaying, togglePlay}}>
      {children}
    </MusicContext.Provider>
  );
};
