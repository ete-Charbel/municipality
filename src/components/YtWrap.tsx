import YouTube from "react-youtube";

export default function YtWrap(props: any) {
  return (
    <YouTube
      videoId={props.id}
      opts={{
        height: "500",
        width: "500",
        playerVars: {
          autoplay: 0,
        },
      }}
    />
  );
}
