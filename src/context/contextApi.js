import React,{createContext,useState,useEffect} from "react";
import { fetchDataFromApi } from "../utils/api";
export const Context=createContext();


export const AppContext=(props)=>{
   const [loading,setLoading]=useState(false);
   const [searchResult,setSearchResult]=useState(false);
   const [selectCategories,setSelectCategories]=useState("New");
   const [mobileMenu,setMobileMenu]=useState(false);
   useEffect(()=>{
      fetchSelectedCategoryData(selectCategories);
   },[]);
     const fetchSelectedCategoryData=(query)=>{
       
     }
  return (
    <Context.Provider
    value={{
      loading,
      setLoading,
      searchResult,
      setSelectCategories,
      mobileMenu,
      setMobileMenu,
    }}
    >
     {props.childrem} 
    </Context.Provider>
  )
   }
