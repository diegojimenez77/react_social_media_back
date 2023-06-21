import { useContext } from "react";
import "./stories.scss"
import {AuthContext} from "../../context/authContext"

const Stories = () => {
// Access the currentUser from AuthContext using useContext
    const {currentUser} = useContext(AuthContext);
      // Temporary array of stories
    const stories = [
        {
          id: 1,
          name: "Anna Shvets",
          img: "https://images.pexels.com/photos/3727691/pexels-photo-3727691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 2,
          name: "Lola Russian",
          img: "https://images.pexels.com/photos/1999504/pexels-photo-1999504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: 3,
          name: "Anastasiya Lob",
          img: "https://images.pexels.com/photos/1035677/pexels-photo-1035677.jpeg",
        },
        {
          id: 4,
          name: "Andrea Pacquadio",
          img: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
      ];

  return (
    <div className="stories">
        <div className="story">
                <img src={currentUser.profilePic} />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
                <img src={story.img} />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories