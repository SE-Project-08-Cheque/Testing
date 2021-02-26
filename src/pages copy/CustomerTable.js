import React,{useState} from 'react';
import { Input,Stack,Checkbox,Box,Center } from "@chakra-ui/react";


import UserDetails from '../components/sampleUsers';
import DataTable from '../components/DataTable';
import StaffHeader from '../components/StaffHeader';
import StaffSideBar from '../components/StaffsideBar';



const CustomerTable = (props) => {

    const[data,setData]=useState(UserDetails);
    const[q,setQ]=useState("");

    const [searchColumns,setSearchColumns]=useState(["id","name"]);           //filter Search


    

    
    /*useEffect(()=>{       
        fetch('json url')
        .then(response=>response.json())
        .then((json)=>setData(json))
    },[])*/
    

    function search(rows){  
        return rows.filter((row)=>
        searchColumns.some(
            (column)=> row[column].toString().toLowerCase().indexOf(q.toLowerCase()) >-1
        ));
                                                    
       
    }
    const columns=data[0] && Object.keys(data[0]);


    function clickHandler(){
        console.log('hi');
    }


    return (
        <React.Fragment>
            <StaffSideBar isDisabled="false" />
            <StaffHeader />

           

            <Box
                borderStyle="solid"
                borderColor="gray.200"
                borderWidth="4px"
                boarderRadius="250px"
                mt={{ base: '100px', md: '130px' }}
                ml={{ base: '20px', md: '260px' }}
                

                h="auto"
                mr="20px"
                >
                
                <Center  h="80px" fontSize='2em'>
                Customer Details
                </Center>

                <Stack spacing={3}>
                    <Input placeholder="Search Customer" size="lg" value={q} onChange={(e)=>setQ(e.target.value)}/>
                </Stack>
                 <h1 fontSize='1.2em'>Search By:</h1>
              
                <Stack spacing={10} direction="row">
               {
               columns && columns.map(column=> 
                            <Checkbox 
                                isChecked={searchColumns.includes(column)}
                                onChange={(e)=>{ const checked=searchColumns.includes(column)
                                                setSearchColumns(prev => checked ? prev.filter(sc => sc !== column):[...prev,column])}}
                                >
                            {column}

                            </Checkbox> )
               
               }  
               </Stack>
                
          


           <div>
                <DataTable data={search(data)} 
                onClick={props.clickHandler}/>
           </div>

           
        </Box>
      

     </React.Fragment>
        
    )
}

export default CustomerTable
