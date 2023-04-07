import { Box, Center, Heading, HStack, useBreakpointValue, VStack,Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
// import { getAdminMen, getAdminWomen } from '../../Redux/admin/admin.action'
// import { useAppDispatch, useAppSelector } from '../../Redux/store'
import { Product } from '../../utils/types'

interface piechartProp{
    mens:Product[]
    womens:Product[]
}

export default function Piechart({mens,womens}:piechartProp) {
    const [toggle,setToggle] = useState(true)
  

    const variant = useBreakpointValue(
        {
          base: '350',
          sm:'400',
          md: '400',
          lg:'550'
        })

        
  return (
    <Box >

    <Flex justifyContent='center' alignItems='center'  >
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
                
                series={[mens?.filter((el:Product)=>el.category === 'shoes').length,mens?.filter((el:Product)=>el.category === 'pants').length,mens?.filter((el:Product)=>el.category === 't-shirt').length,mens?.filter((el:Product)=>el.category === 'hoodes').length]}
                
    
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
                    },
                    dataLabels:{
                        enabled:true,
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
                
                series={[womens?.filter((el:Product)=>el.category === 'sneakers').length,womens?.filter((el:Product)=>el.category === 'loungwear').length,womens?.filter((el:Product)=>el.category === 'bodysuit').length]}
                
    
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
                    dataLabels:{
                        enabled:true,
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
            
        </VStack>

    </Flex> 


    </Box>
  )
}