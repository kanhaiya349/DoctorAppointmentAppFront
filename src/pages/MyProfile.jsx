import { useState } from "react"
import { assets } from "../assets/assets"

function MyProfile() {
  const [userData,setUserData]=useState({
    name:"Edward Vincent",
    image: assets.profile_pic,
    email:"richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address:{
      line1:"57th Cross, Richmond",
      line2:"Circle, Church Road, London"
    },
    gender:"Male",
    dob:'2000-01-20'
  })

  const [isEdit,setIsEdit]=useState(false);

  return (
    <div className="mb-20 flex flex-col">
        <div className="mb-8">
          <img className="w-40 rounded-lg" src={userData.image} alt="" />
        </div>
        <h4 className="text-3xl font-semibold mb-1.5">{userData.name}</h4>
        <p className="w-full h-[1px] mb-4 bg-gray-400" ></p>
        <p className="text-lg underline text-textColor mb-2">Contact Information</p>
        <div className="w-full">
          <p className="text-sm flex w-5/6 sm:w-1/2 lg:w-1/3 xl:1/4 justify-between mb-2 text-primary"><span className="text-black">Email id:</span>
            {userData.email}
          </p>
          <p className="text-sm flex w-5/6 sm:w-1/2 lg:w-1/3 xl:1/4 justify-between mb-2"><span>Phone:</span>
          {isEdit?<input className="bg-blue-50 border border-gray-300 rounded-md" type="tel" onChange={(e)=>setUserData({...userData, phone:e.target.value})} value={userData.phone} required/>:userData.phone}
          </p>
          <p className="text-sm flex w-5/6 sm:w-1/2 lg:w-1/3 xl:1/4 justify-between mb-2"><span>Address:</span>
          <span className="flex flex-col gap-0.5">{isEdit?<input className="bg-blue-50 border border-gray-300 rounded-md" type="text" onChange={(e)=>setUserData({...userData, line1:e.target.value})} value={userData.address.line1} required/>:userData.address.line1}
          {isEdit?<input className="bg-blue-50 border border-gray-300 rounded-md" type="text" onChange={(e)=>setUserData({...userData, line2:e.target.value})} value={userData.address.line2} required/>:userData.address.line2}</span>
          </p>
        </div>
        <p className="text-lg underline text-textColor my-2">Basic Information</p>
        <div>
          <p className="text-sm flex w-5/6 sm:w-1/2 lg:w-1/3 xl:1/4 justify-between mb-2"><span>Gender:</span>
            {isEdit?<select className="border border-gray-400" onChange={(e)=>setUserData({...userData,gender:e.target.value})} value={userData.gender}>
              <option value="">No Select</option>
              <option value="Male">Male</option>
              <option value="Femal">Female</option>
              <option value="Prefer Not to say">Prefer not to say</option>
            </select>:userData.gender}
          </p>
          <p className="text-sm flex w-5/6 sm:w-1/2 lg:w-1/3 xl:1/4 justify-between mb-2"><span>Birthday:</span>
            {isEdit?<input type="date" onChange={(e)=>setUserData({...userData,dob:e.target.value})} value={userData.dob} />:userData.dob}
          </p>
        </div>
        <div className="mt-4">
          <button onClick={()=>setIsEdit(true)} className={`${isEdit?"hidden":""} border border-blue-300 px-5 py-1 hover:bg-primary hover:text-white transition-all ease-in-out duration-500 rounded-full`}>Edit</button>
          <button onClick={()=>setIsEdit(false)} className={`${isEdit?"":"hidden"} border border-blue-300 px-5 py-1 hover:bg-primary hover:text-white transition-all ease-in-out duration-500 rounded-full`}>Save</button>
        </div> 
    </div>
  )
}

export default MyProfile