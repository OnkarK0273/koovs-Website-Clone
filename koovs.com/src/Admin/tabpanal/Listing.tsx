
import { Box } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getAdminMen, getAdminWomen } from '../../Redux/admin/admin.action'
import { useAppDispatch, useAppSelector } from '../../Redux/store'
import ListingItems from '../Compo/ListingItems'
import ListingSerch from '../Compo/ListingSerch'

export default function Listing() {
  const mens = useAppSelector((store)=>store.adminReducer.mens)
  const womens = useAppSelector((store)=>store.adminReducer.womens)
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()
  const location = useLocation()

  console.log("mens",mens)
  console.log("womens",womens)

  console.log(location,searchParams.getAll('product')[0],searchParams.getAll('catagory'))
  useEffect(()=>{

    if(searchParams.getAll('product')[0]==="Mens"){
      const getMensParam = {
        params: {
          category: searchParams.getAll('catagory'),
          
        }
      }

      dispatch(getAdminMen(getMensParam))

    }

    if(searchParams.getAll('product')[0]==="Womens"){
      const getMensParam = {
        params: {
          category: searchParams.getAll('catagory'),
          
        }
      }

      dispatch(getAdminWomen(getMensParam))

    }
    


  },[location.search])

  

  return (
    <Box pt={{ base: "80px", md: "20px" }}>
        <ListingSerch/>
        {
          searchParams.getAll('product')[0]==="Mens"&&<ListingItems name='mens' />
        }{
          searchParams.getAll('product')[0]==="Womens"&&<ListingItems name='womens' />
        }
       
    </Box>
  )


