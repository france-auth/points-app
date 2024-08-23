import { Button, Table } from '@shadcn/ui';

const UserManagement = () => {
  return (
    <div>
      <h1 className="text-2xl text-[#004a50] mb-4">User Management</h1>
      <Table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* User data will be mapped here */}
        </tbody>
      </Table>
      <Button className="mt-4 bg-[#004a50] text-white">Add New User</Button>
    </div>
  );
};

export default UserManagement;
