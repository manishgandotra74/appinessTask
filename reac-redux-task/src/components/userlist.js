import React from 'react';
import { Table } from 'antd';
import * as userActions from "../redux/actions/user-actions"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// columns for user table and keys
const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },    {
        title: 'Phone No.',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
];
class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userdata: []
        }
    }
    componentDidMount() {
// called user list api
        this.props.userlist_data().then(users=>{
              console.log(users );
              this.setState({userdata:users})
          })

        }
    render() {
        return (
            <div className="App">
                <Table dataSource={this.state.userdata} columns={columns} />;
            </div>
        );
    }
}

UserList.propTypes = {
    // saveusermessage:Proptypes.string,
    // UserListstatus:Proptypes.bool
};
function mapStateToProps(state) {
    return {
        ...state.user
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ ...userActions }, dispatch);
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(UserList));

