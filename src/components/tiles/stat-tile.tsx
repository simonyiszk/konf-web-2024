type Props = {
  number: string;
  desc: string;
};

export function StatTile({ desc, number }: Props) {
  return (
    <div className='tile sm:col-span-2 flex flex-col justify-center items-center'>
      <h2 className='text-6xl font-bold'>{number}</h2>
      <p className='text-lg sm:text-xl font-medium text-center'>{desc}</p>
    </div>
  );
}
