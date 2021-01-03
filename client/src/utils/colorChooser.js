export function colorChooser(team) {
  switch (team) {
    case 'Mercedes':
    case 'NIO':
      return '#00D2BE';
    case 'Ferrari':
    case 'PREMA Racing':
      return 'red';
    case 'Aston Martin':
      return '#0fc81f';
    case 'Alpine':
      return '#08B5F7';
    case 'Red Bull Racing':
    case 'Carlin':
      return '#021ef6';
    case 'Campos Racing':
    case 'McLaren':
    case 'Jaguar Racing':
      return '#FF8700';
    case 'Renault':
      return '#F1E931';
    case 'Force India':
    case 'BWT Arden':
    case 'Racing Point':
      return '#F596C8';
    case 'Alpha Tauri':
      return '#f1f5f4';
    case 'Williams':
      return '#addae0';
    case 'Haas F1 Team':
    case 'HWA Team':
      return '#828282';
    case 'Sauber':
    case 'Alfa Romeo':
    case 'Venturi':
      return '#AC5050';
    case 'Toro Rosso':
    case 'Audi Sport ABT Schaeffler':
      return '#446df5';
    case 'Manor':
      return '#52B030';
    case 'Lotus':
    case 'Andretti Autosport':
      return '#74701c';
    case 'Marussia':
    case 'Envision Virgin Racing':
      return '#4b2121';
    case 'Caterham':
      return 'green';
    case 'HRT':
      return '#6a4e4e';
    case 'Toyota Gazoo Racing WRT':
      return '#8ce5f8';
    case 'Hyundai Shell Mobis WRT':
      return '#a09c9c';
    case 'M-Sport Ford WRT':
      return '#306fd2';
    case 'Citroën Total World Rally Team':
      return '#e33434';
    case 'DAMS':
      return '#890A0A';
    case 'Uni-Virtuosi Racing':
    case 'DS Techeetah':
      return '#735E0E';
    case 'ART Grand Prix':
    case 'Dragon Racing':
      return '#70737B';
    case 'Charouz Racing System':
      return '#969899';
    case 'MP Motorsport':
    case 'Mahindra Racing':
      return '#252435';
    case 'Hitech Grand Prix':
      return '#99B1D4';
    default:
      return 'black';
  }
}
