import React from 'react'

export default function DataTable() {
  return (
    <div>
    <div className="card">
        <div className="card-body">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-8"></div>
                    <div className="col-sm-4 text-right my-3">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                Open modal
            </button>
                        <button type="button" className="btn btn-info add-new"><i className="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table id='datatable' className="table table-bordered dt-responsive  nowrap w-100">
                <thead>
                    <tr>
                        <th>Name</th>
                       <th>Email</th>
                        <th>Phone</th>
                      <th>Address</th>
                      <th>Primary Responsibility</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Jhon Doe</td>
                        <td>demo@mail.com</td>
                        <td>phone</td>
                      <td>Addres Goes Here</td>
                      <td>Responsibility</td>
                        <td>
							<a className="add" title="Add"><i className="fas fa-save"></i></a>
                            <a className="edit" title="Edit" ><i className="fas fa-edit"></i></a>
                            <a className="delete" title="Delete"><i className="fas fa-trash-alt"></i></a>
                        </td>
                    </tr>
                   
                </tbody>
            </table>

            <div class="modal fade" id="myModal">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                        <div className="row">
                            <div className="col-md-6">
                            <div class="mb-3 mt-3">
                            <label for="" class="form-label">Email:</label>
                            <input type="text" class="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            </div>
                            <div className="col-md-6">
                            <div class="mb-3 mt-3">
                            <label for="" class="form-label">Password:</label>
                            <input type="password" class="form-control" id="email" placeholder="Enter email" name="email" />
                            </div>
                            </div>
                        </div>
                            

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>

    </div>
  )
}
