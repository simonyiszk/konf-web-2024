import { Tile } from '@/components/tiles/tile';
import { YoutubeVideo } from '@/components/youtube-video';

type Props = {
  title: string;
  url: string;
};
export function StreamTile({ title, url }: Props) {
  return (
    <Tile className='sm:col-span-6 lg:col-span-3'>
      <Tile.Body>
        <h2 className='sm:text-2xl md:text-4xl text-center mb-5 capitalize'>{title}</h2>
        <div className='sm:w-full md:w-6/7 mx-auto mt-2'>
          <YoutubeVideo title={title} url={url} />
        </div>
      </Tile.Body>
    </Tile>
  );
}
