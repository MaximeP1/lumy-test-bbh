import { baseVideoCoverUrl, getPlaylists, videoSizes } from "@/lib/utils"
import ClientButton from "./ClientButton";
import Image from "next/image";

interface Props {
  limit: number;
  size?: 'sm' | 'md' | 'lg';
  title?: string;
}

export default async function AllPlaylists({ limit, size, title }: Props) {
  const playlists = await getPlaylists(limit);
  const { height, width } = videoSizes[size || 'md']

  return <div className="flex flex-col gap-4">
    {title && <div className="flex justify-between items-center text-white py-4">
      <strong className="uppercase">{title}</strong>
      <ClientButton>Voir tout</ClientButton>
    </div>
    }
    <div className="flex gap-4 overflow-x-auto">
      {playlists.map(playlist =>
        <div key={playlist.id} className="flex flex-col shrink-0">
          <Image
            src={new URL(`./${playlist.cover}`, baseVideoCoverUrl).toString()}
            alt={`Miniature de la playlist ${playlist.title}`}
            width={width}
            height={height}
          />
          {playlist.title && <strong className='text-white'>{playlist.title}</strong>}
          {playlist.video && <span className='text-zinc-200'>{playlist.video.length} vidéos</span>}
        </div>
      )}
    </div>
  </div>
}