export function categoryEvents(categoryName) {
  switch (categoryName) {
    case 'formula-1':
      return [
        'Practice 1',
        'Practice 2',
        'Practice 3',
        'Qualification 1',
        'Qualification 2',
        'Qualification 3',
        'Race',
      ];
    case 'wrc':
      return ['Day 1', 'Day 2', 'Day 3', 'Day 4'];
    case 'motogp':
      return [
        'Practice 1',
        'Practice 2',
        'Practice 3',
        'Practice 4',
        'Qualification',
        'Race',
      ];
    case 'formula-e':
      return ['Practice 1', 'Practice 2', 'Qualification', 'Race'];
    case 'formula-2':
      return ['Practice','Qualification','Race Feature','Race Sprint']
    default:
      return null;
  }
}
