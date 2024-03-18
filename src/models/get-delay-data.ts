export async function getDelayData() {
  const response = await fetch(`${process.env.BACKEND_URL}/proto/delay`, { cache: 'no-store' });
  if (!response.ok) {
    console.error(response);
    return;
  }
  const data: { delay: number } = await response.json();
  return data.delay;
}
