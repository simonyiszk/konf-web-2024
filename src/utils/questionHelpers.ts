const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

export const AllowedQuestionCount = 3;

export function getUserId(): string {
  let key = localStorage.getItem('user-id');
  if (!key) {
    key = generateRandomString(32);
    localStorage.setItem('user-id', key);
  }
  return key;
}

export function getQuestionCount(slug: string) {
  let amount = Number(localStorage.getItem(`question-${slug}`));
  if (isNaN(amount)) {
    amount = 0;
    localStorage.setItem(`question-${slug}`, String(amount));
  }
  return amount;
}

export function incrementQuestionCount(slug: string) {
  localStorage.setItem(`question-${slug}`, String(getQuestionCount(slug) + 1));
}

function generateRandomString(length: number): string {
  return Array.from({ length })
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join('');
}
