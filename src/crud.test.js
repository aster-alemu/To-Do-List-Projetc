const { addTask } = require('./crud');

test('add a task to the list', () => {
  TaskManipulation.addTask('Task New', testTasks.getItems());
  expect(testTasks.getItems().length).toBe(3);
});

test('adds li element to the list', () => {
  renderWithEventListeners(testTasks.getItems());
  const list = document.getElementById('task-list').childNodes.length;
  expect(list).toBe(3);
});