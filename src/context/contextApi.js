import React,{createContext,useState,useEffect} from "react";
import { fetchDataFromApi } from "../utils/api";
export const context=createContext();
const AppContext=(prop)=>{
   const [loading,setLoading]=useState(false);
   const [searchResult,setSearchResult]=useState(false);
   const [selectCategories,setSelectCategories]=useState(false);
   const [mobileMenu,setMobileMenu]=useState(false);
}