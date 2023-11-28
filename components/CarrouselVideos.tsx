import { Video, baseVideoCoverUrl, videoSizes } from "@/lib/utils";
import PlayerVideo from "./PlayerVideo";
import ClientButton from "./ClientButton";
import Image from "next/image";
import Link from "next/link";
import { daysFromNow, formatVideoDuration } from "@/lib/dateUtils";
import React from "react";

interface Props {
  children?: React.ReactNode;
  videos: Video[];
  title?: string;
  size?: 'sm' | 'md' | 'lg';
  withLabels?: boolean;
}

export default function CarrouselVideos({ children, videos, title, size, withLabels }: Props) {
  const { height, width } = videoSizes[size || 'md']

  return <div className="flex flex-col gap-4">
    {title && <div className="flex justify-between items-center text-white py-4">
      <strong className="uppercase">{title}</strong>
      <ClientButton>Voir tout</ClientButton>
    </div>
    }
    {children}
    <div className="flex gap-4 overflow-x-auto">
      {videos.map(video =>
        <div key={video.id} className="flex flex-col">
          <div className="relative shrink-0" style={{ width: width + 'px', maxHeight: height + 'px' }}>
            <Link href={`/video/${video.id}`}>
              <Image
                key={video.id}
                src={new URL(`./${video.cover}`, baseVideoCoverUrl).toString()}
                alt={`Miniature de la vidéo ${video.title}`}
                width={width}
                height={height}
              />
            </Link>
            {video.duration && <span className="absolute z-10 bottom-2 right-2 bg-black opacity-80 text-white p-1 rounded-md text-xs">{formatVideoDuration(video.duration)}</span>}
          </div>
          {withLabels && <>
            {video.playlist?.[0]?.playlist_id?.title && <span className='text-gray-200'>{video.playlist[0].playlist_id.title}</span>}
            {video.title && <strong className='text-white'>{video.title}</strong>}
            {daysFromNow(video.date_published) && <span className='text-zinc-200'>Il y a {daysFromNow(video.date_published)} jours</span>}
          </>}
        </div>
      )}
      {/* {videos.map(video => <PlayerVideo
        key={video.id}
        youtube_id={video.youtube_id}
        width={width}
        height={height}
        with_labels
        title={video.title}
        date_string={video.date_published}
        playlist={video.playlist?.[0]?.playlist_id?.title}
      />)} */}
    </div>
  </div>
}