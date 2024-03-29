import { Tile } from './tile';

type Props = {
  number: string;
  desc: string;
};

export function StatTile({ desc, number }: Props) {
  return (
    <Tile className='sm:col-span-2 h-full'>
      <Tile.Body className='flex flex-col justify-center items-center h-full'>
        <h2 className='text-8xl font-bold'>{number}</h2>
        <p className='text-2xl font-medium text-center'>{desc}</p>
      </Tile.Body>
    </Tile>
  );
}
