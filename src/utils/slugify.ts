// https://gist.github.com/codeguy/6684588?permalink_comment_id=3426313#gistcomment-3426313

export default function slugify(input: string) {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-');
}
