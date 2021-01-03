export function backgroundCases(type) {
  switch (type) {
    case 'Formula 1':
      return 'https://i.inews.co.uk/content/uploads/2020/09/PRI_163610936.jpg';
    case 'WRC':
      return 'https://images.unsplash.com/photo-1548504240-3dd72f99dc72?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
    case 'Formula E':
      return 'https://assets-prd.formulae.cloud/-/media/images/news/2020/september/formula-e-grid-shot-start.jpg?modified=20200924095253&cx=0.5&cy=0.8&cw=1440&ch=707&hash=A789C5D311486689FF8C7780CA9E3249';
    case 'Formula 2':
      return 'https://www.cyrkf1.pl/wp-content/uploads/2020/06/2019-F2-start.jpg';
    default:
      return 'https://images.unsplash.com/photo-1607957496280-7162aa648931?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
  }
}
