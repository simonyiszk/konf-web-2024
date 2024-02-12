type CountdownElementProps = {
  value: any;
  label: string;
};

export function CountDownElement({ value, label }: CountdownElementProps) {
  return (
    <div className='flex flex-col items-center'>
      <p className='text-6xl font-bold'>{value}</p>
      <p className='text-xl sm:text-2xl'>{label}</p>
    </div>
  );
}
