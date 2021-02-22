import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import { DataGrid } from '@material-ui/data-grid';
import { withRouter } from 'react-router-dom';



class TableUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            isLoading: false,
            isError: false,
            search: ''
        }
    }

    handleChange(event) {
        // Get event value
        let searchValue = event.target.value;
        // Set the state to trigger a re-rendering
        this.setState({ search: searchValue });
    };

    async componentDidMount() {
        this.setState({ isLoading: true })
        const response = await fetch("http://javareesbyapi-env.eba-rtdeyeqd.ap-southeast-2.elasticbeanstalk.com/api/v1/getallclients/tenant/reesby")
        if (response.ok) {
            const users = await response.json()
            this.setState({ users, isLoading: false })
        } else {
            this.setState({ isError: true, isLoading: false })
        }
    };

    render() {
        let usersArr = this.state.users;
        let searchString = this.state.search.trim().toLowerCase();
        if (searchString.length > 0) {
            usersArr = usersArr.filter((e) => e.clientName.toLowerCase().match(searchString));
        }

        function CustomToolbar() {
            return <div style={{ fontSize: "20px", fontWeight: "bold", letterSpacing: "0.01em", margin: "5px 10px" }}>All Clients</div>;
        }

        // COLUMNS TABLE
        const columns = [
            { field: 'clientId', headerName: 'clientId', hide: true },
            { field: 'clientName', headerName: 'Client Name', flex: 0.7 },
            { field: 'clientEmail', headerName: 'Email', flex: 1 },
            { field: 'clientWorkPhone', headerName: 'Phone', flex: 0.5 },
            { field: 'clientIndustry', headerName: 'Industry', flex: 0.7 },
            { field: 'clientPocName', headerName: 'Point of Contact', flex: 0.7 },
            { field: 'clientWebsite', headerName: 'Website', flex: 0.7 },
            {
                field: false,
                disableColumnMenu: true,
                flex: 0.4,
                renderCell: (params) => {
                    const handleEditClient = (clientId) => {
                        this.props.history.push({ pathname: `/newclient/${clientId}`, state: clientId });
                    };
                    return <Button onClick={() => {
                        handleEditClient(rows[params.rowIndex].clientId)
                    }
                    } style={{
                        color: "rgb(81, 49, 185)",
                        border: "solid 1px rgb(81, 49, 185)"
                    }}
                        startIcon={< CreateIcon style={{
                            fontSize: "23",
                            marginLeft: "13"
                        }} />}>
                    </Button >;
                }
            }
        ];

        let rows = [];
        rows = usersArr.map(function (obj, index) {
            return (
                rows = {
                    clientName: obj.clientName,
                    clientEmail: obj.clientEmail,
                    clientWorkPhone: obj.clientWorkPhone,
                    clientIndustry: obj.clientIndustry,
                    clientPocName: obj.clientPocName,
                    clientWebsite: obj.clientWebsite,
                    clientId: obj.clientId,
                    id: index
                })
        })
        return (
            <div style={{ maxWidth: "95%" }}>
                {
                    this.state.isLoading || !this.state.users ?
                        (<div>loading...</div>
                        ) : (
                            <div>
                                <TextField onChange={(e) => this.handleChange(e)} style={{ background: "white", marginTop: "15px", marginBottom: "15px" }} label="Search" variant="outlined"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <div style={{ height: 650, width: '100%', backgroundColor: "white" }}>
                                    <DataGrid components={{ Toolbar: CustomToolbar }}
                                        rows={rows} columns={columns} pageSize={10} checkboxSelection autoPageSize />
                                </div>
                            </div>
                        )
                }
            </div >
        )
    }
}

export default withRouter(TableUser);