const formatTimestamp = (iso) => {
  const date = new Date(iso);
  return date.toLocaleString('id-ID', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const renderTaskList = (tasks, container, onEdit, onDelete, onToggle) => {
  container.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    if (task.done) li.classList.add('done');

    const time = formatTimestamp(task.timestamp);
    const labelColor = task.label || 'default';

    li.classList.add(`label-${labelColor}`);

    li.innerHTML = `
    <div class="task-main">
      <input type="checkbox" class="task-check" data-index="${index}" ${task.done ? 'checked' : ''}>
      <span class="task-text">${task.text}</span>
    </div>
    <div class="task-actions">
      <small class="timestamp">${time}</small>
      <button class="edit-btn" data-index="${index}">?</button>
      <button class="delete-btn" data-index="${index}">-</button>
    </div>
  `;


    li.querySelector('.edit-btn').addEventListener('click', () => onEdit(index));
    li.querySelector('.delete-btn').addEventListener('click', () => onDelete(index));
    li.querySelector('.task-check').addEventListener('change', () => onToggle(index));

    container.appendChild(li);
  });
};
