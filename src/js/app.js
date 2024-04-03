export default function showLifePlayer(player) {
    if (player.health > 50) {
      return 'healthy';
    } if (player.health >= 15) {
      return 'wounded';
    }
    return 'critical';
  }