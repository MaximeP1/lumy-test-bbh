"use client"
import { daysFromNow } from '@/lib/dateUtils';
import { Skeleton } from '@nextui-org/react';
import { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

interface Props {
  youtube_id?: string;
  height?: number;
  width?: number;
  with_labels?: boolean;
  playlist?: string;
  title?: string;
  date_string?: string;
  fullWidth?: boolean;
}

export default function PlayerVideo({ youtube_id, height, width, with_labels, playlist, title, date_string, fullWidth }: Props) {
  const [loading, setLoading] = useState(true);

  if (!youtube_id) return

  const opts: YouTubeProps['opts'] = {
    height,
    width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
      origin: 'http://localhost:3000',
      controls: 0,
      rel: 0,
      modestBranding: 1,
    },
  };

  if (!with_labels) {
    return <div className={`p-16 ${fullWidth ? 'full-width-player' : ''}`}>
      {/* {loading && <Skeleton className="rounded-sm">
        <div className={`rounded-sm bg-default-300 skeleton`}></div>
      </Skeleton>} */}
      <YouTube videoId={youtube_id} opts={opts} onReady={() => setLoading(false)} className={loading ? 'hidden' : ''} />
    </div>
  }

  const days = daysFromNow(date_string)

  return <div className={`flex flex-col ${fullWidth ? 'full-width-player' : ''}`}>
    <YouTube videoId={youtube_id} opts={opts} />
    {playlist && <span className='text-gray-200'>{playlist}</span>}
    {title && <strong className='text-white'>{title}</strong>}
    {days && <span className='text-zinc-200'>Il y a {days} jours</span>}
  </div>
}