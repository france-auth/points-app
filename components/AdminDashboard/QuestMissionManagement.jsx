import { Button, Table } from '@shadcn/ui';

const QuestManagement = () => {
  return (
    <div>
      <h1 className="text-2xl text-[#004a50] mb-4">Quest Management</h1>
      <Table>
        <thead>
          <tr>
            <th>Quest Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Quest data will be mapped here */}
        </tbody>
      </Table>
      <Button className="mt-4 bg-[#004a50] text-white">Add New Quest</Button>
    </div>
  );
};

export default QuestManagement;
