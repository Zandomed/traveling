export function getAvatar(size) {
  return fetch(`https://i.pravatar.cc/${size}`);
}
