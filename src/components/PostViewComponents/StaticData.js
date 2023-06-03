import pic1 from '../../images/shivalord.jpg'
import pic2 from '../../images/coding.jpg'
import pic3 from '../../images/coding1.jpg'
const projectListData =()=>{
    const initalData = [
        {name:"Siva",
        location:"Bengaluru",
        likes:64,
        description: "Kick start your career",
        PostImage: pic1,
        date: new Date().toString().slice(4,15),
        },
        {name:"Neeraj",
        location:"Pune",
        likes:30,
        description: "Sample Description",
        PostImage: pic2,
        date: new Date().toString().slice(4,15),
        },
        {name:"Rahul",
        location:"Hyderabad",
        likes:30,
        description: "Sample Description for Post",
        PostImage: pic3,
        date: new Date().toString().slice(4,15),
        }
        ];
        return initalData
}
export default projectListData