const TableUser = (props) => {

    const { listUser } = props;

    return (
        <>
            <table className="table table-hover table-bordered border-primary">
                <thead>
                    <tr className="text-center">
                        <th scope="col">No</th>
                        <th scope="col"> ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <tr key={`user-${index}`}>
                                    <td className="text-center">{index + 1}</td>
                                    <td className="text-center">{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td className="text-center">{item.role}</td>
                                    <td>
                                        <button className="btn btn-secondary">View</button>
                                        <button className="btn btn-warning mx-3"
                                            onClick={() => props.handleClickBtnUpdate(item)}
                                        >
                                            Edit
                                        </button>
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {
                        listUser && listUser.length === 0 &&
                        <tr className='text-center'><td colSpan='5'>Not found data</td></tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default TableUser;