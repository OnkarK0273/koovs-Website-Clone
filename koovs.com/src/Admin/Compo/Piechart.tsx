
import { Box, Center, color, Heading, HStack, useBreakpointValue, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { getAdminMen, getAdminWomen } from '../../Redux/admin/admin.action'
import { useAppDispatch, useAppSelector } from '../../Redux/store'
import { Product } from '../../utils/types'

export default function Piechart() {
    const mens = useAppSelector((store)=>store.adminReducer.mens)
    const womens = useAppSelector((store)=>store.adminReducer.womens)
    const dispatch = useAppDispatch()
    const [toggle,setToggle] = useState(true)
    //mens
    const [shoes,setShoes] = useState([])
    const [pants,setPants] = useState([])
    const [tshirt,setTshirt] = useState([])
    const [hoodes,setHodees] = useState([])
    const [mensarr,setArr] = useState<number[]>([])
    // womens
    const [sneakers,setsneakers ] = useState([])
    const[loungwear,setloungwear ] = useState([])
    const [bodysuit,setbodysuit] = useState([])
    const [womensarr,setwomensArr] = useState<number[]>([])



    
   
    


    useEffect(()=>{
        dispatch(getAdminMen())
        dispatch(getAdminWomen())
    },[])


    useEffect(()=>{
       //mens
        let shoesarr = mens?.filter((el:Product)=>el.category === 'shoes')
        let pantsarr = mens?.filter((el:Product)=>el.category === 'pants')
        let tshirtsarr = mens?.filter((el:Product)=>el.category === 't-shirt')
        let hoodesarr = mens?.filter((el:Product)=>el.category === 'hoodes')
        setShoes(shoesarr)
        setPants(pantsarr)
        setTshirt(tshirtsarr)
        setHodees(hoodesarr)
        setArr([shoes.length,pants.length,tshirt.length,hoodes.length])

        //womens
        let sneakersarr = womens?.filter((el:Product)=>el.category === 'sneakers')
        let loungweararr = womens?.filter((el:Product)=>el.category === 'loungwear')
        let bodysuitsarr = womens?.filter((el:Product)=>el.category === 'bodysuit')
        setsneakers(sneakersarr)
        setloungwear(loungweararr)
        setbodysuit(bodysuitsarr)
        setwomensArr([sneakers.length,loungwear.length,bodysuit.length])


    },[toggle])
    
    const variant = useBreakpointValue(
        {
          base: '350',
          sm:'400',
          md: '400',
          lg:'550'
        })

        
  return (
    <Box >

    <Center>
        <VStack boxShadow='dark-lg' p='5' rounded='md' bg='white'  >
            <HStack justifyContent={'space-evenly'} border='0px' w='99%' >
                <Heading color={toggle?'black':'gray.400'} cursor='pointer' onClick={()=>{setToggle(true)}} pb='10px' >Mens</Heading>
                <Heading color={!toggle?'black':'gray.400'} cursor='pointer' onClick={()=>{setToggle(false)}} pb='10px' >Womens</Heading>
            </HStack>
            {
                toggle?<Chart
                type='donut'
                width={variant}
                height={variant}
                
                series={mensarr}
                
    
                options={{
                    colors:['#439A97','#62B6B7','#97DECE','#CBEDD5'],
                    labels:['Shoes','Pants','T-Shirt','Hoddes'],
                    
                    
    
                    plotOptions:{
                        pie:{
                            donut:{
                                labels:{
                                    show:true,
                                    total:{
                                        show:true,
                                        fontSize:'40px',
                                        color:"#6096B4"
    
                                    }
                                }
                            }
                        }

import {
  Box,
  Center,
  //   color,
  Heading,
  HStack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getAdminMen, getAdminWomen } from "../../Redux/admin/admin.action";
import { useAppDispatch, useAppSelector } from "../../Redux/store";

export default function Piechart() {
  const mens = useAppSelector((store) => store.adminReducer.mens);
  const womens = useAppSelector((store) => store.adminReducer.womens);
  const dispatch = useAppDispatch();
  const [toggle, setToggle] = useState(true);
  // const [arr, setArr] = useState<number[]>([]);
  // setArr([...arr,30,40,50,60])
  console.log(mens);
  console.log(womens);

  useEffect(() => {
    dispatch(getAdminMen());
    dispatch(getAdminWomen());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {}, []);

  const variant = useBreakpointValue({
    base: "350",
    sm: "400",
    md: "400",
    lg: "550",
  });

  console.log(variant);
  return (
    <Box>
      <Center>
        <VStack boxShadow="dark-lg" p="5" rounded="md" bg="white">
          <HStack justifyContent={"space-evenly"} border="0px" w="99%">
            <Heading
              color={toggle ? "black" : "gray.400"}
              cursor="pointer"
              onClick={() => {
                setToggle(true);
              }}
              pb="10px"
            >
              Mens
            </Heading>
            <Heading
              color={!toggle ? "black" : "gray.400"}
              cursor="pointer"
              onClick={() => {
                setToggle(false);
              }}
              pb="10px"
            >
              Womens
            </Heading>
          </HStack>
          {toggle ? (
            <Chart
              type="donut"
              width={variant}
              height={variant}
              series={[45, 25, 11, 44]}
              options={{
                colors: ["#439A97", "#62B6B7", "#97DECE", "#CBEDD5"],
                labels: ["usa", "ind", "china", "america"],

                plotOptions: {
                  pie: {
                    donut: {
                      labels: {
                        show: true,
                        total: {
                          show: true,
                          fontSize: "40px",
                          color: "#6096B4",
                        },
                      },

                    },
                  },
                },
                dataLabels: {
                  enabled: true,
                },

                responsive: [
                  {
                    breakpoint: 400,
                    options: {
                      plotOptions: {
                        donut: {
                          horizontal: true,
                        },
                      },
                      legend: {
                        position: "bottom",
                      },
                    },

    
                    responsive: [
                        {
                        breakpoint: 400,
                        options: {
                            plotOptions: {
                            donut: {
                                horizontal: true
                            }
                            },
                            legend: {
                            position: "bottom"
                            }
                        }
                        }
                    ]
    
    
                    
    
    
                }}
                />:<Chart
                type='donut'
                width={variant}
                height={variant}
                
                series={womensarr}
                
    
                options={{
                    colors:['#CBEDD5','#97DECE','#62B6B7'],
                    labels:['Sneakers','Loungwear','Bodysuit',],
                    
                    
    
                    plotOptions:{
                        pie:{
                            donut:{
                                labels:{
                                    show:true,
                                    total:{
                                        show:true,
                                        fontSize:'40px',
                                        color:"#6096B4"
    
                                    }
                                }
                            }
                        }

                  },
                ],
              }}
            />
          ) : (
            <Chart
              type="donut"
              width={variant}
              height={variant}
              series={[45, 25, 11, 44]}
              options={{
                colors: ["#CBEDD5", "#97DECE", "#62B6B7", "#439A97"],
                labels: ["usa", "ind", "china", "america"],

                plotOptions: {
                  pie: {
                    donut: {
                      labels: {
                        show: true,
                        total: {
                          show: true,
                          fontSize: "40px",
                          color: "#6096B4",
                        },
                      },

                    },
                  },
                },
                dataLabels: {
                  enabled: true,
                },

                responsive: [
                  {
                    breakpoint: 400,
                    options: {
                      plotOptions: {
                        donut: {
                          horizontal: true,
                        },
                      },
                      legend: {
                        position: "bottom",
                      },
                    },

    
                    responsive: [
                        {
                        breakpoint: 400,
                        options: {
                            plotOptions: {
                            donut: {
                                horizontal: true
                            }
                            },
                            legend: {
                            position: "bottom"
                            }
                        }
                        }
                    ]
    
    
                    
    
    
                }}
                />
            }

                  },
                ],
              }}
            />
          )}
          {/* <Chart
            type='donut'
            width={variant}
            height={variant}
            
            series={[45,25,11,44]}

            
        </VStack>
      </Center>
    </Box>
  );
}
