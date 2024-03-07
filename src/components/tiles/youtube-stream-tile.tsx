import { Tile } from '@/components/tiles/tile';
import { YoutubeVideo } from '@/components/youtube-video';

type Props = {
  title: string;
  url: string;
};
export function StreamTile({ title, url }: Props) {
  return (
    <Tile className='sm:col-span-6 md:col-span-3'>
      <Tile.Body>
        <h2 className='sm:text-2xl md:text-4xl'>{title}</h2>
        <YoutubeVideo title={title} url={url} />
      </Tile.Body>
    </Tile>
  );
}
