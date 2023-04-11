import React from 'react'
import {useState} from 'react';

          
const profiles = [
  {
    "id": "60d0fe4f5311236168a109f5",
    "title": "ms",
    "firstName": "Charlotte",
    "lastName": "Legrand",
    "picture": "https://randomuser.me/api/portraits/med/women/77.jpg"
},
{
    "id": "60d0fe4f5311236168a109f6",
    "title": "miss",
    "firstName": "Madison",
    "lastName": "Ambrose",
    "picture": "https://randomuser.me/api/portraits/med/women/15.jpg"
},
{
    "id": "60d0fe4f5311236168a109fa",
    "title": "ms",
    "firstName": "Ann",
    "lastName": "Mason",
    "picture": "https://randomuser.me/api/portraits/med/women/18.jpg"
},
{
    "id": "60d0fe4f5311236168a109fb",
    "title": "mr",
    "firstName": "Sohan",
    "lastName": "Pierre",
    "picture": "https://randomuser.me/api/portraits/med/men/77.jpg"
},
{
    "id": "60d0fe4f5311236168a109fc",
    "title": "mr",
    "firstName": "Gonzaga",
    "lastName": "Ribeiro",
    "picture": "https://randomuser.me/api/portraits/med/men/10.jpg"
},
{
    "id": "60d0fe4f5311236168a109ff",
    "title": "mrs",
    "firstName": "Josefina",
    "lastName": "Calvo",
    "picture": "https://randomuser.me/api/portraits/med/women/3.jpg"
},
{
    "id": "60d0fe4f5311236168a10a00",
    "title": "mrs",
    "firstName": "Els",
    "lastName": "Ijsseldijk",
    "picture": "https://randomuser.me/api/portraits/med/women/75.jpg"
},
{
    "id": "60d0fe4f5311236168a10a01",
    "title": "mr",
    "firstName": "Jesus",
    "lastName": "Riley",
    "picture": "https://randomuser.me/api/portraits/med/men/45.jpg"
},
{
    "id": "60d0fe4f5311236168a10a03",
    "title": "mr",
    "firstName": "Andri",
    "lastName": "Leclerc",
    "picture": "https://randomuser.me/api/portraits/med/men/57.jpg"
},
{
    "id": "60d0fe4f5311236168a10a04",
    "title": "mr",
    "firstName": "Konsta",
    "lastName": "Manninen",
    "picture": "https://randomuser.me/api/portraits/med/men/24.jpg"
}

];

function Containercomponent() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.firstName.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  return (
    <>
    <div className='Main'>
    <div className='Inputbox'>
       <input
       className='Input'
        type="text"
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Search by name"
      /> 
      </div>
      
      <ul >
        {filteredProfiles.map((profile, index) => (
          <li key={index}>
          <div className='Listbox'>
            <img className="profile-photo" src={profile.picture} alt=""/>
            <div className='Listpara'>
            <p> {profile.id}</p>
            <p > {profile.title} {profile.firstName} {profile.lastName}</p>
            </div>

           </div>
          </li>
        ))}
      </ul>
      
      </div>
    </>
  );
} 



export default Containercomponent