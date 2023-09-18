import styles from "./Team.module.css";
import Carousel from "../Reusables/Carousel/Carousel";
import TeamItem from "../Reusables/TeamItem/TeamItem";

const Team = () => {
  const data = [
    {
      image: "/assets/images/tanish.jpg",
      name: "Venkatesh",
      role: "Babaji",
    },
    {
      image: "/assets/images/tanish.jpg",
      name: "Venkatesh",
      role: "Babaji",
    },
    {
      image: "/assets/images/tanish.jpg",
      name: "Venkatesh",
      role: "Babaji",
    },
    {
      image: "/assets/images/tanish.jpg",
      name: "Venkatesh",
      role: "Babaji",
    },  
  ];

  return (
    <div id="team" className={styles.team}>
      <h1 className={styles.team__title}>
        Meet Our{" "}
        <span className={styles.team__title_highlight}>CodeTastic</span> Crew!
      </h1>
      <Carousel
        id="team__carousel"
        props={data.map((item) => {
          return (
            <TeamItem
              key={item.name}
              image={item.image}
              name={item.name}
              role={item.role}
            />
          );
        })}
      />
    </div>
  );
};

export default Team;
