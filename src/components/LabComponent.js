import React from "react"

class DistrictComponent extends React.Component {
    render(){
        const {name, capacity, allocation, backlog, id} = this.props;
        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{name}</td>
                <td>{capacity}</td>
                <td>
                    {allocation>(capacity-backlog)?(allocation+"("+(capacity-backlog)+"+"+(allocation+backlog-capacity)+" Overload)"):allocation}
                </td>
                <td>{backlog}</td>
            </tr>
        )
    }
}

export default DistrictComponent;