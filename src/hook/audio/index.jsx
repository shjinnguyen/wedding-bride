import { useState, useEffect } from "react";
import { useGlobalAudioPlayer } from "react-use-audio-player";

const useAudio = (audioUrl) => {
  const [audio, setAudio] = useState(null);
  const { load } = useGlobalAudioPlayer();

  useEffect(() => {
    console.log("load mp3");
    load("/mySound.wav", {
      autoplay: true,
    });

    // setAudio(audioElement);
    // console.log("audioElement", audioElement);

    // return () => {
    //   audioElement.pause();
    //   audioElement.currentTime = 0;
    // };
  }, [audioUrl]);

  const playAudio = () => {
    if (audio) {
      audio.play();
    }
  };

  const stopAudio = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return { playAudio, stopAudio };
};

export default useAudio;
