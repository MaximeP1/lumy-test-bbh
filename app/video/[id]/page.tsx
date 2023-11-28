import LastVideos from "@/components/LastVideos";
import PlayerVideo from "@/components/PlayerVideo"
import { daysFromNow } from "@/lib/dateUtils";
import { Video, getVideo } from "@/lib/utils"
import { Metadata } from "next";

interface Props {
  params: { id: string }
}

export const metadata: Metadata = {
  title: 'BBH | Vidéo',
}

export default async function Video({ params }: Props) {
  const video: Video = await getVideo(params.id)
  const { youtube_id, title, date_published, description, view_count, like_count } = video;

  const days = daysFromNow(date_published)

  return <div className="p-8">
    <PlayerVideo youtube_id={youtube_id} fullWidth />
    <div className="flex flex-col justify-center max-w-xl mx-auto pb-11 gap-8">
      {title && <h1 className='text-white text-[38px] font-bold'>{title}</h1>}
      {days && <span className='text-zinc-200'>Il y a {days} jours</span>}
      {description && <p className="text-zinc-200">{description}</p>}
      <div className="grid grid-cols-2 divide-x font-bold w-max">
        <div className="flex flex-col items-center pe-2">
          <span className="text-white">{view_count}</span> {/* TODO 1K pour 1000 etc */}
          <span className="text-gray-500">Vues</span>
        </div>
        <div className="flex flex-col items-center ps-2">
          <span className="text-white">{like_count}</span> {/* TODO 1K pour 1000 etc */}
          <span className="text-gray-500">J&apos;aime</span>
        </div>
      </div>
    </div>
    <LastVideos limit={6} title="D'autres vidéos" />
  </div>
}