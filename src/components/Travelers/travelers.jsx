import React, {useEffect} from "react";

import paris from "../../assets/Paris.jpg"
import dubai from "../../assets/Dubai.jpg"
import NewYork from "../../assets/NewYork.jpg"
import London from "../../assets/London.jpg"

import traveler1 from "../../assets/user1.jpg"
import traveler2 from "../../assets/user2.jpg"
import traveler3 from "../../assets/user3.jpg"
import traveler4 from "../../assets/user4.jpg"


//import AOS ===>
import Aos from "aos";
import "aos/dist/aos.css"


const travelers = [
    {
        id: 1,
        destinatioonImage: paris,
        travelerImage: traveler1,
        travelerName: "Isha",
        socialLink: "@Ishain8"
    },
    {
        id: 2,
        destinatioonImage: dubai,
        travelerImage: traveler2,
        travelerName: "harry",
        socialLink: "@harryin3"
    },
    {
        id: 2,
        destinatioonImage: NewYork,
        travelerImage: traveler3,
        travelerName: "neha",
        socialLink: "@nehain6"
    },
    {
        id: 2,
        destinatioonImage: London,
        travelerImage: traveler4,
        travelerName: "vikky",
        socialLink: "@vkkyin8"
    }
]

function Travelers(){

    //UseEffect to set animation duration ==>
    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])


    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos='fade-down' data-aos-duration='2500'>
                    Top travelers of this month!
                </h2>

                <div className="travelersContainer grid">
                        
                    {
                        travelers.map(({id, destinatioonImage, travelerImage, travelerName, socialLink}) => {
                            return(
                                // {/* Single passanger card */}
                                <div data-aos='fade-up' data-aos-duration='2500' key ={id} className="singleTraveler">
                                    <img src={destinatioonImage} className="destinationImage" alt="paris" />

                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImage} className="travelerImage" alt="user1" />
                                        </div>
                                        <div className="travelerName">
                                            <span>{travelerName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Travelers;