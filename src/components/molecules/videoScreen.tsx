import { useVideoPlayer, VideoView } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface VideoPlayerProps {
  videoSource: string;
  style?: object;
  showControls?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSource,
  style,
  showControls = true,
}) => {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    // player.play();
  });

  useEffect(() => {
    const subscription = player.addListener("playingChange", (isPlaying) => {
      setIsPlaying(isPlaying);
    });

    return () => {
      subscription.remove();
    };
  }, [player]);

  return (
    <View style={[styles.contentContainer, style]}>
      <VideoView
        ref={ref}
        style={styles.video}
        player={player}
        allowsFullscreen
        contentFit="cover"
        allowsPictureInPicture

        // VideoContentFit={true}
      />
      {showControls && (
        <View style={styles.controlsContainer}>
          {/* <Button
            title={isPlaying ? "Pause" : "Play"}
            onPress={() => {
              if (isPlaying) {
                player.pause();
              } else {
                player.play();
              }
              setIsPlaying(!isPlaying);
            }}
          /> */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: wp(2.7),
    paddingVertical: hp(2.7),
    alignItems: "center",
    justifyContent: "center",
  },
  video: {
    width: wp(31.1),
    height: hp(20.7),
    borderRadius: 7,
  },
  controlsContainer: {
    padding: 10,
  },
});

export default VideoPlayer;
