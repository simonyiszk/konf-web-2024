import { Tile } from '../tile';
import { Floorplan } from './floorplan';

export default function MapTile() {
  return (
    <Tile className=' w-full h-full sm:col-span-6'>
      <Tile.Body className='flex flex-col justify-center items-center gap-4'>
        <Floorplan />
      </Tile.Body>
    </Tile>
  );
}
