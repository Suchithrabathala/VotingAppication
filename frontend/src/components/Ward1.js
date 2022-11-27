import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Record = (props) => (
 <tr>
   <td>{props.record.voterid}</td>
   <td>{props.record.fname}</td>
   <td>{props.record.lname}</td>
   <td>{props.record.dob}</td>
   <td>{props.record.email}</td>
   <td>{props.record.eligible}</td>
   <td>{props.record.eligiblereason}</td>
   <td>{props.record.gender}</td>
   <td>{props.record.ward}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/voter/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 

 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 

 return (
   <div>
     <h3>Record List</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>VOTER ID</th>
           <th>FIRST NAME</th>
           <th>LAST NAME</th>
           <th>DATE OF BIRTH</th>
		   <th>EMAIL</th>
		   <th>ELIGIBLE</th>
		   <th>REASON</th>
		   <th>GENDER</th>
		   <th>WARD</th>
		   
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}