'use client'
import './page.css'
import {  useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";

export default function Home() {
  const [Data, setData] = useState([]);
  const [JsonData, setJsonData] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      const jsonData = JSON.stringify(parsedData);  
      console.log(parsedData);  
      setJsonData(jsonData)
      setData(parsedData);
    };
  }

  async function send() {
    try {
         const response = await axios.post('/api/uploads', Data);
        console.log(response.status);
        console.log(response.data.data);
    } catch (error) {
        console.error(error);
    }
}
  return (
   <>
    <div className="App">
      
      <input 
        type="file" 
        accept=".xlsx, .xls, .csv, .json" 
        onChange={handleFileUpload} 
      />
  
 
        <button onClick={send}>Send</button>
       
    </div>

   <div>
    {Data.length>0 && (
      <table>
        <thead>
          <tr>
            <th>Name</th><th>Value</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item,index)=>(
            <tr key={index}><td>{item.name}</td><td>{item.value}</td></tr>
          ))}
        </tbody>
      </table>
    )}
   </div>
   </>
  );
}
