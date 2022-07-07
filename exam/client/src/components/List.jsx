import { Link } from '@reach/router';

import React from 'react';


const List = ({pet}) => {


    return(
        <div>
                <Link to={`/new` }> Add pet to shelter</Link>
                <h1>Pet Shelter</h1>
                <h2>These pets are looking for a good home</h2>
                {
                    pet.map((pet, index) =>
                    <div key={index}>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td> {pet.name}</td>
                                <td> {pet.type}</td>
                                <p><Link to={`/show/${pet._id}`}>Details</Link>
                                <Link to={`/edit/${pet._id}`}>Edit</Link></p>
                            </tr>
                        </table>
                    </div>
                    )
                }
        </div>
    )
}

export default List;