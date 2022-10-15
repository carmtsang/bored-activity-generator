const Activity = ({ activity, type, participants }) => {
  return (
    <ul>
      <li>{activity}</li>
      <li>{type}</li>
      <li>{participants}</li>
    </ul>
  );
};
export default Activity;
