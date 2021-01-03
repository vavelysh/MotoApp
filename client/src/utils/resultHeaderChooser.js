export const resultHeaderChooser = (type) => {
  const letter = type.evType.charAt(0);
  switch (letter) {
    case 'R':
    case 'F':
    case 'S':
      return (
        <>
          <span />
          <span>Pos</span>
          <span>Drivers</span>
          <span>Grid</span>
          <span>Pits</span>
          <span>Laps</span>
          <span>Pts</span>
          <span>Time</span>
        </>
      );
    case 'Q':
    case 'P':
      return (
        <>
          <span />
          <span>Pos</span>
          <span>Drivers</span>
          <span>Laps</span>
          <span>Time</span>
        </>
      );
    case 'D':
      return (
        <>
          <span/>
          <span>Pos</span>
          <span>Drivers</span>
          <span>X</span>
          <span>Time</span>
        </>
      );
    default:
      return null;
  }
};
