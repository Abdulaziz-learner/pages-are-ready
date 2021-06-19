import React from 'react';
import {
    Card
} from 'reactstrap';

const All = ({ contacts }) => {
    const [ allContacts, setAllContacts ] = React.useState(contacts);
   
    return(
        <>
            <div className="content">
                <Card className="shadow">
                    <h2 className="m-2">All Contacts</h2>
                    <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allContacts.map((contact, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{ index + 1 }</td>
                                        <td>{ contact.full_name }</td>
                                        <td>{ contact.phone }</td>
                                        <td>{ contact.email }</td>
                                        <td>{ contact.company }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                </Card>
            </div>
        </>
    )
}

export default All; 