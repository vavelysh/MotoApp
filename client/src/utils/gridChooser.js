export function gridChooser(types) {
  if (types) {
    if (types.catType === 'formula-1' || types.catType === 'formula-2' || types.catType === 'formula-e') {
      if (types.evType.charAt(0) === 'P' || types.evType.charAt(0) === 'Q') {
        return '20px 20px 2fr repeat(2,1fr)';
      } else if (
        types.evType.charAt(0) === 'R' ||
        types.evType.charAt(0) === 'F' ||
        types.evType.charAt(0) === 'S'
      ) {
        return '20px 20px 4fr repeat(4,1fr) 2fr';
      } else {
        return 'auto';
      }
    }
    if (types.catType === 'wrc') {
      return '20px 20px 4fr 1fr 1fr';
    }
  }
  return 'auto';
}
