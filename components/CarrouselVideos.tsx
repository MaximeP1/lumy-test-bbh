import { Video, videoSizes } from "@/lib/utils";
import PlayerVideo from "./PlayerVideo";
import ClientButton from "./ClientButton";

interface Props {
  children?: React.ReactNode;
  videos: Video[];
  title?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function CarrouselVideos({ children, videos, title, size }: Props) {
  const { height, width } = videoSizes[size || 'md']

  return <div className="flex flex-col gap-4">
    {title && <div className="flex justify-between items-center text-white py-4">
      <strong className="uppercase">{title}</strong>
      <ClientButton>Voir tout</ClientButton>
    </div>
    }
    {children}
    <div className="flex gap-4 overflow-x-auto">
      {videos.map(video => <PlayerVideo
        key={video.id}
        youtube_id={video.youtube_id}
        width={width}
        height={height}
        with_labels
        title={video.title}
        date_string={video.date_published}
        playlist={video.playlist?.[0]?.playlist_id?.title}
      />)}
    </div>
  </div>
}