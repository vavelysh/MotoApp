import React from 'react';
import { ResultHeader, ResultItem, SpanRest, Team } from '../styles';
import { colorChooser } from '../../../../../utils/colorChooser';
import { Figure } from '../../../../UI/Figure';

const TeamStandings = ({ standings }) => {
  const arrayOfTeams = [];
  standings.forEach((res) => {
    if (arrayOfTeams.some((x) => x.team === res.team.name)) {
      const cp = { ...arrayOfTeams.find((x) => x.team === res.team.name) };
      const index = arrayOfTeams.findIndex((x) => x.team === res.team.name);
      cp.points = cp.points + res.points;
      arrayOfTeams.splice(index, 1);
      arrayOfTeams.push(cp);
    } else {
      arrayOfTeams.push({
        team: res.team.name,
        logo: res.team.imageUrl,
        points: res.points,
      });
    }
  });
  let positionCounter = 0;
  let renderTeamStandings = arrayOfTeams.map(({ team, logo, points }) => {
    const color = colorChooser(team);
    return (
      <ResultItem option="Team" key={team}>
        <Figure color={color} />
        <span>{++positionCounter}</span>
        <Team>
          <div>
            <img src={logo} alt={team} />
            <span>{team}</span>
          </div>
        </Team>
        <strong>{points}</strong>
      </ResultItem>
    );
  });
  return (
    <>
      <ResultHeader>
        <span />
        <span>Pos</span>
        <span>Team</span>
        <SpanRest>Pts</SpanRest>
      </ResultHeader>
      {renderTeamStandings}
    </>
  );
};

export default TeamStandings;
