const boardDataMock = {
  to_do: {
    title: "To Do",
    id: "to_do",
    items: [
      { id: "1", desc: "Make UI more interactive" },
      { id: "2", desc: "Edit functionality for cards" },
      { id: "3", desc: "Add Local Storage If Got Time" },
    ],
  },
  comp_task: {
    title: "Completed",
    id: "comp_task",
    items: [
      { id: "4", desc: "Functionality to add new card" },
      { id: "5", desc: "Delete Existing Card" },
      { id: "6", desc: "Drag and Drop functionality without library" },
      { id: "7", desc: "Repriortize if droped into same board again" },
    ],
  },
};

export default boardDataMock;
