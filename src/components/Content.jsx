import React, { useEffect, useState } from 'react'
import { IoMdSearch, IoIosMenu,IoMdClose  } from "react-icons/io";
import Card from './Card'

let API_KEY="&api_key=f94768e4015426f32538913d18227a87"
let base_URL="https://api.themoviedb.org/3"
let url=base_URL+"/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"+API_KEY
let arr=["Popular","Comedy","Horror","Animation","Documentary","War"];

const Content = () => {
  
  const [moviesData,setData]=useState([])
  const [url_set,setUrl]=useState(url)
  const [search,setSearch]=useState()

  useEffect(()=>{
    fetch(url_set).then(res=>res.json()).then(data=>{setData(data.results);
    });
  },[url_set])
  const getData=(movieType)=>{
    if(movieType=="Popular")
    {
      url=base_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY;
    }
    if(movieType=="Comedy")
    {
      url=base_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY+"&with_genres=35"
    }
    if(movieType=="Horror")
    {
      url=base_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY+"&with_genres=27"
    }
    if(movieType=="Animation")
    {
      url=base_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY+"&with_genres=16"
    }
    if(movieType=="Documentary")
    {
      url=base_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY+"&with_genres=99"
    }
    if(movieType=="War")
    {
      url=base_URL+"/discover/movie?sort_by=popularity.desc"+API_KEY+"&with_genres=10752"
    }
    setUrl(url)
  }
  const searchMovie=(evt)=>{
    if(evt.key=="Enter")
    {
        url=base_URL+"/search/movie?api_key=f94768e4015426f32538913d18227a87&query="+search;
        setUrl(url);
        setSearch(" ");
    }
  }
  const [menu,setMenu]=useState(false)
  const handleMenu=()=>{
    setMenu(!menu)
  }
  return (
    <>
        <nav className=' h-20 flex justify-between items-center fixed top-0 w-full shadow-md shadow-black bg-[#0f172a] z-10'>
        
        <div className='h-16 flex items-center'>
            <img src='/assets/logo.png' onClick={() => window.location.reload(false)} className='md:h-14 h-full cursor-pointer ' />
        </div>

        <div className='p-2 '>
            <ul className='hidden md:flex '>
            {
              arr.map((value,pos)=>{
                  return(
                      <li className='p-2 mx-2 cursor-pointer rounded underline-offset-8 decoration-2 hover:text-[#38bdf8] hover:underline  duration-150 '><a href="#" className='focus:text-[#38bdf8] ' key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                  )
              })
            }
            </ul>
        </div>

        <div className='relative mr-6'>
            <form className=''>        
            <IoMdSearch className='absolute inset-y-[27%] right-2 fill-black cursor-pointer'  onClick={(e) => {searchMovie(e);}}/>         
            <input type="text" placeholder='Enter movie name' onChange={(e)=>{setSearch(e.target.value)}} value={search}   onKeyDown={(e) => {searchMovie(e);}}
             className=' px-4 py-1 rounded-full border-1 border-black text-black font-thin'/>
            </form>
        </div>

        <div className='md:hidden'>
          <IoIosMenu size={26} className='fill-white cursor-pointer m-2' onClick={handleMenu}/>
        </div>

        <div className={menu?'bg-[#00172D] absolute top-0 right-0 h-screen w-1/2 z-10':'hidden'}>
          <IoMdClose size={24} className=' mx-2 my-5 absolute right-0 cursor-pointer hover:bg-gray-400 duration-200 rounded-full' onClick={handleMenu}/>
          <ul className='flex flex-col mt-16'>
          <h1 className=' m-4 text-2xl'>Genres</h1>
            {

              arr.map((value,pos)=>{
                  return(
                      <li className='p-2 mx-2 cursor-pointer rounded underline-offset-8 decoration-2 ative:bg-black duration-150 '><a href="#" className='focus:text-[#38bdf8]' key={pos} name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                  )
              })
            }
            </ul>
        </div>
    </nav>

    <div className='mt-32 md:mx-40 flex flex-wrap justify-center'>
        {
          (moviesData.length==0)?<p className='text-3xl p-20'>No results.</p>: moviesData.map((res,pos)=>{
            return(
              <Card info={res}  />
            )
          })
        }
    </div>
    </>
  )
}

export default Content