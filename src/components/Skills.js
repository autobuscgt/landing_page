import { soft_skills_cards } from "../utils/data";

const Skills = () => {
    return (
        <div className ="skills-container">
            <button className="skill-btn">Софт скиллы</button>
            <div className="skill-items-container">
                {soft_skills_cards.map(card => (
                    <div key={card.id} className="skill-card"> 
                        <img src={card.image} alt="skill-card"/>
                        <h2> {card.name} </h2>
                    </div>
                ))}
            </div>
            <button className="skill-btn">Хард скиллы</button>
        </div>
    )
}
export default Skills;