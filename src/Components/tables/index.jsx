import React from 'react'
import {Table,Button} from 'react-bootstrap'

export default function Tables(props){

    return(
        <>
     
       <Button variant="outline-secondary styleDiv" onClick={()=>props.sortBy('upvotes')}>order by upvote</Button>
       <Button variant="outline-secondary"  onClick={()=>props.sortDate('date')}>orer by date</Button>

        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            <th>Up Votes</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
                 {
                    props.data.map(row=>(
                        <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.title}</td>
                        <td>{row.upvotes}</td>
                        <td>{row.date}</td>
                        </tr>
                    )).reverse()
                }
        </tbody>
</Table>
    </>         
    )

}