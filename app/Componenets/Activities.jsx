import "../styles/index.css";
const Activities = ({ activities }) => {
  return (
    <div className="activities">
      {activities.map((activity, index) => (
        <div key={index} className="card">
          <div className="card-content">
            <h3 className="card-title">{activity.title}</h3>
            <p className="card-date">{activity.date}</p>
            <p className="card-description">{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;
