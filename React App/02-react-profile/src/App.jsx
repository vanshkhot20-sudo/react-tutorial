import Card from "./component/card"
import "./App.css";

const userDetails = [
  {
    "id": 1,
    "userName": "Emma Johnson",
    "userEmail": "@johnson.com",
    "userWebsite": "emmajohnson.dev",
    "userPhoto": "https://randomuser.me/api/portraits/women/1.jpg",
    "userDescription": "Frontend developer passionate about Angular and UI/UX design.",
    "messageCount": 245,
    "friendRequestSent": 18,
    "friendRequestReceived": 24,
    "hourlyChargeUSD": 55
  },
  {
    "id": 2,
    "userName": "Liam Carter",
    "userEmail": "@liam.com",
    "userWebsite": "liamcarter.io",
    "userPhoto": "https://randomuser.me/api/portraits/men/2.jpg",
    "userDescription": "Full-stack engineer specializing in Node.js and cloud applications.",
    "messageCount": 312,
    "friendRequestSent": 30,
    "friendRequestReceived": 42,
    "hourlyChargeUSD": 70
  },
  {
    "id": 3,
    "userName": "Sophia Martinez",
    "userEmail": "@sophia.com",
    "userWebsite": "sophiamartinez.me",
    "userPhoto": "https://randomuser.me/api/portraits/women/3.jpg",
    "userDescription": "Product designer focused on accessibility and responsive interfaces.",
    "messageCount": 158,
    "friendRequestSent": 12,
    "friendRequestReceived": 20,
    "hourlyChargeUSD": 60
  },
  {
    "id": 4,
    "userName": "Noah Wilson",
    "userEmail": "@noah.com",
    "userWebsite": "noahwilson.dev",
    "userPhoto": "https://randomuser.me/api/portraits/men/4.jpg",
    "userDescription": "Backend developer with expertise in REST APIs and microservices.",
    "messageCount": 410,
    "friendRequestSent": 40,
    "friendRequestReceived": 35,
    "hourlyChargeUSD": 80
  },
  {
    "id": 5,
    "userName": "Olivia Brown",
    "userEmail": "@olivia.com",
    "userWebsite": "oliviabrown.com",
    "userPhoto": "https://randomuser.me/api/portraits/women/5.jpg",
    "userDescription": "Digital marketer who loves analytics and social media strategy.",
    "messageCount": 128,
    "friendRequestSent": 9,
    "friendRequestReceived": 18,
    "hourlyChargeUSD": 45
  },
  {
    "id": 6,
    "userName": "James Anderson",
    "userEmail": "@james.com",
    "userWebsite": "jamesanderson.tech",
    "userPhoto": "https://randomuser.me/api/portraits/men/6.jpg",
    "userDescription": "DevOps engineer experienced in Kubernetes, Docker, and AWS.",
    "messageCount": 287,
    "friendRequestSent": 22,
    "friendRequestReceived": 31,
    "hourlyChargeUSD": 95
  },
  {
    "id": 7,
    "userName": "Ava Taylor",
    "userEmail": "@ava.com",
    "userWebsite": "avataylor.dev",
    "userPhoto": "https://randomuser.me/api/portraits/women/7.jpg",
    "userDescription": "Mobile app developer creating beautiful cross-platform experiences.",
    "messageCount": 193,
    "friendRequestSent": 14,
    "friendRequestReceived": 27,
    "hourlyChargeUSD": 65
  },
  {
    "id": 8,
    "userName": "Benjamin Thomas",
    "userEmail": "@benjamin.com",
    "userWebsite": "benjaminthomas.io",
    "userPhoto": "https://randomuser.me/api/portraits/men/8.jpg",
    "userDescription": "Cybersecurity consultant helping organizations stay secure.",
    "messageCount": 356,
    "friendRequestSent": 28,
    "friendRequestReceived": 39,
    "hourlyChargeUSD": 110
  },
  {
    "id": 9,
    "userName": "Mia Harris",
    "userEmail": "@mia.com",
    "userWebsite": "miaharris.design",
    "userPhoto": "https://randomuser.me/api/portraits/women/9.jpg",
    "userDescription": "Creative graphic designer with a passion for branding and illustration.",
    "messageCount": 174,
    "friendRequestSent": 11,
    "friendRequestReceived": 15,
    "hourlyChargeUSD": 50
  },
  {
    "id": 10,
    "userName": "William Moore",
    "userEmail": "@william.com",
    "userWebsite": "williammoore.dev",
    "userPhoto": "https://randomuser.me/api/portraits/men/10.jpg",
    "userDescription": "Technical lead mentoring teams and building scalable web platforms.",
    "messageCount": 489,
    "friendRequestSent": 35,
    "friendRequestReceived": 48,
    "hourlyChargeUSD": 120
  }
]
//console.log(userDetails.map((ele) => ele ));
function App() {
  return <>
  <div className="card-wrapper">
    {
      userDetails.map((ele) => {        
        return <div ><Card name={ele.userName} img={ele.userPhoto} email={ele.userEmail} website={ele.userWebsite} bio={ele.userDescription} 
        msgcount={ele.messageCount} requestsent={ele.friendRequestSent}  requestreceived={ele.friendRequestReceived} charge={ele.hourlyChargeUSD}/>
        </div>
      })
    }
  </div>      
  </>
}

export default App
