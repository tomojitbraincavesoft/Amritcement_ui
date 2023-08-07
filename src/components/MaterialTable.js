import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },

  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
  {
    name: {
        firstName:'Tomojit',
        lastName: 'Bose',
    },
    address:'5/2 N.C Banerjee Road Matipara Baidyabati hooghly pin 712222',
    city: 'Baidyabati',
    state: 'West Bengal',
  },
];

const Example = () => {

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name.firstName', 
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
    ],
    [],
  );
  

  return (
<>
<div className="row">
    <div className="col-md-8"></div>
    <div className="col-md-4">
    <div className="text-right">
    <button type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#myModal">
                Open modal
            </button>
    </div>
                <div class="modal fade" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Modal Heading</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            Modal body..
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
    </div>
</div>
<MaterialReactTable columns={columns} data={data} />
</>
  )

};

export default Example;
