"use client"
import YouTube, { YouTubeProps } from 'react-youtube';

interface Props {
  youtube_id?: string;
  height: number;
  width: number;
  with_labels?: boolean;
  playlist?: string;
  title?: string;
  date_string?: string;
}

export default function PlayerVideo({ youtube_id, height, width, with_labels, playlist, title, date_string }: Props) {
  if (!youtube_id) return
  
  const opts: YouTubeProps['opts'] = {
    height,
    width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
      origin: 'http://localhost:3000'
    },
  };

  if (!with_labels) {
    return <YouTube videoId={youtube_id} opts={opts} />
  }

  const date = new Date(date_string ?? '')
  const daysFromNow = ~~((new Date().getTime() - date.getTime()) / 8.64e+7)

  return <div className='flex flex-col'>
    <YouTube videoId={youtube_id} opts={opts} />
    <span className='text-gray-200'>{playlist}</span>
    <strong className='text-white'>{title}</strong>
    <span className='text-gray-300'>Il y a {daysFromNow} jours</span>
  </div>
}