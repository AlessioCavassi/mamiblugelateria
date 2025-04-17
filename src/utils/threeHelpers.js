// Utility per Three.js
export function getRandomColor() {
  const colors = ['#ff6f91', '#8bc34a', '#5d4037', '#fbc02d', '#e57373'];
  return colors[Math.floor(Math.random() * colors.length)];
}
