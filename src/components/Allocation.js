import React from "react"
import DistrictComponent from "./DistrictComponent"
import FilterFormAllocation from "./filterFormAllocation";
import Error from "./Error"

class Allocation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sourceDist: "",
            transferType: ""
        }
    }

    handleFilters = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    handleReset= (event) => {
        event.preventDefault();
        this.props.history.push("/");
    }
    render(){
        const {currentState} = this.props;
        if(!currentState.isActive){
            return(
                <div className="container-fluid text-center justify-content-center">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h1>Provide Data First!</h1>
                    <button onClick={this.handleReset} className="btn btn-lg btn-primary">Provide Data!</button>
                </div>
            )
        }
        const answer=currentState.formData, districts=currentState.filesCSV[0], labs=currentState.filesCSV[1];
        if(districts[0].district_id === undefined || labs[0].id === undefined){
            return (
                <Error></Error>
            )
        }
        const table = answer.map((data, i)=> {
            const dist = districts.find((d)=> 
                parseInt(data.source) === parseInt(d.district_id)
            )
            if(data.transfer_type === 0){
                let lab, labDist;
                lab = labs.find((d)=> 
                    parseInt(data.destination) === parseInt(d.id)
                )
                labDist = districts.find((d)=>parseInt(lab.district_id) === parseInt(d.district_id))
                if(this.state.transferType !== "" && parseInt(this.state.transferType) === data.transfer_type){
                    if(this.state.sourceDist !== "" && dist.district_name.toLowerCase().slice(0, this.state.sourceDist.length) === this.state.sourceDist.toLowerCase()){
                        return (<DistrictComponent 
                            key={i}
                            sourceType={"District"} 
                            name={dist.district_name} 
                            labAlloted={((lab.lab_type===0)?"Govt. Lab":"Private Lab") +"(Lab ID: "+lab.id+"), "+ labDist.district_name} 
                            swabsAlloted={data.samples_transferred}
                            remarks={"District to Lab"}
                        ></DistrictComponent>)
                    }
                    else if(this.state.sourceDist === ""){
                        return (<DistrictComponent 
                            key={i}
                            sourceType={"District"} 
                            name={dist.district_name} 
                            labAlloted={((lab.lab_type===0)?"Govt. Lab":"Private Lab") +"(Lab ID: "+lab.id+"), "+ labDist.district_name} 
                            swabsAlloted={data.samples_transferred}
                            remarks={"District to Lab"}
                        ></DistrictComponent>)
                    }
                }
                else if(this.state.transferType === ""){
                    if(this.state.sourceDist !== "" && dist.district_name.toLowerCase().slice(0, this.state.sourceDist.length) === this.state.sourceDist.toLowerCase()){
                        return (<DistrictComponent 
                            key={i}
                            sourceType={"District"} 
                            name={dist.district_name} 
                            labAlloted={((lab.lab_type===0)?"Govt. Lab":"Private Lab") +"(Lab ID: "+lab.id+"), "+ labDist.district_name} 
                            swabsAlloted={data.samples_transferred}
                            remarks={"District to Lab"}
                        ></DistrictComponent>)
                    }
                    else if(this.state.sourceDist === ""){
                        return (<DistrictComponent 
                            key={i}
                            sourceType={"District"} 
                            name={dist.district_name} 
                            labAlloted={((lab.lab_type===0)?"Govt. Lab":"Private Lab") +"(Lab ID: "+lab.id+"), "+ labDist.district_name} 
                            swabsAlloted={data.samples_transferred}
                            remarks={"District to Lab"}
                        ></DistrictComponent>)
                    }
                }
                
            }
            else {
                let lab;
                lab = districts.find((d)=> 
                    parseInt(data.source) === parseInt(d.district_id)
                )
                if(this.state.transferType !== "" && parseInt(this.state.transferType) === data.transfer_type){
                    if(this.state.sourceDist !== "" && dist.district_name.toLowerCase().slice(0, this.state.sourceDist.length) === this.state.sourceDist.toLowerCase()){
                        return (<DistrictComponent 
                            key={i}
                            sourceType={"District"} 
                            name={dist.district_name} 
                            labAlloted={lab.district_name + "(District HQ)"} 
                            swabsAlloted={data.samples_transferred}
                            remarks={"District to District"}
                        ></DistrictComponent>)
                    }
                    else if(this.state.sourceDist === ""){
                        return (<DistrictComponent 
                            key={i}
                            sourceType={"District"} 
                            name={dist.district_name} 
                            labAlloted={lab.district_name + "(District HQ)"} 
                            swabsAlloted={data.samples_transferred}
                            remarks={"District to District"}
                        ></DistrictComponent>)
                    }
                }
                else if(this.state.transferType === ""){
                    if(this.state.sourceDist !== "" && dist.district_name.toLowerCase().slice(0, this.state.sourceDist.length) === this.state.sourceDist.toLowerCase()){
                        return (<DistrictComponent 
                            key={i}
                            sourceType={"District"} 
                            name={dist.district_name} 
                            labAlloted={lab.district_name + "(District HQ)"} 
                            swabsAlloted={data.samples_transferred}
                            remarks={"District to District"}
                        ></DistrictComponent>)
                    }
                    else if(this.state.sourceDist === ""){
                        return (<DistrictComponent 
                            key={i}
                            sourceType={"District"} 
                            name={dist.district_name} 
                            labAlloted={lab.district_name + "(District HQ)"} 
                            swabsAlloted={data.samples_transferred}
                            remarks={"District to District"}
                        ></DistrictComponent>)
                    }
                }  
            }
        })
        return (
            <div className="container-fluid">
                <FilterFormAllocation handleFilters={this.handleFilters}></FilterFormAllocation>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <caption>Allocation Data</caption>
                        <thead>
                            <tr>
                            <th scope="col">Source Type</th>
                            <th scope="col">Source</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Samples Allocated</th>
                            <th scope="col">Transfer Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Allocation;