import ProfileCards from "../Items/ProfileCards.tsx";

const Contact = () => {
    return (
        <div className={`
            text-white
            px-12
            flex flex-col justify-center items-center
            container
            mx-auto
            
       `}>
        <h1> Official Profiles  </h1>
            <ProfileCards
                profileImage ="https://res.cloudinary.com/ddnum51yo/image/upload/v1729440679/LeetCode/logo.png"
                username=""
                role=""
                workedOn=""





            />


        </div>
    );
}
export default Contact;