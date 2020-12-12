import React from "react"

class FilterFormAggregate extends React.Component{
    render(){
        const {handleFilters} = this.props;
        return (
            <div className="container-fluid">
                <h4 className="my-4">Filter by:</h4>
                <form style={{justifyContent: "space-between"}} className="form-inline">
                    <div>
                        <input onChange={handleFilters} type="text" className="form-control mb-2 mr-sm-2" aria-describedby="help" placeholder="Lab Type" name="labType"></input>
                        <small id="help" className="form-text">0-Govt Lab, 1-Private Lab</small>
                    </div>
                    <div>
                        <input onChange={handleFilters} type="text" className="form-control mb-2 mr-sm-2" aria-describedby="helpI" placeholder="Lab District" name="labDistrict"></input>
                        <small id="helpI" className="form-text">*Not Case Sensitive</small>
                    </div>
                </form>
                <br></br>
            </div>
        )
    }
}

export default FilterFormAggregate;